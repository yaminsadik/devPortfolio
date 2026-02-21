import { Card, CardContent } from "@/components/ui/card";
import { contentConfig } from "@/config/content";

const { whatIDo } = contentConfig.home;

export function WhatIDo() {
  return (
    <section className="border-t border-border/60 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {whatIDo.title}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {whatIDo.items.map((item) => (
            <Card
              key={item.title}
              className="border-border/60 bg-card/50"
            >
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
