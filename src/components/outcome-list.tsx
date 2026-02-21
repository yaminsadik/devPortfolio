import { CheckCircle2 } from "lucide-react";

interface OutcomeListProps {
  outcomes: readonly string[] | string[];
}

export function OutcomeList({ outcomes }: OutcomeListProps) {
  return (
    <ul className="space-y-3">
      {outcomes.map((outcome) => (
        <li key={outcome} className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          <span className="text-sm text-muted-foreground">{outcome}</span>
        </li>
      ))}
    </ul>
  );
}
