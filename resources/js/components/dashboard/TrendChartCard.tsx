import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { ChartContainer, ChartTooltipContent, type ChartConfig } from "../ui/chart";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

const chartData = [
    { day: "Sen", omzet: 2.1 },
    { day: "Sel", omzet: 2.4 },
    { day: "Rab", omzet: 2.2 },
    { day: "Kam", omzet: 2.7 },
    { day: "Jum", omzet: 2.9 },
    { day: "Sab", omzet: 3.1 },
    { day: "Min", omzet: 2.8 },
];

const chartConfig: ChartConfig = {
    omzet: {
        label: "Omzet (juta)",
        color: "oklch(0.648 0.2 131.684)",
    },
};

export default function TrendChartCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Area
                                type="monotone"
                                dataKey="omzet"
                                stroke="var(--color-omzet)"
                                fill="var(--color-omzet)"
                                fillOpacity={0.2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
