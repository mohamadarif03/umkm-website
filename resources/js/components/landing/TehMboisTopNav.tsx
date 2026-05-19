import { useEffect, useState } from "react";
import { TEH_MBOIS_IMAGES } from "./constants";
import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";

const navLinks = [
    // { href: "#tehmbois-hero", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#insight", label: "Outlet" },
    { href: "#outlet", label: "Tentang Kami" },
    { href: "#kontak", label: "Kontak" },
];

export default function TehMboisTopNav() {
    const [showFullNav, setShowFullNav] = useState(false);
    const [activeHash, setActiveHash] = useState("#tehmbois-hero");

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        const syncActive = () => {
            setActiveHash(window.location.hash || "#tehmbois-hero");
        };

        syncActive();
        window.addEventListener("hashchange", syncActive);
        return () => window.removeEventListener("hashchange", syncActive);
    }, []);

    return (
        <>
            <nav
                className={[
                    "relative z-40 bg-[#f7faf7]/20 transition-opacity duration-300",
                    showFullNav ? "pointer-events-none opacity-0" : "opacity-100",
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
                        <a href="#tehmbois-hero" className="inline-flex items-center" onClick={() => setActiveHash("#tehmbois-hero")}>
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-16"
                            />
                        </a>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveHash(item.href)}
                                className={[
                                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-all",
                                    activeHash === item.href
                                        ? "text-[#096956]"
                                        : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                                ].join(" ")}
                            >
                                {item.label}
                                {activeHash === item.href ? (
                                    <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#096956]" />
                                ) : null}
                            </a>
                        ))}
                    </div>
                    
                    <Link href="/dashboard">
                        <Button className="inline-flex rounded-full bg-[#096956] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#096956]/90 sm:px-6 sm:text-sm">
                            Dashboard Mitra
                        </Button>
                    </Link>

                </div>
            </nav>

            <nav
                className={[
                    "fixed inset-x-0 top-0 z-50 border-b border-[#bec9c4]/30 bg-[#f7faf7]/60 backdrop-blur-md transition-all duration-500 ease-out",
                    showFullNav ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <a href="#tehmbois-hero" className="inline-flex items-center" onClick={() => setActiveHash("#tehmbois-hero")}>
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-14"
                            />
                        </a>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={() => setActiveHash(item.href)}
                                className={[
                                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-all",
                                    activeHash === item.href
                                        ? "text-[#096956]"
                                        : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                                ].join(" ")}
                            >
                                {item.label}
                                {activeHash === item.href ? (
                                    <span className="absolute bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[#096956]" />
                                ) : null}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Link href="/dashboard">
                            <Button className="inline-flex rounded-full bg-[#096956] px-5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#096956]/90 sm:px-6 sm:text-sm">
                                Dashboard Mitra
                            </Button>
                        </Link>
                        {/* <button
                            className="rounded-full p-2 text-[#181c1b] transition-all hover:bg-[#096956]/5 md:hidden"
                            aria-label="Open menu"
                        >
                            <IconMenu2 size={22} stroke={1.9} />
                        </button> */}
                    </div>
                </div>
            </nav>
        </>
    );
}
