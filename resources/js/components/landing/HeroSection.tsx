import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

export default function HeroSection() {
    return (
        <section className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-24 pt-14 text-center sm:px-6 lg:px-8 lg:pt-24">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
                <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
                    Prediksi penjualan dan rekomendasi produksi harian untuk{" "}
                    <span className="text-primary">UMKM F&amp;B</span>.
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground">
                    Tingkatkan kendali atas bisnis makanan Anda. Sistem pintar kami membantu Anda
                    mengoptimalkan stok, mengurangi pemborosan, dan melayani pelanggan lebih baik setiap hari.
                </p>
                <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">
                    <Button asChild size="lg" className="sm:min-w-44">
                        <Link href="/login">Masuk ke Sistem</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="sm:min-w-44">
                        <a href="#fitur">Pelajari Insight</a>
                    </Button>
                </div>
            </div>

            <Card className="relative mx-auto w-full max-w-5xl overflow-hidden border-border/70 bg-card p-4 shadow-lg sm:p-6">
                <div className="grid gap-4">
                    <div className="flex h-10 items-center justify-between rounded-lg border bg-muted/40 px-4">
                        <div className="h-2 w-24 rounded-full bg-border" />
                        <div className="h-6 w-6 rounded-full bg-border" />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-lg border bg-background p-4 text-left">
                            <p className="text-xs text-muted-foreground">Prediksi Hari Ini</p>
                            <p className="mt-2 text-xl font-semibold text-foreground">+18% Pesanan</p>
                        </div>
                        <div className="rounded-lg border bg-background p-4 text-left">
                            <p className="text-xs text-muted-foreground">Estimasi Bahan</p>
                            <p className="mt-2 text-xl font-semibold text-foreground">Stok Aman 2 Hari</p>
                        </div>
                    </div>
                    <div className="h-44 rounded-lg border bg-background p-4">
                        <div className="relative h-full w-full rounded-md border border-dashed border-primary/30">
                            <div className="absolute bottom-0 left-0 h-2/3 w-full bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5">
                    <button
                        type="button"
                        className="flex h-14 w-14 items-center justify-center rounded-full border bg-background text-lg font-semibold text-primary shadow-md transition-transform hover:scale-105"
                        aria-label="Play preview"
                    >
                        &gt;
                    </button>
                </div>
            </Card>
        </section>
    );
}

