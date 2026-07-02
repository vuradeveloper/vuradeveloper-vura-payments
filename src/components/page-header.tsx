import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-4 mb-8">
      <div>
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h1>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  );
}
