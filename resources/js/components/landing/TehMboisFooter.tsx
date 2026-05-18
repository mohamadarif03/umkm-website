import { TEH_MBOIS_IMAGES } from "./constants";

const footerLinks = ["Privacy Policy", "Terms of Service", "Partnership", "Location"];

export default function TehMboisFooter() {
    return (
        <footer
            id="kontak"
            className="mt-20 flex flex-col justify-center items-center gap-10 bg-white px-4 py-12 md:flex-row md:items-start md:px-8"
        >
            <div className="max-w-6xl flex justify-between w-full">
                <div className="text-center flex flex-row justify-center items-center gap-6 md:text-left">
                    <a href="#tehmbois-hero" className="mb-3 inline-flex items-center">
                        <img
                            src={TEH_MBOIS_IMAGES.logo}
                            alt="TehMbois"
                            className="h-16 w-auto object-contain opacity-90 transition-all hover:opacity-100"
                        />
                    </a>
                    <p className="text-md font-heading text-[#3f4945]">
                        Segar, Mbois & Ora Mahal.
                    </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-4 text-center md:items-end md:text-right">
                    <p className="text-xs text-[#8d493c] opacity-80">
                        © 2024 TehMbois Indonesia. Mbois Banget, Segar Terus.
                    </p>
                    {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
                        {footerLinks.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-xs text-[#3f4945] underline decoration-2 opacity-80 transition-all hover:text-[#096956] hover:opacity-100"
                            >
                                {link}
                            </a>
                        ))}
                    </div> */}
                </div>
            </div>
        </footer>
    );
}
