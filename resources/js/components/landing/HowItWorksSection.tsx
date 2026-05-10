import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const steps = [
    {
        step: "1",
        title: "Input data penjualan",
        description:
            "Catat transaksi harian Anda dengan antarmuka yang bersih dan mudah digunakan di akhir hari kerja.",
    },
    {
        step: "2",
        title: "Sistem menganalisis pola bisnis",
        description:
            "Data diproses di latar belakang untuk mengidentifikasi tren pesanan dan kebutuhan bahan baku historis.",
    },
    {
        step: "3",
        title: "AI memberi rekomendasi operasional",
        description:
            "Terima saran terstruktur untuk jumlah porsi yang perlu disiapkan dan estimasi belanja esok hari.",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="cara-kerja" className="border-y bg-muted/35 py-20">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-12 max-w-3xl text-center">
                    <h2 className="font-heading text-3xl font-bold text-foreground">Cara Kerja yang Sederhana</h2>
                    <p className="mt-3 text-muted-foreground">
                        Alur kerja dirancang tenang dan efisien agar Anda fokus pada hal terpenting:
                        menyajikan makanan yang luar biasa.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {steps.map((item) => (
                        <Card key={item.step} className="border-border/60 bg-card/85 backdrop-blur">
                            <CardHeader className="items-center text-center">
                                <div className="mb-1 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-bold text-primary">
                                    {item.step}
                                </div>
                                <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-sm text-muted-foreground">
                                {item.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

