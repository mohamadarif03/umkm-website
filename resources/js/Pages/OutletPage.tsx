import { Head } from "@inertiajs/react";
import TehMboisFooter from "../components/landing/TehMboisFooter";
import TehMboisTopNav from "../components/landing/TehMboisTopNav";
import OutletExperienceSection from "../components/landing/outlet/OutletExperienceSection";
import OutletHeroSection from "../components/landing/outlet/OutletHeroSection";
import OutletVisitSection from "../components/landing/outlet/OutletVisitSection";
import AppLayout from "../layouts/AppLayout";

export default function OutletPage() {
    return (
        <AppLayout className="bg-[#f7faf7] text-[#181c1b]">
            <Head title="Outlet TehMbois" />
            <div className="font-plus-jakarta bg-[#f7faf7] text-[#181c1b]">
                <TehMboisTopNav />

                <main id="outlet">
                    <OutletHeroSection />
                    <OutletExperienceSection />
                    <OutletVisitSection />
                </main>

                <TehMboisFooter />
            </div>
        </AppLayout>
    );
}
