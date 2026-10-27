import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SelyaButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode;
}

export function SelyaButton({
  children,
  className,
  ...props
}: SelyaButtonProps) {
  return (
    <Button
      className={cn(
        "min-h-11 rounded-none bg-primary px-8 py-3 text-xs font-medium tracking-[0.2em] uppercase text-primary-foreground transition-colors duration-200 hover:bg-gold hover:text-gold-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
