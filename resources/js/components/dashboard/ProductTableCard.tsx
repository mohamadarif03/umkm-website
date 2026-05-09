import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

const rows = [
    { name: "Es Teh Manis", category: "Minuman", sold: 420, status: "Best Seller" },
    { name: "Mie Ayam", category: "Makanan", sold: 290, status: "Stabil" },
    { name: "Kopi Susu", category: "Minuman", sold: 180, status: "Naik" },
    { name: "Pisang Coklat", category: "Snack", sold: 155, status: "Stabil" },
];

export default function ProductTableCard() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Produk Operasional</CardTitle>
                <CardDescription>Prioritas SKU berdasarkan performa mingguan.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Produk</TableHead>
                            <TableHead>Kategori</TableHead>
                            <TableHead className="text-right">Terjual</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell className="font-medium">{row.name}</TableCell>
                                <TableCell>{row.category}</TableCell>
                                <TableCell className="text-right">{row.sold}</TableCell>
                                <TableCell>
                                    <Badge variant={row.status === "Best Seller" ? "success" : "outline"}>{row.status}</Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
