import { Head, Link, useForm } from "@inertiajs/react";
import { IconCpu } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import AppLayout from "../layouts/AppLayout";

type LoginForm = {
    email: string;
    password: string;
    remember: boolean;
};

export default function LoginPage() {
    const { data, setData, post, processing, errors } = useForm<LoginForm>({
        email: "",
        password: "",
        remember: false,
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post("/login");
    }

    return (
        <AppLayout>
            <Head title="Login" />

            <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-background via-background to-emerald-100/40 px-4 py-8 md:px-8 md:py-12">
                <Card className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border-border/60 p-0 shadow-xl">
                    <div className="relative bg-card px-6 py-8 md:px-10 md:py-10">
                        <div className="pointer-events-none absolute -right-14 -top-14 h-50 w-60 rounded-full bg-emerald-200/20 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-emerald-100/50 blur-2xl" />
                            <CardHeader className="space-y-3 px-0 pb-7 pt-0">
                                <div className="inline-flex w-fit items-center gap-3 rounded-xl bg-primary/10 px-3 py-2">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                        <IconCpu size={18} />
                                    </div>
                                    <span className="text-lg font-bold tracking-tight">
                                        Teh<span className="text-primary">Mbois</span> Admin
                                    </span>
                                </div>
                                <div>
                                    <CardTitle className="text-3xl font-bold tracking-tight">Masuk ke Dashboard Outlet</CardTitle>
                                    <CardDescription className="mt-1 text-base text-muted-foreground">
                                        Pantau penjualan harian, performa menu, dan insight operasional TehMbois.
                                    </CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent className="px-0 pb-0 pt-0">
                                <form onSubmit={submit} className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-sm font-semibold">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="user@example.com"
                                            value={data.email}
                                            onChange={(event) => setData("email", event.target.value)}
                                            required
                                            className="h-12 rounded-xl bg-muted/50"
                                        />
                                        {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="password" className="text-sm font-semibold">
                                            Password
                                        </label>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="******"
                                            value={data.password}
                                            onChange={(event) => setData("password", event.target.value)}
                                            required
                                            className="h-12 rounded-xl bg-muted/50"
                                        />
                                        {errors.password ? <p className="text-sm text-destructive">{errors.password}</p> : null}
                                    </div>

                                    <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <input
                                            type="checkbox"
                                            checked={data.remember}
                                            onChange={(event) => setData("remember", event.target.checked)}
                                        />
                                        Ingat saya
                                    </label>

                                    <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-sm">
                                        <p className="font-semibold text-foreground">Info Login:</p>
                                        <p className="mt-1 text-muted-foreground">Gunakan akun owner atau kasir yang terdaftar.</p>
                                        <p className="text-muted-foreground">Hubungi admin pusat jika lupa akses.</p>
                                    </div>

                                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                                        <Button type="submit" disabled={processing} className="h-11 min-w-36 rounded-xl">
                                            {processing ? "Memproses..." : "Masuk"}
                                        </Button>
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            Belum punya akun?
                                            <Button asChild variant="outline" className="h-11 rounded-xl">
                                                <Link href="/register"> Daftar</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                    </div>
                </Card>
            </main>
        </AppLayout>
    );
}