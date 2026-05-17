import { Head, Link, useForm } from "@inertiajs/react";
import { IconUserPlus } from "@tabler/icons-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import AppLayout from "../layouts/AppLayout";

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};

export default function RegisterPage() {
    const { data, setData, post, processing, errors } = useForm<RegisterForm>({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post("/register");
    }

    return (
        <AppLayout>
            <Head title="Register" />

            <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-background via-background to-emerald-100/40 px-4 py-8 md:px-8 md:py-12">
                <Card className="mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border-border/60 p-0 shadow-xl">
                    <div className="relative bg-card px-6 py-8 md:px-10 md:py-10">
                        <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-emerald-200/45 blur-2xl" />
                        <div className="pointer-events-none absolute -bottom-14 -left-14 h-36 w-36 rounded-full bg-emerald-100/60 blur-2xl" />
                        <CardHeader className="space-y-3 px-0 pb-7 pt-0">
                            <div className="inline-flex w-fit items-center gap-3 rounded-xl bg-primary/10 px-3 py-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                    <IconUserPlus size={18} />
                                </div>
                                <span className="text-lg font-bold tracking-tight">
                                    Teh<span className="text-primary">Mbois</span> Admin
                                </span>
                            </div>
                            <div>
                                <CardTitle className="text-3xl font-bold tracking-tight">Daftarkan Akun Tim Outlet</CardTitle>
                                <CardDescription className="mt-1 text-base text-muted-foreground">
                                    Tambahkan akun baru untuk kasir, staf, atau pengelola operasional TehMbois.
                                </CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent className="px-0 pb-0 pt-0">
                            <form onSubmit={submit} className="space-y-4">
                                <div className="space-y-1.5">
                                    <label htmlFor="name" className="text-sm font-semibold">
                                        Nama
                                    </label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Nama Anda"
                                        value={data.name}
                                        onChange={(event) => setData("name", event.target.value)}
                                        required
                                        className="h-12 rounded-xl bg-muted/50"
                                    />
                                    {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
                                </div>

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

                                <div className="space-y-1.5">
                                    <label htmlFor="password_confirmation" className="text-sm font-semibold">
                                        Konfirmasi Password
                                    </label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        placeholder="******"
                                        value={data.password_confirmation}
                                        onChange={(event) => setData("password_confirmation", event.target.value)}
                                        required
                                        className="h-12 rounded-xl bg-muted/50"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                                    <Button type="submit" disabled={processing} className="h-11 min-w-36 rounded-xl">
                                        {processing ? "Memproses..." : "Daftar"}
                                    </Button>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        Sudah punya akun?
                                        <Button asChild variant="outline" className="h-11 rounded-xl">
                                            <Link href="/login"> Masuk</Link>
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
