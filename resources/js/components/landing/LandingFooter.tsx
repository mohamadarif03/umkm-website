export default function LandingFooter() {
    return (
        <footer className="border-t bg-muted/35 py-10">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 px-4 text-sm sm:px-6 md:grid-cols-2 lg:px-8">
                <div className="space-y-1">
                    <p className="font-heading text-lg font-bold text-primary">Asisten UMKM</p>
                    <p className="text-muted-foreground">
                        © 2024 Asisten UMKM. Solusi Operasional Digital untuk F&amp;B Indonesia.
                    </p>
                </div>
                <div className="flex flex-wrap items-start gap-x-6 gap-y-2 text-muted-foreground md:justify-end">
                    <a href="#" className="hover:text-primary hover:underline">
                        Tentang Kami
                    </a>
                    <a href="#" className="hover:text-primary hover:underline">
                        Kebijakan Privasi
                    </a>
                    <a href="#" className="hover:text-primary hover:underline">
                        Syarat &amp; Ketentuan
                    </a>
                    <a href="#" className="hover:text-primary hover:underline">
                        Bantuan
                    </a>
                </div>
            </div>
        </footer>
    );
}

