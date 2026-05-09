import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type StatItem = {
    label: string;
    value: string;
    delta: string;
    variant?: "default" | "secondary" | "outline" | "success" | "warning";
};

export default function StatGrid({ items }: { items: StatItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
                <Card key={item.label}>
                    <CardHeader className="pb-2">
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <CardTitle className="text-2xl">{item.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Badge variant={item.variant ?? "secondary"}>{item.delta}</Badge>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
