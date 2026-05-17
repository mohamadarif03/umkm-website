import { Head } from "@inertiajs/react";
import Lenis from "lenis";
import { useEffect } from "react";
import TehMboisBentoSection from "../components/landing/tehmbois/TehMboisBentoSection";
import TehMboisClosingCtaSection from "../components/landing/tehmbois/TehMboisClosingCtaSection";
import TehMboisFooter from "../components/landing/tehmbois/TehMboisFooter";
import TehMboisHeroSection from "../components/landing/tehmbois/TehMboisHeroSection";
import TehMboisHighlightsSection from "../components/landing/tehmbois/TehMboisHighlightsSection";
import TehMboisMenuSection from "../components/landing/tehmbois/TehMboisMenuSection";
import TehMboisTopNav from "../components/landing/tehmbois/TehMboisTopNav";
import AppLayout from "../layouts/AppLayout";

export default function LandingPage() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.9,
            smoothWheel: true,
            wheelMultiplier: 1,
        });

        let rafId = 0;
        const raf = (time: number) => {
            lenis.raf(time);
            rafId = window.requestAnimationFrame(raf);
        };
        rafId = window.requestAnimationFrame(raf);

        const handleAnchorClick = (event: Event) => {
            const target = event.target as HTMLElement | null;
            const anchor = target?.closest('a[href^="#"]') as HTMLAnchorElement | null;

            if (!anchor) {
                return;
            }

            const hash = anchor.getAttribute("href");
            if (!hash) {
                return;
            }

            if (hash === "#") {
                event.preventDefault();
                lenis.scrollTo(0, { duration: 0.8 });
                return;
            }

            const element = document.querySelector(hash) as HTMLElement | null;
            if (!element) {
                return;
            }

            event.preventDefault();
            lenis.scrollTo(element, { offset: -72, duration: 0.9 });
        };

        document.addEventListener("click", handleAnchorClick);

        return () => {
            document.removeEventListener("click", handleAnchorClick);
            window.cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

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
