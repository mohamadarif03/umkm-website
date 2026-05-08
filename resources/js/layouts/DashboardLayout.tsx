import type { ReactNode } from "react";
import { Badge } from "../components/ui/badge";
import AppLayout from "./AppLayout";

type DashboardLayoutProps = {
    children: ReactNode;
};

const menu = [
    { label: "Overview", active: true },
    { label: "Sales", active: false },
    { label: "Products", active: false },
    { label: "Customers", active: false },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <AppLayout
            title="UMKM Dashboard"
            subtitle="Mock analytics with static data"
            actions={<Badge variant="success">Live Preview</Badge>}
        >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[220px,1fr]">
                <aside className="rounded-xl border bg-card p-4">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Navigation</p>
                    <nav className="space-y-1">
                        {menu.map((item) => (
                            <div
                                key={item.label}
                                className={
                                    item.active
                                        ? "rounded-md bg-primary/10 px-3 py-2 text-sm font-medium text-primary"
                                        : "rounded-md px-3 py-2 text-sm text-muted-foreground"
                                }
                            >
                                {item.label}
                            </div>
                        ))}
                    </nav>
                </aside>
                <section>{children}</section>
            </div>
        </AppLayout>
    );
}
