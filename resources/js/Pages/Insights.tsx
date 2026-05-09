import { Head } from "@inertiajs/react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import StatGrid from "../components/dashboard/StatGrid";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "../components/ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
    { label: "Insight Aktif", value: "9", delta: "3 prioritas tinggi", variant: "default" as const },
    { label: "Peluang Pertumbuhan", value: "4", delta: "Minggu ini", variant: "success" as const },
    { label: "Risiko Operasional", value: "2", delta: "Perlu perhatian", variant: "warning" as const },
    { label: "Saran Otomatis", value: "15", delta: "Model AI mock", variant: "secondary" as const },
];

const insightData = [
    { channel: "GrabFood", impact: 28 },
    { channel: "GoFood", impact: 21 },
    { channel: "Walk-in", impact: 34 },
    { channel: "WhatsApp", impact: 17 },
];

const config: ChartConfig = {
    impact: { label: "Kontribusi (%)", color: "oklch(0.768 0.233 130.85)" },
};

export default function Insights() {
    return (
        <DashboardLayout title="Insight" description="Analisis pola bisnis untuk keputusan operasional lebih cepat.">
            <Head title="Insight" />

            <div className="space-y-6">
                <StatGrid items={stats} />

                <Tabs defaultValue="market" className="space-y-3">
                    <TabsList>
                        <TabsTrigger value="market">Insight Pasar</TabsTrigger>
                        <TabsTrigger value="behavior">Perilaku Pelanggan</TabsTrigger>
                    </TabsList>
                    <TabsContent value="market">
                        <Card>
                            <CardHeader>
                                <CardTitle>Kontribusi Channel Penjualan</CardTitle>
                                <CardDescription>Snapshot performa channel dalam persen.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ChartContainer config={config} className="h-64 w-full">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={insightData}>
                                            <CartesianGrid vertical={false} />
                                            <XAxis dataKey="channel" tickLine={false} axisLine={false} />
                                            <Tooltip content={<ChartTooltipContent />} />
                                            <Bar dataKey="impact" radius={6} fill="var(--color-impact)" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </ChartContainer>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="behavior">
                        <Card>
                            <CardHeader>
                                <CardTitle>Ringkasan Perilaku</CardTitle>
                                <CardDescription>
                                    Peak order terlihat stabil pada jam makan siang dengan retensi yang masih bisa ditingkatkan.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}
