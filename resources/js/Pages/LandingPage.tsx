import { Head } from "@inertiajs/react";
import CapabilityStripSection from "../components/landing/CapabilityStripSection";
import ClosingCtaSection from "../components/landing/ClosingCtaSection";
import FeatureHighlightsSection from "../components/landing/FeatureHighlightsSection";
import HeroSection from "../components/landing/HeroSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import LandingFooter from "../components/landing/LandingFooter";
import ProductPreviewSection from "../components/landing/ProductPreviewSection";
import TopNavbar from "../components/landing/TopNavbar";
import AppLayout from "../layouts/AppLayout";

export default function LandingPage() {
    return (
        <AppLayout>
            <Head title="Asisten UMKM - Solusi Operasional Digital untuk F&B Indonesia" />
            <TopNavbar />
            <main>
                <HeroSection />
                <CapabilityStripSection />
                <HowItWorksSection />
                <FeatureHighlightsSection />
                {/* <ProductPreviewSection /> */}
                <ClosingCtaSection />
            </main>
            <LandingFooter />
        </AppLayout>
    );
}
