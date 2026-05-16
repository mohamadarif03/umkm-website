import { Head } from "@inertiajs/react";
import TehMboisBentoSection from "../components/landing/tehmbois/TehMboisBentoSection";
import TehMboisClosingCtaSection from "../components/landing/tehmbois/TehMboisClosingCtaSection";
import TehMboisFooter from "../components/landing/tehmbois/TehMboisFooter";
import TehMboisHeroSection from "../components/landing/tehmbois/TehMboisHeroSection";
import TehMboisHighlightsSection from "../components/landing/tehmbois/TehMboisHighlightsSection";
import TehMboisMenuSection from "../components/landing/tehmbois/TehMboisMenuSection";
import TehMboisTopNav from "../components/landing/tehmbois/TehMboisTopNav";
import AppLayout from "../layouts/AppLayout";

export default function LandingPage() {
    return (
        <AppLayout className="bg-[#f7faf7] text-[#181c1b]">
            <Head title="TehMbois - Es Teh Segar Khas Malang" />
            <div className="font-plus-jakarta bg-[#f7faf7] text-[#181c1b]">
                <TehMboisTopNav />
                <main>
                    <TehMboisHeroSection />
                    <TehMboisHighlightsSection />
                    <TehMboisMenuSection />
                    <TehMboisBentoSection />
                    <TehMboisClosingCtaSection />
                </main>
                <TehMboisFooter />
            </div>
        </AppLayout>
    );
}
