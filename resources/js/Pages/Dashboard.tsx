import { Head } from "@inertiajs/react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import DashboardLayout from "../layouts/DashboardLayout";

const stats = [
    { label: "Revenue", value: "Rp 14.250.000", change: "+12.4%", variant: "success" as const },
    { label: "Orders", value: "1,284", change: "+5.1%", variant: "default" as const },
    { label: "Returning Customers", value: "42%", change: "-1.4%", variant: "warning" as const },
    { label: "Avg. Basket", value: "Rp 64.000", change: "+2.0%", variant: "secondary" as const },
];

const salesRows = [
    { product: "Es Teh Manis", category: "Drinks", sold: 420, revenue: "Rp 2.100.000", status: "Best Seller" },
    { product: "Mie Ayam", category: "Food", sold: 290, revenue: "Rp 3.480.000", status: "Stable" },
    { product: "Kopi Susu", category: "Drinks", sold: 180, revenue: "Rp 2.160.000", status: "Rising" },
    { product: "Pisang Coklat", category: "Snacks", sold: 155, revenue: "Rp 1.550.000", status: "Stable" },
];

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Head title="Dashboard" />

            <div className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.label}>
                            <CardHeader className="pb-2">
                                <CardDescription>{stat.label}</CardDescription>
                                <CardTitle className="text-2xl">{stat.value}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Badge variant={stat.variant}>{stat.change}</Badge>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Filters</CardTitle>
                        <CardDescription>Static controls for mock dashboard interactions.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-3">
                        <Input placeholder="Search product..." />
                        <Select defaultValue="weekly">
                            <SelectTrigger>
                                <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="daily">Daily</SelectItem>
                                <SelectItem value="weekly">Weekly</SelectItem>
                                <SelectItem value="monthly">Monthly</SelectItem>
                            </SelectContent>
                        </Select>
                        <Dialog>
                            <DialogTrigger asChild>
                                <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-3 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90">
                                    Add Note
                                </button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Quick Note</DialogTitle>
                                    <DialogDescription>
                                        This is a mock dialog for dashboard actions.
                                    </DialogDescription>
                                </DialogHeader>
                                <Input placeholder="Type your note here..." />
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <button className="inline-flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium">
                                            Close
                                        </button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>

                <Tabs defaultValue="sales" className="w-full">
                    <TabsList>
                        <TabsTrigger value="sales">Sales Table</TabsTrigger>
                        <TabsTrigger value="summary">Summary</TabsTrigger>
                    </TabsList>

                    <TabsContent value="sales">
                        <Card>
                            <CardHeader>
                                <CardTitle>Top Products</CardTitle>
                                <CardDescription>Static dataset preview in a table.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableCaption>Mock data for April 2026.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Product</TableHead>
                                            <TableHead>Category</TableHead>
                                            <TableHead className="text-right">Sold</TableHead>
                                            <TableHead className="text-right">Revenue</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {salesRows.map((row) => (
                                            <TableRow key={row.product}>
                                                <TableCell className="font-medium">{row.product}</TableCell>
                                                <TableCell>{row.category}</TableCell>
                                                <TableCell className="text-right">{row.sold}</TableCell>
                                                <TableCell className="text-right">{row.revenue}</TableCell>
                                                <TableCell>
                                                    <Badge variant="outline">{row.status}</Badge>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="summary">
                        <Card>
                            <CardHeader>
                                <CardTitle>Summary</CardTitle>
                                <CardDescription>
                                    Revenue is up, drinks remain top category, and retention is slightly down.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
}
