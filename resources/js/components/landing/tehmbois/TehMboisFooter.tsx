import { TEH_MBOIS_IMAGES } from "./constants";

const footerLinks = ["Privacy Policy", "Terms of Service", "Partnership", "Location"];

export default function TehMboisFooter() {
    return (
        <footer id="kontak" className="mt-20 flex w-full flex-col items-center justify-between gap-8 bg-white px-4 py-12 md:flex-row md:px-8">
            <div className="text-center md:text-left">
                <div className="text-center md:text-left">
                    <a href="#kontak" className="mb-2 inline-flex items-center">
                        <img src={TEH_MBOIS_IMAGES.logo} alt="TehMbois" className="h-8 w-auto object-contain opacity-85 transition-all hover:opacity-100" />
                    </a>
                    <p className="mt-2 text-xs text-[#8d493c] opacity-80"> 2024 TehMbois Indonesia. Mbois Banget, Segar Terus.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-6">
                    {footerLinks.map((link) => (
                        <a
                            key={link}
                            href="#"
                            className="text-xs text-[#3f4945] underline decoration-2 opacity-80 transition-all hover:text-[#096956] hover:opacity-100"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
