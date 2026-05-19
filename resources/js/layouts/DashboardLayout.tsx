import { Link, usePage } from "@inertiajs/react";
import {
    IconBell,
    IconBulb,
    IconChartBar,
    IconLayoutDashboard,
    IconMenu2,
    IconPackage,
    IconReceipt,
    IconSearch,
    IconCalendarEvent,
    IconFileAnalytics,
    IconBuildingStore,
} from "@tabler/icons-react";
import { useState, type ReactNode } from "react";
import AuthButton from "../components/AuthButton";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import type { InertiaPageProps } from "../types/page-props";
import { cn } from "../lib/utils";
import AppLayout from "./AppLayout";

type DashboardLayoutProps = {
    title: string;
    description: string;
    children: ReactNode;
    greenBackground?: boolean;
};

type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
};

const navItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: <IconLayoutDashboard size={18} /> },
    { label: "Bisnis & Kedai", href: "/dashboard/manajemen-bisnis", icon: <IconBuildingStore size={18} /> },
    { label: "Manajemen Menu", href: "/dashboard/manajemen-menu", icon: <IconPackage size={18} /> },
    { label: "Penjualan", href: "/dashboard/penjualan", icon: <IconReceipt size={18} /> },
    { label: "Prediksi AI", href: "/dashboard/prediksi", icon: <IconChartBar size={18} /> },
    { label: "Faktor Eksternal", href: "/dashboard/faktor-eksternal", icon: <IconCalendarEvent size={18} /> },
    { label: "Laporan", href: "/dashboard/laporan", icon: <IconFileAnalytics size={18} /> },
];

function DesktopNavLinks({ items, currentPath }: { items: NavItem[]; currentPath: string }) {
    return (
        <nav className="flex items-center gap-1">
            {items.map((item) => {
                const active = currentPath === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                            "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300",
                            active
                                ? "text-white"
                                : "text-white/70 hover:text-white"
                        )}
                    >
                        {item.label}
                        {active && (
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-white" />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}

function MobileNavLinks({
    items,
    currentPath,
    onSelect,
}: {
    items: NavItem[];
    currentPath: string;
    onSelect?: () => void;
}) {
    return (
        <nav className="flex flex-col gap-1">
            {items.map((item) => {
                const active = currentPath === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={onSelect}
                        className={cn(
                            "inline-flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                            active
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
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

export default function DashboardLayout({ title, description, greenBackground, children }: DashboardLayoutProps) {
    const { url } = usePage<InertiaPageProps>();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <AppLayout>
            <div className={cn(
                "flex min-h-screen flex-col",
                greenBackground ? "bg-gradient-to-br from-emerald-50/50 via-background to-emerald-50/30" : "bg-muted/20"
            )}>
                <header className="sticky top-0 z-30">
                    <div className="relative overflow-hidden">
                        <img
                            src="/es teh/navowner.jpeg"
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/85 via-emerald-900/75 to-emerald-950/85" />
                        <div className="absolute inset-0 bg-black/20" />

                        <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                            <div className="flex items-center gap-6">
                                <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                                    <SheetTrigger asChild>
                                        <button className="text-white/80 transition-colors hover:text-white md:hidden" aria-label="Open menu">
                                            <IconMenu2 size={22} />
                                        </button>
                                    </SheetTrigger>
                                    <SheetContent side="left" className="w-72 p-0">
                                        <SheetHeader className="border-b px-5 py-4">
                                            <SheetTitle className="flex items-center gap-2.5">
                                                <img src="/logo.svg" alt="TehMbois" className="h-7 w-auto" />
                                                <span className="text-base font-bold">TehMbois</span>
                                            </SheetTitle>
                                            <SheetDescription>Outlet Management System</SheetDescription>
                                        </SheetHeader>
                                        <div className="p-3">
                                            <MobileNavLinks items={navItems} currentPath={url} onSelect={() => setMobileOpen(false)} />
                                        </div>
                                    </SheetContent>
                                </Sheet>

                                <Link href="/dashboard" className="flex items-center gap-2.5">
                                    <img src="/logo.svg" alt="TehMbois" className="h-8 w-auto brightness-0 invert" />
                                </Link>
                            </div>

                            <div className="hidden md:block">
                                <DesktopNavLinks items={navItems} currentPath={url} />
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="hidden text-white/60 transition-colors hover:text-white sm:block">
                                    <IconSearch size={18} />
                                </button>
                                <button className="relative text-white/60 transition-colors hover:text-white">
                                    <IconBell size={18} />
                                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full border border-emerald-900 bg-emerald-400" />
                                </button>
                                <AuthButton />
                            </div>
                        </div>
                    </div>
                </header>

                <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-8">
                            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{title}</h1>
                            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                        </div>
                        {children}
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}
