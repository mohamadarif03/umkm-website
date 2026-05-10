import { Link, usePage } from "@inertiajs/react";
import {
    IconChevronLeft,
    IconChevronRight,
    IconLayoutDashboard,
    IconLogout,
    IconBulb ,
    IconMenu2,
    IconPackage,
    IconSettings,
    IconUser,
} from "@tabler/icons-react";
import { useState, type ReactNode } from "react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import { logout } from "../lib/auth-api";
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

const mainNav: NavItem[] = [
    { label: "Dasbor Utama", href: "/dashboard", icon: <IconLayoutDashboard size={18} /> },
    { label: "Produk", href: "/dashboard/produk", icon: <IconPackage size={18} /> },
    { label: "Insight", href: "/dashboard/insight", icon: <IconBulb size={18} /> },
];

const secondaryNav: NavItem[] = [
    { label: "Pengaturan Bisnis", href: "/dashboard/pengaturan-bisnis", icon: <IconSettings size={18} /> },
    { label: "Profile", href: "/dashboard/profile", icon: <IconUser size={18} /> },
];

function NavList({
    items,
    collapsed,
    currentPath,
    onSelect,
}: {
    items: NavItem[];
    collapsed: boolean;
    currentPath: string;
    onSelect?: () => void;
}) {
    return (
        <nav className="space-y-1">
            {items.map((item) => {
                const active = currentPath === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onSelect}
                        className={cn(
                            "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                            active
                                ? "bg-primary text-primary-foreground shadow-sm"
                                : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
                        )}
                    >
                        <span className="shrink-0">{item.icon}</span>
                        <span className={cn("truncate", collapsed ? "hidden" : "block")}>{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default function DashboardLayout({ title, description, children }: DashboardLayoutProps) {
    const { url } = usePage();
    const [desktopCollapsed, setDesktopCollapsed] = useState(false);
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    async function handleLogout() {
        if (isLoggingOut) {
            return;
        }

        setIsLoggingOut(true);

        try {
            await logout();
        } finally {
            window.location.href = "/login";
        }
    }

    return (
        <AppLayout>
            <div className="flex min-h-screen">
                <aside
                    className={cn(
                        "hidden sticky top-0 border-r bg-card/90 backdrop-blur md:flex md:flex-col md:h-screen md:justify-between transition-all duration-300",
                        desktopCollapsed ? "md:w-20" : "md:w-72"
                    )}
                >
                    <div className="space-y-6 p-4">
                        <div className="flex items-center justify-between">
                            <div className={cn("space-y-0.5", desktopCollapsed && "hidden")}>
                                <p className="text-lg font-semibold text-foreground">Asisten UMKM</p>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setDesktopCollapsed((value) => !value)}
                                aria-label={desktopCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                            >
                                {desktopCollapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <NavList items={mainNav} collapsed={desktopCollapsed} currentPath={url} />
                        </div>
                    </div>

                    <div className="border-t p-4">
                        <p className={cn("mb-2 px-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground", desktopCollapsed && "hidden")}>
                            Lainnya
                        </p>
                        <NavList items={secondaryNav} collapsed={desktopCollapsed} currentPath={url} />
                        <Button
                            variant="ghost"
                            className={cn("mt-2 w-full justify-start gap-3 text-muted-foreground hover:text-primary", desktopCollapsed && "justify-center")}
                            onClick={() => void handleLogout()}
                            disabled={isLoggingOut}
                        >
                            <IconLogout size={18} />
                            <span className={cn(desktopCollapsed && "hidden")}>
                                {isLoggingOut ? "Keluar..." : "Logout"}
                            </span>
                        </Button>
                    </div>
                </aside>

                <div className="flex flex-1 flex-col">
                    <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur">
                        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-3">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="icon" className="md:hidden" aria-label="Open sidebar menu">
                                            <IconMenu2 size={18} />
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="p-0">
                                        <SheetHeader className="border-b px-4 py-4">
                                            <SheetTitle>Asisten UMKM</SheetTitle>
                                            <SheetDescription>Navigasi utama aplikasi</SheetDescription>
                                        </SheetHeader>
                                        <div className="space-y-6 p-4">
                                            <div className="space-y-2">
                                                <p className="px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Navigasi</p>
                                                <NavList
                                                    items={mainNav}
                                                    collapsed={false}
                                                    currentPath={url}
                                                    onSelect={() => {
                                                        const closeButton = document.querySelector<HTMLButtonElement>("[data-radix-dialog-close]");
                                                        closeButton?.click();
                                                    }}
                                                />
                                            </div>
                                            <div className="space-y-2 border-t pt-4">
                                                <p className="px-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">Lainnya</p>
                                                <NavList
                                                    items={secondaryNav}
                                                    collapsed={false}
                                                    currentPath={url}
                                                    onSelect={() => {
                                                        const closeButton = document.querySelector<HTMLButtonElement>("[data-radix-dialog-close]");
                                                        closeButton?.click();
                                                    }}
                                                />
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start gap-3 text-muted-foreground hover:text-primary"
                                                    onClick={() => void handleLogout()}
                                                    disabled={isLoggingOut}
                                                >
                                                    <IconLogout size={18} />
                                                    {isLoggingOut ? "Keluar..." : "Logout"}
                                                </Button>
                                            </div>
                                        </div>
                                        <SheetClose className="hidden" />
                                    </SheetContent>
                                </Sheet>

                                <div>
                                    <h1 className="font-heading text-lg font-semibold tracking-tight">{title}</h1>
                                    <p className="text-xs text-muted-foreground sm:text-sm">{description}</p>
                                </div>
                            </div>
                            {/* <Badge variant="success">Emerald Preview</Badge> */}
                        </div>
                    </header>

                    <main className="flex-1 px-4 py-5 sm:px-6 lg:px-8">{children}</main>
                </div>
            </div>
        </AppLayout>
    );
}
