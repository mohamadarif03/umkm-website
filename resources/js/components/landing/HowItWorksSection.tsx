import { IconBrain, IconBulb, IconReceipt2 } from "@tabler/icons-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const steps = [
    {
        step: "1",
        icon: IconReceipt2,
        title: "Input data penjualan",
        description:
            "Catat transaksi harian Anda dengan antarmuka yang bersih dan mudah digunakan di akhir hari kerja.",
    },
    {
        step: "2",
        icon: IconBrain,
        title: "Sistem menganalisis pola bisnis",
        description:
            "Data diproses di latar belakang untuk mengidentifikasi tren pesanan dan kebutuhan bahan baku historis.",
    },
    {
        step: "3",
        icon: IconBulb,
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
                    {steps.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Card key={item.step} className="border-border/60 bg-card/90 backdrop-blur">
                                <CardHeader className="items-start text-left">
                                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                                        <Icon size={22} stroke={2.1} />
                                    </div>
                                    <p className="text-xs text-muted-foreground">Step {item.step}</p>
                                    <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="text-sm text-muted-foreground">
                                    {item.description}
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
