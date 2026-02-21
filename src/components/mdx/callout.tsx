import { Info, AlertTriangle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "info" | "warning" | "tip";
  children: React.ReactNode;
}

const calloutConfig = {
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50/50 text-blue-900 dark:border-blue-800 dark:bg-blue-950/30 dark:text-blue-200",
    iconClass: "text-blue-600 dark:text-blue-400",
  },
  warning: {
    icon: AlertTriangle,
    className: "border-amber-200 bg-amber-50/50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/30 dark:text-amber-200",
    iconClass: "text-amber-600 dark:text-amber-400",
  },
  tip: {
    icon: Lightbulb,
    className: "border-emerald-200 bg-emerald-50/50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/30 dark:text-emerald-200",
    iconClass: "text-emerald-600 dark:text-emerald-400",
  },
};

export function Callout({ type = "info", children }: CalloutProps) {
  const config = calloutConfig[type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "my-6 flex gap-3 rounded-lg border p-4",
        config.className
      )}
      role="note"
    >
      <Icon className={cn("mt-0.5 h-5 w-5 shrink-0", config.iconClass)} />
      <div className="text-sm leading-relaxed [&>p]:m-0">{children}</div>
    </div>
  );
}
