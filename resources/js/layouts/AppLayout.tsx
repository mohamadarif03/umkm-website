import type { ReactNode } from "react";

type AppLayoutProps = {
    title: string;
    subtitle?: string;
    actions?: ReactNode;
    children: ReactNode;
};

export default function AppLayout({ title, subtitle, actions, children }: AppLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <header className="border-b bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/70">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                    <div>
                        <h1 className="font-heading text-xl font-bold">{title}</h1>
                        {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
                    </div>
                    {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
                </div>
            </header>
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">{children}</main>
        </div>
    );
}
