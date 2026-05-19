import { Head } from "@inertiajs/react";
import TehMboisFooter from "../components/landing/TehMboisFooter";
import TehMboisTopNav from "../components/landing/TehMboisTopNav";
import { TEH_MBOIS_IMAGES } from "../components/landing/constants";
import AppLayout from "../layouts/AppLayout";

export default function OutletPage() {
    return (
        <AppLayout className="bg-[#f7faf7] text-[#181c1b]">
            <Head title="Outlet TehMbois" />
            <div className="font-plus-jakarta bg-[#f7faf7] text-[#181c1b]">
                <TehMboisTopNav />

                <main id="outlet" className="pt-24">
                    <section className="mx-auto w-full max-w-3xl px-4 pb-16 pt-8 md:pt-10">
                        <div className="overflow-hidden rounded-3xl border border-[#bec9c4]/30 bg-white shadow-sm">
                            <img src={TEH_MBOIS_IMAGES.outlet} alt="Outlet TehMbois" className="h-52 w-full object-cover md:h-60" />
                            <div className="p-6 md:p-8">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[#8d493c]">Outlet</p>
                                <h1 className="mb-3 text-3xl font-bold leading-tight text-[#181c1b] md:text-4xl">
                                    Temukan Booth TehMbois Terdekat
                                </h1>
                                <p className="text-base text-[#3f4945]">
                                    Nikmati suasana santai khas TehMbois di outlet kami. Cocok untuk nongkrong dan recharge energi
                                    dengan racikan teh favoritmu.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>

                <TehMboisFooter />
            </div>
        </AppLayout>
    );
}
