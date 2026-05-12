import { Link } from "@inertiajs/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

function DesktopMock() {
    return (
        <Card className="aspect-[16/9] w-full rounded-2xl border-white/25 bg-white p-4 shadow-2xl">
            <div className="flex h-full flex-col rounded-xl border bg-muted/35 p-4">
                <div className="mb-3 h-2 w-28 rounded bg-border/80" />
                <div className="mb-3 grid grid-cols-3 gap-2">
                    <div className="h-16 rounded-lg bg-white shadow-sm" />
                    <div className="h-16 rounded-lg bg-white shadow-sm" />
                    <div className="h-16 rounded-lg bg-white shadow-sm" />
                </div>
                <div className="grid flex-1 grid-cols-4 gap-2">
                    <div className="col-span-3 rounded-lg bg-white shadow-sm" />
                    <div className="rounded-lg bg-white shadow-sm" />
                </div>
                <div className="mt-3 rounded-lg bg-primary/10 p-2">
                    <p className="text-xs font-semibold text-primary">Desktop Dashboard</p>
                    <div className="mt-1 h-2 rounded bg-primary/35" />
                </div>
            </div>
        </Card>
    );
}

function MobileMock() {
    return (
        <Card className="aspect-[9/16] w-full rounded-[2rem] border-white/30 bg-white p-3 shadow-2xl">
            <div className="flex h-full flex-col rounded-[1.5rem] border bg-muted/35 p-3">
                <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border" />
                <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-border/80" />
                    <div className="h-9 rounded-lg bg-white shadow-sm" />
                    <div className="h-9 rounded-lg bg-white shadow-sm" />
                    <div className="rounded-lg bg-primary/10 p-2">
                        <p className="text-xs font-semibold text-primary">Mobile App</p>
                        <div className="mt-1 h-2 rounded bg-primary/35" />
                    </div>
                    <div className="h-9 rounded-lg bg-white shadow-sm" />
                    <div className="h-9 rounded-lg bg-white shadow-sm" />
                </div>
            </div>
        </Card>
    );
}

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground sm:py-20 lg:py-24">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
                <div className="max-w-xl space-y-6 text-center lg:text-left">
                    <p className="text-sm text-primary-foreground/70">Asisten UMKMmu</p>
                    <h1 className="font-heading text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                        Prediksi penjualan dan rekomendasi produksi harian untuk UMKM F&B.
                    </h1>
                    <p className="text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                        Pantau penjualan, analisis pola bisnis, dan dapatkan rekomendasi produksi harian berbasis AI.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <Button
                            asChild
                            size="lg"
                            className="h-12 rounded-full text-bold bg-amber-500 px-10 text-white hover:bg-amber-400"
                        >
                            <Link href="/login">Mulai Kelola Bisnis</Link>
                        </Button>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-[620px]">
                    <div className="relative">
                        <DesktopMock />
                        <div className="absolute -bottom-10 right-3 w-[34%] min-w-[130px] max-w-[210px] sm:-bottom-12 sm:right-5">
                            <MobileMock />
                        </div>
                    </div>
                    <div className="mt-14 flex justify-center lg:justify-end">
                        <div className="rounded-2xl border border-white/30 bg-white/15 p-3 text-sm backdrop-blur">
                            <p className="font-semibold text-white">Cobain sekarang!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

