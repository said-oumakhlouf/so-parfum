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
        "h-auto min-h-11 rounded-none bg-primary px-6 py-3 text-center text-xs leading-snug font-medium tracking-[0.15em] whitespace-normal uppercase text-primary-foreground transition-colors duration-200 hover:bg-gold hover:text-gold-foreground sm:px-8 sm:tracking-[0.2em]",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
