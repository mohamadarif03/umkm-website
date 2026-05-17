import { IconFlame, IconLeaf, IconPlus, IconShoppingBag } from "@tabler/icons-react";

type MenuItem = {
    name: string;
    description?: string;
    price: string;
    badge?: { label: string; className: string };
    tone: "tertiary" | "primary" | "lemon" | "choco" | "ginger";
    bento?: "featured" | "usual" | "tall";
};

const menuItems: MenuItem[] = [
    {
        name: "Es Teh Tarik Mbois",
        description: "Perpaduan teh pekat dan susu kental yang ditarik hingga berbuih lembut.",
        price: "Rp 7.000",
        badge: { label: "BEST SELLER", className: "bg-[#8d493c] text-white" },
        tone: "tertiary",
        bento: "featured",
    },
    {
        name: "Es Teh Gula Aren",
        description: "Aroma wangi gula aren asli berpadu sempurna dengan teh Wonosari pilihan.",
        price: "Rp 8.000",
        badge: { label: "POPULAR", className: "bg-[#096956] text-white" },
        tone: "primary",
        bento: "tall",
    },
    {
        name: "Es Teh Lemon Sereh",
        // description: "Sensasi asam segar lemon berpadu hangatnya sereh. Cocok buat siang terik.",
        price: "Rp 9.000",
        badge: { label: "UNIQUE", className: "bg-[#5d5e60] text-white" },
        tone: "lemon",
        bento: "usual",
    },
    {
        name: "Es Teh Susu Coklat",
        // description: "Buat yang suka manis creamy, campuran teh, susu, dan coklat lezat.",
        price: "Rp 10.000",
        tone: "choco",
        bento: "usual",
    },
    {
        name: "Es Teh Jahe Merah",
        description: "Kesegaran teh dingin dengan sensasi hangat jahe merah di tenggorokan.",
        price: "Rp 10.000",
        tone: "ginger",
        bento: "tall",
    },
];

function DrinkIllustration({ tone, featured = false, tall = false }: { tone: MenuItem["tone"]; featured?: boolean; tall?: boolean }) {
    const toneClass = {
        tertiary: "from-[#ab6153]/40 to-[#ab6153]/10",
        primary: "from-[#096956]/30 to-[#096956]/10",
        lemon: "from-[#FFFACD]/40 to-[#FFFACD]/10",
        choco: "from-[#8B4513]/40 to-[#8B4513]/10",
        ginger: "from-[#096956]/20 to-[#096956]/5",
    }[tone];

    return (
        <div
            className={[
                "relative flex items-center justify-center overflow-hidden rounded-2xl bg-[#f1f4f1]",
                featured ? "aspect-[4/3] p-10 md:p-12" : tall ? "aspect-[4/3] p-8" : "aspect-square p-8",
            ].join(" ")}
        >
            <div
                className={[
                    `relative flex items-end justify-center rounded-b-xl border-x-4 border-b-4 border-white bg-gradient-to-b ${toneClass} pb-4 shadow-inner`,
                    featured ? "h-56 w-36 md:h-64 md:w-40" : tall ? "h-52 w-34 md:h-56 md:w-36" : "h-48 w-32",
                ].join(" ")}
            >
                <div className="absolute bottom-0 h-32 w-24 rounded-sm bg-black/10" />
                {tone === "lemon" && <IconLeaf className="absolute text-[#5d5e60]/50" size={38} />}
                {tone === "ginger" && <IconFlame className="absolute text-[#096956]/50" size={38} />}
                <div className="absolute -top-4 h-16 w-2 rotate-12 bg-white" />
            </div>
        </div>
    );
}

function ProductCard({ item }: { item: MenuItem }) {
    const bentoRole = item.bento ?? "usual";
    const isFeatured = bentoRole === "featured";
    const isTall = bentoRole === "tall";

    const spanClass =
        bentoRole === "featured"
            ? "xl:col-span-2 xl:row-span-2"
            : bentoRole === "tall"
              ? "xl:row-span-2"
              : "xl:row-span-1";

    return (
        <article
            className={[
                "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#bec9c4]/30 bg-white p-6 shadow-sm transition-all hover:border-[#096956]/50 hover:shadow-md",
                spanClass,
            ].join(" ")}
        >
            {item.badge && (
                <div className={`absolute right-4 top-4 z-10 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${item.badge.className}`}>
                    {item.badge.label}
                </div>
            )}

            <DrinkIllustration tone={item.tone} featured={isFeatured} tall={isTall} />
            <h3 className={["mb-2 mt-6 font-semibold text-[#181c1b]", isFeatured ? "text-3xl" : "text-2xl"].join(" ")}>
                {item.name}
            </h3>
            <p className={["mb-6 flex-grow text-[#3f4945]", isFeatured || isTall ? "text-base" : "text-sm"].join(" ")}>
                {item.description?.length && item.description.length > 80 ? item.description.slice(0, 77) + "..." : item.description}
            </p>
            <div className="mt-auto flex items-center justify-between">
                <span className="text-2xl font-bold text-[#096956]">{item.price}</span>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#096956]/10 text-[#096956] transition-colors hover:bg-[#096956] hover:text-white">
                    <IconShoppingBag size={20} />
                </button>
            </div>
        </article>
    );
}

export default function TehMboisMenuSection() {
    return (
        <section id="menu" className="bg-white py-20">
            <div className="mx-auto w-full max-w-[1280px] px-4 md:px-8">
                <div className="mb-16 text-center">
                    <h2 className="font-cherry-freeland mb-4 text-5xl font-bold text-slate-800">Menu Mbois Andalan</h2>
                    <p className="mx-auto max-w-2xl text-[#3f4945]">
                        Pilih varian favoritmu, nikmati kesegarannya tanpa bikin dompet nangis.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:auto-rows-[170px] xl:grid-cols-4">
                    {menuItems.map((item) => (
                        <ProductCard key={item.name} item={item} />
                    ))}

                    <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-[#30826e] to-[#096956] p-6 shadow-lg xl:col-span-3 xl:row-span-2">
                        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                        <div className="absolute right-4 top-4 z-10 rounded-full bg-[#ab6153] px-3 py-1 text-xs font-semibold text-white shadow-sm">
                            PROMO
                        </div>
                        <div className="relative z-10 flex h-full flex-col gap-6 md:flex-row md:items-stretch">
                            <div className="flex flex-1 flex-col justify-between">
                                <div>
                                    <h3 className="mb-2 text-2xl font-semibold text-white">Paket Mbois Bundle 5</h3>
                                    <p className="mb-6 text-white/80">
                                        Beli 5 cup varian apa saja lebih hemat! Cocok buat nongkrong bareng teman.
                                    </p>
                                </div>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-sm text-white/60 line-through">Rp 45.000</span>
                                        <span className="text-2xl font-bold text-white">Rp 30.000</span>
                                    </div>
                                    <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#096956] shadow-md transition-all hover:scale-105 hover:bg-[#ebefeb]">
                                        <IconShoppingBag size={20} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-1 items-center justify-center rounded-2xl bg-white/10 p-8">
                                <div className="flex">
                                    <div className="h-24 w-16 translate-x-4 -rotate-12 rounded-lg border border-white/50 bg-white/30 backdrop-blur-sm" />
                                    <div className="z-10 flex h-32 w-20 items-center justify-center rounded-lg border border-white/50 bg-white/40 text-2xl font-bold text-white shadow-xl backdrop-blur-sm">
                                        x5
                                    </div>
                                    <div className="-translate-x-4 rotate-12 h-24 w-16 rounded-lg border border-white/50 bg-white/30 backdrop-blur-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
