import { Head } from "@inertiajs/react";
import { IconRobotFace } from "@tabler/icons-react";
import ProductTableCard from "../components/dashboard/ProductTableCard";
import StatGrid from "../components/dashboard/StatGrid";
import TrendChartCard from "../components/dashboard/TrendChartCard";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
    { label: "Omzet Mingguan", value: "Rp 14.250.000", delta: "+12.4%", variant: "success" as const },
    { label: "Pesanan Aktif", value: "1.284", delta: "+5.1%", variant: "default" as const },
    { label: "Akurasi Forecast", value: "91%", delta: "+3.2%", variant: "secondary" as const },
    { label: "Potensi Waste", value: "6.4%", delta: "-1.1%", variant: "warning" as const },
];

export default function Dashboard() {
    return (
        <DashboardLayout title="Dasbor Utama" description="Ringkasan operasional harian dan indikator bisnis utama.">
            <Head title="Dasbor Utama" />

            <div className="space-y-6">
                <StatGrid items={stats} />

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr,1fr]">
                    <TrendChartCard title="Tren Omzet 7 Hari" description="Stabil meningkat menjelang akhir pekan." />
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <IconRobotFace size={18} className="text-primary" />
                                Asisten AI
                            </CardTitle>
                            <CardDescription>Rekomendasi tindakan operasional berbasis data terkini.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="rounded-lg border bg-primary/5 p-3">
                                <p className="text-sm font-medium">Prioritaskan stok minuman dingin</p>
                                <p className="text-xs text-muted-foreground">
                                    Pola penjualan 3 hari terakhir menunjukkan lonjakan 18% pada jam 12:00-16:00.
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <Badge variant="outline">Model: v0.1 mock</Badge>
                                <Button size="sm">Lihat Detail</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <ProductTableCard />
            </div>
        </DashboardLayout>
    );
}
