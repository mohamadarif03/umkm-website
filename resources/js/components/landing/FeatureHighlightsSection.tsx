import { Card } from "../ui/card";

type FeatureItem = {
    title: string;
    description: string;
    accent: string;
};

const features: FeatureItem[] = [
    {
        title: "Prediksi penjualan harian berbasis data riil",
        description:
            "Sistem membaca pola pesanan, jam ramai, dan hari khusus agar tim Anda menyiapkan produksi lebih presisi.",
        accent: "Forecast",
    },
    {
        title: "Rekomendasi produksi untuk dapur yang lebih efisien",
        description:
            "Dapatkan saran jumlah porsi dan prioritas menu setiap hari supaya stok tetap sehat dan limbah berkurang.",
        accent: "Produksi",
    },
    {
        title: "Insight operasional yang mudah dipahami semua tim",
        description:
            "Ringkasan performa dan rekomendasi tindakan ditampilkan dalam format sederhana untuk owner dan staf.",
        accent: "Insight",
    },
    {
        title: "Analisis faktor eksternal untuk keputusan lebih matang",
        description:
            "Data cuaca, momen libur, dan tren demand ikut dipertimbangkan agar keputusan operasional lebih relevan.",
        accent: "Eksternal",
    },
];

function PhoneMock({ accent }: { accent: string }) {
    return (
        <Card className="mx-auto w-[220px] rounded-[2rem] border-border/70 bg-white p-3 shadow-xl">
            <div className="rounded-[1.4rem] border bg-muted/30 p-3">
                <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-border" />
                <div className="space-y-2">
                    <div className="h-3 w-24 rounded bg-border/80" />
                    <div className="h-8 rounded-md bg-white shadow-sm" />
                    <div className="h-8 rounded-md bg-white shadow-sm" />
                    <div className="rounded-md bg-primary/10 p-2">
                        <p className="text-xs font-semibold text-primary">{accent}</p>
                        <div className="mt-1 h-2 rounded bg-primary/30" />
                    </div>
                    <div className="h-8 rounded-md bg-white shadow-sm" />
                </div>
            </div>
        </Card>
    );
}

export default function FeatureHighlightsSection() {
    return (
        <section id="fitur" className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
                <h2 className="font-heading text-3xl font-bold text-foreground">Fitur Utama</h2>
                <p className="mt-3 text-muted-foreground">
                    Dirancang khusus untuk realitas operasional bisnis kuliner.
                </p>
            </div>

            <div className="space-y-24 lg:space-y-40">
                {features.map((item, index) => {
                    const reverse = index % 2 === 1;
                    return (
                        <div key={item.title} className="grid items-center gap-10 md:grid-cols-2">
                            <div className={reverse ? "md:order-2" : ""}>
                                <p className="mb-3 text-sm font-semibold text-primary">Layanan Kami</p>
                                <h3 className="font-heading text-3xl font-bold leading-tight text-foreground">
                                    {item.title}
                                </h3>
                                <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                            <div className={reverse ? "md:order-1" : ""}>
                                <div className="relative">
                                    <PhoneMock accent={item.accent} />
                                    <div className="absolute -bottom-4 -right-3 hidden h-14 w-14 rounded-xl bg-primary/10 md:block" />
                                    <div className="absolute -left-4 -top-4 hidden h-10 w-10 rounded-full bg-primary/15 md:block" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
