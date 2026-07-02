export function VuraLogo({ size = 32 }: { size?: number }) {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-xl flex items-center justify-center text-primary-foreground font-bold"
    >
      <div
        className="w-full h-full rounded-xl flex items-center justify-center"
        style={{ background: "var(--gradient-vura)", fontSize: size * 0.5 }}
      >
        V
      </div>
    </div>
  );
}
