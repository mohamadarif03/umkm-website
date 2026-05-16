import { IconMenu2, IconShoppingCart } from "@tabler/icons-react";
import { TEH_MBOIS_IMAGES } from "./constants";

const navLinks = [
    { href: "#", label: "Home", active: true },
    { href: "#menu", label: "Menu" },
    { href: "#insight", label: "Insight" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#kontak", label: "Kontak" },
];

export default function TehMboisTopNav() {
    return (
        <nav className="sticky top-0 z-50 border-b border-[#bec9c4]/30 bg-[#f7faf7]/90 backdrop-blur-md">
            <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 py-4 md:px-8">
                <div className="flex items-center gap-4">
                    <a href="#" className="inline-flex items-center">
                        <img src={TEH_MBOIS_IMAGES.logo} alt="TehMbois" className="h-8 w-auto object-contain md:h-10" />
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
                        Smart Dashboard
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
    );
}
