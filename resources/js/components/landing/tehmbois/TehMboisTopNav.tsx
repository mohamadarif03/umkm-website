import { IconMenu2, IconShoppingCart } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { TEH_MBOIS_IMAGES } from "./constants";
import { Button } from "../../ui/button";
import { Link, usePage } from "@inertiajs/react";

const navLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#menu", label: "Menu" },
    { href: "#insight", label: "Insight" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#kontak", label: "Kontak" },
];

export default function TehMboisTopNav() {
    const [showFullNav, setShowFullNav] = useState(false);

    useEffect(() => {
        const updateNavMode = () => {
            const hero = document.getElementById("tehmbois-hero");

            if (!hero) {
                setShowFullNav(window.scrollY > 120);
                return;
            }

            const rect = hero.getBoundingClientRect();
            const triggerOffset = Math.max(72, Math.round(window.innerHeight * 0.25));
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

    return (
        <>
            <nav
                className={[
                    "relative z-40  bg-[#f7faf7] transition-opacity duration-300",
                    showFullNav ? "pointer-events-none opacity-0" : "opacity-100",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <a href="#" className="inline-flex items-center">
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-10"
                            />
                        </a>
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
                    "fixed inset-x-0 top-0 z-50 border-b border-[#bec9c4]/30 bg-[#f7faf7]/90 backdrop-blur-md transition-all duration-500 ease-out",
                    showFullNav ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0",
                ].join(" ")}
            >
                <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                    <div className="flex items-center gap-4">
                        <a href="#" className="inline-flex items-center">
                            <img
                                src={TEH_MBOIS_IMAGES.logo}
                                alt="TehMbois"
                                className="h-8 w-auto object-contain md:h-10"
                            />
                        </a>
                    </div>

                    <div className="hidden items-center gap-4 md:flex">
                        {navLinks.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className={[
                                    "rounded-full px-4 py-2 text-sm font-semibold transition-all",
                                    item.active
                                        ? "border-b-2 border-[#096956] text-[#096956]"
                                        : "text-[#3f4945] hover:bg-[#096956]/5 hover:text-[#096956]",
                                ].join(" ")}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="hidden rounded-full bg-[#096956] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#096956]/90 md:inline-flex">
                            Dashboard Mitra
                        </button>
                        <button
                            aria-label="shopping_cart"
                            className="rounded-full p-2 text-[#181c1b] transition-all hover:bg-[#096956]/5"
                        >
                            <IconShoppingCart size={22} stroke={1.9} />
                        </button>
                        <button
                            className="rounded-full p-2 text-[#181c1b] transition-all hover:bg-[#096956]/5 md:hidden"
                            aria-label="Open menu"
                        >
                            <IconMenu2 size={22} stroke={1.9} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
