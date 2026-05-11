import { Link, usePage } from "@inertiajs/react";
import { IconBulb, IconLayoutDashboard, IconMenu2, IconPackage } from "@tabler/icons-react";
import { useState, type ReactNode } from "react";
import AuthButton from "../components/AuthButton";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import { cn } from "../lib/utils";
import AppLayout from "./AppLayout";

type DashboardLayoutProps = {
    title: string;
    description: string;
    children: ReactNode;
};

type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
};

const navItems: NavItem[] = [
    { label: "Dasbor Utama", href: "/dashboard", icon: <IconLayoutDashboard size={18} /> },
    { label: "Produk", href: "/dashboard/produk", icon: <IconPackage size={18} /> },
    { label: "Insight", href: "/dashboard/insight", icon: <IconBulb size={18} /> },
];

function NavbarLinks({
    items,
    currentPath,
    mobile = false,
    onSelect,
}: {
    items: NavItem[];
    currentPath: string;
    mobile?: boolean;
    onSelect?: () => void;
}) {
    return (
        <nav className={cn("flex items-center gap-1", mobile && "flex-col items-stretch gap-2")}>
            {items.map((item) => {
                const active = currentPath === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onSelect}
                        className={cn(
                            "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                            active
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary",
                            mobile && "w-full"
                        )}
                    >
                        <span className="shrink-0">{item.icon}</span>
                        <span>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default function DashboardLayout({ title, description, children }: DashboardLayoutProps) {
    const { url } = usePage();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <AppLayout>
            <div className="flex min-h-screen flex-col">
                <header className="sticky top-0 z-30 border-b bg-card/90 backdrop-blur">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-3">
                            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                                        <IconMenu2 size={18} />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="left" className="p-0">
                                    <SheetHeader className="border-b px-4 py-4">
                                        <SheetTitle>Asisten UMKM</SheetTitle>
                                        <SheetDescription>Navigasi aplikasi</SheetDescription>
                                    </SheetHeader>
                                    <div className="space-y-4 p-4">
                                        <NavbarLinks items={navItems} currentPath={url} mobile onSelect={() => setMobileOpen(false)} />
                                    </div>
                                </SheetContent>
                            </Sheet>

                            <div className="hidden items-center gap-3 md:flex">
                                <p className="text-sm font-semibold text-foreground">Asisten UMKM</p>
                                {/* <Badge variant="success">Emerald Preview</Badge> */}
                            </div>
                        </div>

                        <div className="hidden md:block">
                            <NavbarLinks items={navItems} currentPath={url} />
                        </div>

                        <AuthButton />
                    </div>
                </header>

                <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <h1 className="font-heading text-xl font-semibold tracking-tight">{title}</h1>
                        <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                    {children}
                </main>
            </div>
        </AppLayout>
    );
}
