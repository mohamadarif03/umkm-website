import { IconArrowNarrowRight, IconCheck, IconBulb, IconTrendingUp } from "@tabler/icons-react";
import { TEH_MBOIS_IMAGES } from "./constants";

const chartBars = ["40%", "60%", "85%", "70%", "100%", "50%"];
const chartLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const chartClasses = [
    "bg-[#C7EF9D]/50 hover:bg-[#C7EF9D]/70",
    "bg-[#86D18C]/50 hover:bg-[#86D18C]/70",
    "bg-[#4FAE83]/70 hover:bg-[#4FAE83]/90",
    "bg-[#2E8873]/80 hover:bg-[#2E8873]",
    "bg-[#096956] hover:bg-[#096956]/90",
    "bg-[#276D5F]/50 hover:bg-[#276D5F]/70",
];

export default function TehMboisBentoSection() {
    return (
        <section className="bg-[#f7faf7] py-20" id="insight">
            <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
                <div className="grid auto-rows-[minmax(300px,auto)] grid-cols-1 gap-6 lg:grid-cols-12">
                    <div id="outlet" className="group relative overflow-hidden rounded-3xl bg-[#f1f4f1] lg:col-span-8">
                        <img
                            src={TEH_MBOIS_IMAGES.outlet}
                            alt="TehMbois Outlet"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 w-full p-8">
                            <div className="mb-3 flex items-center gap-2">
                                <span className="rounded-full bg-[#096956]/90 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                                    ?? Malang
                                </span>
                            </div>
                            <h3 className="mb-2 text-4xl font-bold text-white">Mampir ke Booth Kami</h3>
                            <p className="max-w-xl text-white/80">
                                Suasana cozy semi-outdoor dengan sentuhan kayu natural. Tempat asik buat nongkrong santai sambil
                                nikmatin racikan teh segar kami.
                            </p>
                        </div>
                    </div>

                    <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#30826e] p-8 text-white lg:col-span-4">
                        <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-[#096956]/20 blur-2xl" />
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#096956] text-white">
                                    <IconBulb size={18} />
                                </div>
                                <span className="text-sm font-bold uppercase tracking-wide text-[#a2f2da]">AI Insight</span>
                            </div>
                            <p className="mb-4 text-2xl font-semibold leading-snug">
                                "Es Teh Tarik diprediksi <span className="text-[#a2f2da]">naik 18%</span> saat jam makan siang."
                            </p>
                            <p className="text-sm opacity-80">Berdasarkan data cuaca dan tren penjualan historis 30 hari terakhir.</p>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <div className="h-2 w-full overflow-hidden rounded-full bg-[#096956]/30">
                                <div className="relative h-full w-[82%] rounded-full bg-[#a2f2da]">
                                    <div className="absolute right-0 top-0 h-full w-2 animate-ping bg-white/50" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        id="dashboard"
                        className="flex flex-col items-center gap-8 rounded-3xl border border-[#bec9c4]/30 bg-white p-8 shadow-sm md:flex-row lg:col-span-12"
                    >
                        <div className="w-full flex-1">
                            <div className="mb-6 flex items-center gap-2 text-[#3f4945]">
                                <IconTrendingUp size={18} />
                                <h3 className="text-sm font-bold uppercase tracking-wider">Operational Dashboard</h3>
                            </div>
                            <div className="mb-8 grid grid-cols-2 gap-4">
                                <div className="rounded-2xl border border-[#bec9c4]/20 bg-[#f1f4f1] p-4">
                                    <p className="mb-1 text-xs text-[#3f4945]">Daily Revenue</p>
                                    <p className="text-2xl font-bold text-[#181c1b]">Rp 845.000</p>
                                    <div className="mt-2 flex items-center gap-1 text-xs font-bold text-[#4FAE83]">
                                        <IconTrendingUp size={14} />
                                        +12.5% vs yesterday
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-[#bec9c4]/20 bg-[#f1f4f1] p-4">
                                    <p className="mb-1 text-xs text-[#3f4945]">Avg Sales/Day</p>
                                    <p className="text-2xl font-bold text-[#181c1b]">120 Cups</p>
                                    <div className="mt-2 flex items-center gap-1 text-xs font-bold text-[#2E8873]">
                                        <IconCheck size={14} />
                                        On target
                                    </div>
                                </div>
                            </div>

                            <div className="flex h-32 w-full items-end gap-2 px-2">
                                {chartBars.map((height, index) => (
                                    <div
                                        key={chartLabels[index]}
                                        className={`group relative w-1/6 rounded-t-md transition-colors ${chartClasses[index]}`}
                                        style={{ height }}
                                    >
                                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-white px-2 py-1 text-xs opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                                            {chartLabels[index]}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full flex-1 md:pl-12">
                            <h3 className="mb-4 text-4xl font-bold text-[#181c1b]">Kelola Bisnis Makin Mudah</h3>
                            <p className="mb-6 text-lg text-[#3f4945]">
                                Pantau penjualan, atur stok, hingga dapatkan prediksi AI untuk maksimalkan profit harianmu. Semua
                                dalam satu dashboard Mbois yang user-friendly.
                            </p>
                            <button className="inline-flex items-center gap-2 rounded-full border-2 border-[#096956] px-6 py-3 text-sm font-semibold text-[#096956] transition-colors hover:bg-[#096956]/5">
                                Jelajahi Fitur Dashboard
                                <IconArrowNarrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
