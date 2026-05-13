import { Head, Link, useForm } from "@inertiajs/react";
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

            <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Masuk untuk mengakses dashboard bisnis.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit} className="space-y-4">
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

                            <label className="flex items-center gap-2 text-sm text-muted-foreground">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(event) => setData("remember", event.target.checked)}
                                />
                                Ingat saya
                            </label>

                            <div className="flex flex-wrap gap-2">
                                <Button type="submit" disabled={processing}>
                                    {processing ? "Memproses..." : "Login"}
                                </Button>
                                <Button asChild variant="outline">
                                    <Link href="/register">Buka Register</Link>
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </AppLayout>
    );
}
