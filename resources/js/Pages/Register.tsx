import { Head, Link, useForm } from "@inertiajs/react";
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

            <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>Buat akun untuk mengelola operasional bisnis.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nama
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Nama Anda"
                                    value={data.name}
                                    onChange={(event) => setData("name", event.target.value)}
                                    required
                                />
                                {errors.name ? <p className="text-sm text-destructive">{errors.name}</p> : null}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="user@example.com"
                                    value={data.email}
                                    onChange={(event) => setData("email", event.target.value)}
                                    required
                                />
                                {errors.email ? <p className="text-sm text-destructive">{errors.email}</p> : null}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="password" className="text-sm font-medium">
                                    Password
                                </label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="******"
                                    value={data.password}
                                    onChange={(event) => setData("password", event.target.value)}
                                    required
                                />
                                {errors.password ? <p className="text-sm text-destructive">{errors.password}</p> : null}
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="password_confirmation" className="text-sm font-medium">
                                    Konfirmasi Password
                                </label>
                                <Input
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="******"
                                    value={data.password_confirmation}
                                    onChange={(event) => setData("password_confirmation", event.target.value)}
                                    required
                                />
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Button type="submit" disabled={processing}>
                                    {processing ? "Memproses..." : "Register"}
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/login">Buka Login</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </AppLayout>
    );
}
