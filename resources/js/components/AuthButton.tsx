import { Link, usePage } from "@inertiajs/react";
import { IconChevronDown, IconLogout, IconSettings, IconUser } from "@tabler/icons-react";
import type { InertiaPageProps } from "../types/page-props";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export default function AuthButton() {
    const { auth } = usePage<InertiaPageProps>().props;
    const userName = auth?.user?.name ?? "Akun";
    const userRole = auth?.user?.role ?? "unknown";
    const roleLabel = String(userRole).toUpperCase();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                    <IconUser size={16} />
                    <span className="hidden sm:inline">{userName}</span>
                    <Badge variant="secondary" className="hidden md:inline-flex">
                        {roleLabel}
                    </Badge>
                    <IconChevronDown size={14} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel className="text-muted-foreground">Menu Akun</DropdownMenuLabel>
                <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">
                    Role: {roleLabel}
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard/pengaturan-bisnis" className="flex items-center gap-2">
                        <IconSettings size={16} />
                        Pengaturan Bisnis
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile" className="flex items-center gap-2">
                        <IconUser size={16} />
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/logout" method="post" as="button" className="flex w-full items-center gap-2 text-destructive">
                        <IconLogout size={16} />
                        Logout
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
