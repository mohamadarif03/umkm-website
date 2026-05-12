const capabilities = [
    "AI Forecasting",
    "Rekomendasi Produksi",
    "Faktor Eksternal",
    "Insight Operasional",
];

export default function CapabilityStripSection() {
    return (
        <section className="border-b bg-background py-7">
            <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 sm:px-6 md:justify-between lg:px-8">
                {capabilities.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-sm font-medium text-muted-foreground">{item}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

