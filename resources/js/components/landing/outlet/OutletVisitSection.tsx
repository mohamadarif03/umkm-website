import { IconArrowNarrowRight, IconClockHour4, IconMapPin } from "@tabler/icons-react";

const MAP_IMAGE =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC9CU6SriAA5NEi3px7gHUWY2tZ1xRadnEj5tS3Ai_RgDoeDooTG735b3o1WbS0n4uU30pfCe7rT8NgEIZneS7KrfTg2uccy2MmdfvXoPGt0yrYlRpEgLekmlS6fi6A3ELlsEok-OKHK2z-pKY1Ow05_CoQ6NJFrw80EI3wGwEF7bXpQ3D4hQ2NPwycXKtOnELvnNSpxePLQhNNTrbMrXFxoSGuepUSU6BicWwr07iJ25ihG2El7z2sj5NNv7jen8qPiMtZFwB3WLoh";

export default function OutletVisitSection() {
    return (
        <section className="overflow-hidden bg-[#f1f4f1] py-20">
            <div className="mx-auto max-w-[1280px] px-4 md:px-8">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="group relative h-[350px] w-full overflow-hidden rounded-[2rem] border border-[#bec9c4]/40 shadow-lg">
                            <div className="absolute inset-0 bg-[#dfdfe1]">
                                <img src={MAP_IMAGE} alt="Lokasi Outlet TehMbois" className="h-full w-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-[#096956]/10 transition-colors group-hover:bg-transparent" />
                                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#096956] p-3 text-white shadow-xl ring-8 ring-[#096956]/20">
                                    <IconMapPin size={30} />
                                </div>
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white p-6">
                                <div className="mb-3 flex items-center gap-3 text-[#096956]">
                                    <IconMapPin size={18} />
                                    <h4 className="text-sm font-bold">Alamat</h4>
                                </div>
                                <p className="text-sm text-[#181c1b]">
                                    Jl. Soekarno-Hatta No. 42,
                                    <br />
                                    Lowokwaru, Malang
                                </p>
                            </div>

                            <div className="rounded-2xl border border-[#bec9c4]/40 bg-white p-6">
                                <div className="mb-3 flex items-center gap-3 text-[#096956]">
                                    <IconClockHour4 size={18} />
                                    <h4 className="text-sm font-bold">Jam Operasional</h4>
                                </div>
                                <p className="text-sm text-[#181c1b]">10.00 - 22.00 WIB</p>
                         
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-8">
                        <h2 className="mb-6 text-5xl font-black leading-tight text-[#181c1b]">Siap Nongkrong Bareng TehMbois?</h2>
                        <p className="mb-10 text-lg leading-relaxed text-[#3f4945]">
                            Rasakan sensasi teh autentik yang diseduh langsung di tempat. Suasana santai, teman asik, dan segelas es
                            teh mbois adalah kunci harimu yang produktif.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#096956] px-8 py-5 text-sm font-semibold text-white shadow-md transition-all hover:scale-105">
                                <IconMapPin size={18} />
                                Buka Google Maps
                            </button>
                            <a
                                href="/#menu"
                                className="inline-flex items-center justify-center gap-3 rounded-2xl border border-[#6f7975] bg-white px-8 py-5 text-sm font-semibold text-[#181c1b] transition-all hover:bg-[#e0e3e0]"
                            >
                                Lihat Menu
                                <IconArrowNarrowRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
