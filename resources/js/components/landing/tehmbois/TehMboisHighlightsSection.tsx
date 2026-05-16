import { IconCheck, IconLeaf } from "@tabler/icons-react";
import { TEH_MBOIS_IMAGES } from "./constants";

export default function TehMboisHighlightsSection() {
    return (
        <section className="bg-white py-12">
            <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-4 md:grid-cols-3 md:px-8">
                <div className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-[#bec9c4]/30 bg-[#f1f4f1] p-8">
                    <div className="relative z-10 max-w-[60%]">
                        <h3 className="mb-3 text-2xl font-bold text-[#181c1b]">Segarnya Teh Wonosari</h3>
                        <p className="mb-6 text-[#3f4945]">Daun teh pilihan dari perkebunan Wonosari Lawang untuk rasa otentik.</p>
                        <a
                            href="#tentang"
                            className="inline-flex items-center gap-1 border-b-2 border-[#181c1b] pb-0.5 text-sm font-semibold text-[#181c1b] transition-all hover:gap-2 hover:border-[#096956] hover:text-[#096956]"
                        >
                            Tentang Teh Kami
                            <span>?</span>
                        </a>
                    </div>
                    <img
                        src={TEH_MBOIS_IMAGES.teaLeaf}
                        alt="Tea Leaves"
                        className="absolute -bottom-4 -right-4 h-48 w-48 rotate-12 object-contain transition-transform group-hover:scale-110"
                    />
                </div>

                <div className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-[#bec9c4]/30 bg-[#f1f4f1] p-8">
                    <div className="relative z-10 max-w-[65%]">
                        <h3 className="mb-3 text-2xl font-bold text-[#181c1b]">Es Teh Tarik Mbois</h3>
                        <p className="mb-4 text-sm text-[#3f4945]">Perpaduan teh pekat dan susu kental yang ditarik hingga berbuih lembut.</p>
                        <div className="flex items-center gap-4">
                            <span className="text-2xl font-bold text-[#181c1b]">Rp 7.000</span>
                            <button className="inline-flex items-center gap-2 rounded-full border border-[#6f7975] bg-white px-4 py-2 text-sm font-medium transition-all hover:border-[#096956] hover:bg-[#096956] hover:text-white">
                                Tambah ke Keranjang
                                <span>+</span>
                            </button>
                        </div>
                    </div>
                    <img
                        src={TEH_MBOIS_IMAGES.heroDrink}
                        alt="Teh Tarik"
                        className="absolute -bottom-8 -right-8 h-60 w-60 rounded-full object-cover transition-transform group-hover:scale-105"
                    />
                </div>

                <div className="group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl border border-[#bec9c4]/30 bg-[#f1f4f1] p-8">
                    <div className="relative z-10">
                        <div className="mb-4 flex items-start justify-between">
                            <h3 className="max-w-[200px] text-2xl font-bold text-[#181c1b]">Mbois Banget, Gak Pake Kimia</h3>
                            <div className="opacity-60">
                                <IconLeaf className="text-[#096956]" size={34} />
                            </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                            <span className="rounded-full bg-[#FFD966]/40 px-4 py-1.5 text-[#5B4100]">Gula Aren</span>
                            <span className="rounded-full bg-[#E6E0D9] px-4 py-1.5 text-[#4A443F]">Lemon Sereh</span>
                            <span className="rounded-full bg-[#FCE4EC] px-4 py-1.5 text-[#880E4F]">Susu Coklat</span>
                            <span className="rounded-full bg-[#FFCCBC] px-4 py-1.5 text-[#BF360C]">Jahe Merah</span>
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#096956]/20 px-4 py-1.5 text-[#096956]">
                                Alami
                                <IconCheck size={14} />
                            </span>
                        </div>
                    </div>
                    <div className="absolute -bottom-8 -right-8 opacity-5">
                        <IconLeaf size={160} />
                    </div>
                </div>
            </div>
        </section>
    );
}
