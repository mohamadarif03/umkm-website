import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";

export default function ClosingCtaSection() {
    return (
        <section className="bg-primary py-20 text-primary-foreground">
            <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                <h2 className="font-cherry-freeland text-3xl font-bold">
                    Siap Mengelola Operasional Lebih Cerdas?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/85">
                    Bergabunglah dengan pengusaha F&amp;B yang sudah mengoptimalkan produksi dan mengurangi limbah.
                </p>
                <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
                    <Link href="/login">Masuk/Daftar</Link>
                </Button>
            </div>
        </section>
    );
}
