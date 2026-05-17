import { IconArrowNarrowRight, IconAward, IconLeaf, IconStarFilled } from "@tabler/icons-react";
import { TEH_MBOIS_IMAGES } from "./constants";

export default function TehMboisHeroSection() {
    return (
        <section
            id="tehmbois-hero"
            className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#f7faf7] to-[#f1f4f1] pb-24 pt-14"
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#096956 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 text-center md:px-8">
                <div className="mx-auto mb-12 flex max-w-6xl flex-col items-center gap-6">
                    <div className="inline-flex items-center gap-4 rounded-full  bg-[#BA7517]/10 px-8 py-3 text-sm font-semibold tracking-[0.08em] text-[#BA7517]">
                        <IconLeaf size={16} stroke={2} />
                        Segarkan Harimu dengan Mbois!
                    </div>

                    <h1 className="font-cherry-freeland text-5xl leading-[1.02] tracking-[0.02em] text-slate-800 md:text-9xl">
                        SEGAR, MBOIS, <br />
                        <span className="relative inline-block text-[#1D9E75]">
                            {/* 1. Wrap the text and give it a higher z-index */}
                            <span className="relative z-20">ORA MAHAL.</span>

                            {/* 2. The SVG sits at a lower z-index */}
                            <svg
                                className="absolute -bottom-5 left-0 w-full text-yellow-800/60 opacity-50 z-10"
                                preserveAspectRatio="none"
                                viewBox="0 0 100 20"
                            >
                                <path d="M0 10 Q 50 20 100 10" fill="none" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </span>
                    </h1>

                    <div className="mt-2 flex w-full max-w-4xl flex-col items-center gap-3 pb-8 md:flex-row md:items-center md:justify-between">
                        <p className="max-w-3xl text-center text-xl text-[#3f4945] md:text-left">
                            Es teh khas Malang dari teh pilihan Wonosari, dipadukan rasa lokal yang segar dan ramah di
                            kantong.
                        </p>

                        <div className="flex items-center w-full justify-start gap-6 md:justify-end">
                            <a
                                href="#menu"
                                className="group inline-flex items-center gap-2 rounded-full bg-[#1D9E75] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#1D9E75]/20 transition-colors hover:bg-[#1D9E75]/90"
                            >
                                Lihat Menu
                                <IconArrowNarrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#outlet"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-[#BA7517]/30 px-8 py-4 text-sm font-semibold text-[#BA7517] transition-colors hover:bg-[#BA7517]/5"
                            >
                                <IconLeaf size={18} />
                                Kunjungi Outlet
                            </a>
                        </div>
                    </div>
                </div>

                <div className="relative mt-8 flex h-[400px] w-full items-end justify-center md:h-[600px]">
                    <div className="absolute inset-0 rounded-full bg-[#1D9E75]/10 blur-3xl animate-pulse" />

                    <div className="absolute left-10 top-1/4 z-30 hidden items-center gap-3 rounded-2xl border border-[#bec9c4]/30 bg-white/90 p-4 shadow-xl backdrop-blur-sm md:flex animate-bounce" style={{ animationDuration: "4s" }}>
                        <div className="rounded-full bg-[#BA7517]/20 p-2 text-[#BA7517]">
                            <IconStarFilled size={18} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-[#3f4945]">Rating</p>
                            <p className="text-2xl font-bold leading-none text-[#181c1b]">4.9</p>
                        </div>
                    </div>

                    <div className="absolute right-10 top-1/3 z-30 hidden items-center gap-3 rounded-2xl border border-[#bec9c4]/30 bg-white/90 p-4 shadow-xl backdrop-blur-sm md:flex animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "1s" }}>
                        <div className="rounded-full bg-[#1D9E75]/20 p-2 text-[#1D9E75]">
                            <IconLeaf size={18} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-[#3f4945]">100% Asli</p>
                            <p className="text-base font-bold leading-none text-[#181c1b]">Fresh Wonosari Leaves</p>
                        </div>
                    </div>

                    <div className="absolute bottom-1/4 left-1/4 z-30 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border border-[#bec9c4]/30 bg-white/90 p-4 shadow-xl backdrop-blur-sm md:flex animate-pulse" style={{ animationDuration: "3s" }}>
                        <div className="rounded-full bg-[#BA7517]/20 p-2 text-[#BA7517]">
                            <IconAward size={18} />
                        </div>
                        <div className="text-left">
                            <p className="text-base font-bold leading-none text-[#181c1b]">Best in Malang</p>
                        </div>
                    </div>

                    <img
                        src={TEH_MBOIS_IMAGES.heroDrink}
                        alt="Es Teh Tarik Segar"
                        className="relative z-10 h-full w-auto scale-110 rounded-[3rem] object-contain drop-shadow-2xl"
                    />

                    <img
                        src={TEH_MBOIS_IMAGES.teaLeaf}
                        alt="Tea Leaves"
                        className="absolute right-1/4 top-0 z-20 h-24 w-24 animate-pulse object-contain drop-shadow-xl"
                        style={{ animationDuration: "5s" }}
                    />
                    <img
                        src={TEH_MBOIS_IMAGES.teaLeaf}
                        alt="Tea Leaves"
                        className="absolute bottom-10 right-1/3 z-0 h-32 w-32 rotate-45 animate-bounce object-contain opacity-80 blur-[2px] drop-shadow-lg"
                        style={{ animationDuration: "6s" }}
                    />
                </div>
            </div>
        </section>
    );
}
