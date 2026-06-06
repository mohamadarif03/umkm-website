import { useEffect, useState } from "react";
import { TEH_MBOIS_IMAGES } from "./constants";
import { Button } from "../ui/button";
import { Link, usePage } from "@inertiajs/react";

const navLinks = [
    { href: "/#menu", label: "Menu", match: (path: string) => path === "/" },
    { href: "/outlet", label: "Outlet", match: (path: string) => path === "/outlet" },
    { href: "/rewards", label: "Rewards", match: (path: string) => path === "/rewards" },
];

export default function TehMboisTopNav() {
    const { url } = usePage();
    const currentPath = (() => {
        const clean = (url || "/").split("?")[0].split("#")[0];
        return clean === "" ? "/" : clean;
    })();
    const isLanding = currentPath === "/";
    const [showFullNav, setShowFullNav] = useState(!isLanding);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        if (!isLanding) {
            setShowFullNav(true);
            return;
        }

        const updateNavMode = () => {
            const hero = document.getElementById("tehmbois-hero");

            if (!hero) {
                setShowFullNav(window.scrollY > 120);
                return;
            }

            const rect = hero.getBoundingClientRect();
            const triggerOffset = Math.max(72, Math.round(window.innerHeight * 0.5));
            setShowFullNav(rect.top <= -triggerOffset);
        };

        updateNavMode();
        window.addEventListener("scroll", updateNavMode, { passive: true });
        window.addEventListener("resize", updateNavMode);

        return () => {
            window.removeEventListener("scroll", updateNavMode);
            window.removeEventListener("resize", updateNavMode);
        };
    }, [isLanding]);

    useEffect(() => {
        setIsMobileOpen(false);
    }, [url]);

    return (
        <>
            <nav
                className={[
                    "relative z-40 bg-[#f7faf7]/20 transition-opacity duration-300",
                    !isLanding || showFullNav ? "pointer-events-none opacity-0" : "opacity-100",
                ].join(" ")}
            >

                <div
                    className="pointer-events-none absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "radial-gradient(#096956 1px, transparent 2px)",
                        backgroundSize: "32px 32px",
                    }}
                />
                <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="inline-flex items-center">
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-16"
                            />
                        </Link>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={[
                                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-all",
                                    item.match(currentPath)
                                        ? "text-[#096956]"
                                        : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                                ].join(" ")}
                            >
                                {item.label}
                                {item.match(currentPath) ? (
                                    <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#096956]" />
                                ) : null}
                            </a>
                        ))}
                    </div>
                    
                    <Link href="/dashboard" className="hidden md:inline-flex">
                        <Button className="inline-flex rounded-full bg-[#096956] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#096956]/90 sm:px-6 sm:text-sm">
                            Masuk/Daftar
                        </Button>
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMobileOpen(true)}
                        className="rounded-full p-1.5 transition-all hover:bg-[#096956]/5 md:hidden"
                        aria-label="Buka navigasi"
                    >
                        <img src="/tea_icon.png" alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                    </button>

                </div>
            </nav>

            <nav
                className={[
                    "fixed inset-x-0 top-0 z-50 border-b border-[#bec9c4]/30 bg-[#f7faf7]/60 backdrop-blur-md transition-all duration-500 ease-out",
                    !isLanding || showFullNav ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="inline-flex items-center">
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-14"
                            />
                        </Link>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={[
                                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-all",
                                    item.match(currentPath)
                                        ? "text-[#096956]"
                                        : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                                ].join(" ")}
                            >
                                {item.label}
                                {item.match(currentPath) ? (
                                    <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#096956]" />
                                ) : null}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/dashboard" className="hidden md:inline-flex">
                            <Button className="inline-flex rounded-full bg-[#096956] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#096956]/90 sm:px-6 sm:text-sm">
                                Masuk/Daftar
                            </Button>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsMobileOpen(true)}
                            className="rounded-full p-1.5 transition-all hover:bg-[#096956]/5 md:hidden"
                            aria-label="Buka navigasi"
                        >
                            <img src="/tea_icon.png" alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={[
                    "fixed inset-0 z-[60] bg-[#181c1b]/30 backdrop-blur-[2px] transition-opacity duration-300 md:hidden",
                    isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0",
                ].join(" ")}
                onClick={() => setIsMobileOpen(false)}
                aria-hidden="true"
            />

            <aside
                className={[
                    "fixed right-0 top-0 z-[70] flex h-screen w-[66.666vw] max-w-[320px] flex-col border-l border-[#bec9c4]/40 bg-[#f7faf7] px-5 py-5 shadow-2xl transition-transform duration-300 ease-out md:hidden",
                    isMobileOpen ? "translate-x-0" : "translate-x-full",
                ].join(" ")}
                aria-hidden={!isMobileOpen}
            >
                <div className="mb-8 flex items-center justify-between gap-4">
                    <Link href="/" className="inline-flex items-center" onClick={() => setIsMobileOpen(false)}>
                        <img src={TEH_MBOIS_IMAGES.logo} alt="TehMbois" className="h-10 w-auto object-contain" />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsMobileOpen(false)}
                        className="rounded-full border border-[#bec9c4]/40 px-3 py-1.5 text-sm font-semibold text-[#3f4945] transition-colors hover:bg-[#096956]/5 hover:text-[#096956]"
                        aria-label="Tutup navigasi"
                    >
                        Tutup
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setIsMobileOpen(false)}
                            className={[
                                "rounded-2xl px-4 py-3 text-base font-semibold transition-all",
                                item.match(currentPath)
                                    ? "bg-[#096956] text-white"
                                    : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                            ].join(" ")}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="mt-auto pt-8">
                    <Link href="/dashboard" onClick={() => setIsMobileOpen(false)}>
                        <Button className="inline-flex w-full rounded-2xl bg-[#096956] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#096956]/90">
                            Masuk/Daftar
                        </Button>
                    </Link>
                </div>
            </aside>
        </>
    );
}
