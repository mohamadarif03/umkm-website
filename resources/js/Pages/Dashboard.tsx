import { Head } from "@inertiajs/react";
import AIRecommendationCard from "../components/dashboard/AIRecommendationCard";
import ForecastCard from "../components/dashboard/ForecastCard";
import HolidayImpactCard from "../components/dashboard/HolidayImpactCard";
import StatGrid from "../components/dashboard/StatGrid";
import TopSellingCard from "../components/dashboard/TopSellingCard";
import TrendChartCard from "../components/dashboard/TrendChartCard";
import WeatherInsightCard from "../components/dashboard/WeatherInsightCard";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
    return (
        <DashboardLayout title="Dashboard" description="Ringkasan operasional harian dan insight bisnis TehMbois." greenBackground>
            <Head title="Dashboard — TehMbois" />

            <div className="space-y-6">
                <StatGrid />

                <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1fr]">
                    <TrendChartCard />
                    <ForecastCard />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <AIRecommendationCard />
                    <TopSellingCard />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <WeatherInsightCard />
                    <HolidayImpactCard />
                </div>
            </div>
        </DashboardLayout>
    );
}
