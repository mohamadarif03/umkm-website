import { Head, Link } from "@inertiajs/react";
import { FormEvent, useState } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import AppLayout from "../../layouts/AppLayout";
import { getApiErrorMessage, register } from "../../lib/auth-api";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setError("");
        setMessage("");

        try {
            const user = await register({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            setMessage(`Register berhasil untuk ${user.email}. Lanjut login untuk mendapat token.`);
        } catch (submitError) {
            setError(getApiErrorMessage(submitError));
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <AppLayout>
            <Head title="Auth Register" />

            <main className="mx-auto flex min-h-screen w-full max-w-4xl items-center justify-center px-4 py-10">
                <Card className="w-full max-w-lg">
                    <CardHeader>
                        <CardTitle>Register</CardTitle>
                        <CardDescription>Buat akun baru untuk mulai menggunakan aplikasi.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1.5">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nama
                                </label>
                                <Input
                                    id="name"
                                    placeholder="John Doe"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    required
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="user@example.com"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="space-y-1.5">
                                    <label htmlFor="password" className="text-sm font-medium">
                                        Password
                                    </label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="******"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label htmlFor="password_confirmation" className="text-sm font-medium">
                                        Konfirmasi Password
                                    </label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        placeholder="******"
                                        value={passwordConfirmation}
                                        onChange={(event) => setPasswordConfirmation(event.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {message ? (
                                <p className="rounded-md border border-emerald-600/20 bg-emerald-600/10 px-3 py-2 text-sm text-emerald-700">
                                    {message}
                                </p>
                            ) : null}
                            {error ? (
                                <p className="rounded-md border border-red-600/20 bg-red-600/10 px-3 py-2 text-sm text-red-700">
                                    {error}
                                </p>
                            ) : null}

                            <div className="flex flex-wrap gap-2">
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Memproses..." : "Register"}
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
