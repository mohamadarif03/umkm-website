import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";

export default function ClosingCtaSection() {
    return (
        <section className="bg-primary/5 py-20">
            <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="font-heading text-3xl font-bold text-foreground">
                    Siap Mengelola Operasional Lebih Cerdas?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                    Bergabunglah dengan pengusaha F&amp;B yang sudah mengoptimalkan produksi dan mengurangi limbah.
                </p>
                <Button asChild size="lg" className="mt-8">
                    <Link href="/login">Masuk ke Sistem</Link>
                </Button>
            </div>
        </section>
    );
}

