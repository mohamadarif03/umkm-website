import { Link } from "@inertiajs/react";
import { IconMenu2 } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet";

const navLinks = [
    { href: "#fitur", label: "Fitur" },
    { href: "#cara-kerja", label: "Cara Kerja" },
    { href: "#testimoni", label: "Testimoni" },
];

export default function TopNavbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a href="#" className="font-heading text-xl font-bold text-primary-foreground">
                    Asisten UMKM
                </a>

                <nav className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-md px-3 py-2 text-sm text-primary-foreground/80 transition-colors hover:bg-white/10 hover:text-primary-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                        <Link href="/login">Masuk ke Sistem</Link>
                    </Button>
                </div>

                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground md:hidden"
                            aria-label="Open menu"
                        >
                            <IconMenu2 size={20} />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-80">
                        <SheetHeader>
                            <SheetTitle>Asisten UMKM</SheetTitle>
                            <SheetDescription>Navigasi halaman utama</SheetDescription>
                        </SheetHeader>
                        <div className="mt-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <Button asChild className="mt-4 w-full">
                                <Link href="/login">Masuk ke Sistem</Link>
                            </Button>
                        </div>
                        <SheetClose className="hidden" />
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
