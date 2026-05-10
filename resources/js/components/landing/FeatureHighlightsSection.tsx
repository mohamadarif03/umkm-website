import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function FeatureHighlightsSection() {
    return (
        <section id="fitur" className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
                <h2 className="font-heading text-3xl font-bold text-foreground">Fitur Utama</h2>
                <p className="mt-3 text-muted-foreground">
                    Dirancang khusus untuk realitas operasional bisnis kuliner.
                </p>
            </div>

            <div className="grid auto-rows-[240px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-border/60 bg-card/85 p-1 lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="font-heading text-2xl">Prediksi penjualan</CardTitle>
                    </CardHeader>
                    <CardContent className="flex h-full flex-col justify-between gap-5 md:flex-row">
                        <p className="max-w-md text-sm text-muted-foreground">
                            Perkiraan akurat berbasis data masa lalu untuk mengurangi risiko kehabisan stok atau
                            sisa makanan yang terbuang.
                        </p>
                        {/* <div className="h-40 w-full rounded-lg border bg-muted/30 md:h-20 md:w-2/5">
                            <div className="h-full w-full bg-gradient-to-tr from-primary/20 via-primary/5 to-transparent" />
                        </div> */}
                    </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/85">
                    <CardHeader>
                        <CardTitle className="font-heading">Rekomendasi produksi</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Angka pasti untuk panduan persiapan dapur harian Anda.
                    </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/85">
                    <CardHeader>
                        <CardTitle className="font-heading">Analisis faktor eksternal</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        Mempertimbangkan cuaca dan hari libur dalam rekomendasi produksi.
                    </CardContent>
                </Card>

                <Card className="border-border/60 bg-card/85 lg:col-span-2">
                    <CardHeader>
                        <CardTitle className="font-heading">Insight operasional bisnis</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2">
                        <p className="text-sm text-muted-foreground">
                            Laporan mingguan ringkas untuk mengukur efisiensi pengeluaran dan pendapatan
                            operasional Anda.
                        </p>
                        <div className="space-y-3 rounded-lg border bg-muted/30 p-4">
                            <div className="h-8 rounded border bg-background" />
                            <div className="h-8 rounded border bg-background" />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}

