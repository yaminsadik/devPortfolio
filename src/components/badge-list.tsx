import { Badge } from "@/components/ui/badge";

interface BadgeListProps {
  items: readonly string[] | string[];
  variant?: "default" | "secondary" | "outline" | "destructive";
}

export function BadgeList({ items, variant = "secondary" }: BadgeListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} variant={variant} className="text-xs font-medium">
          {item}
        </Badge>
      ))}
    </div>
  );
}
