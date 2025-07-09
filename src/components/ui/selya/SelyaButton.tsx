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
        "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground px-6 py-3 text-base font-medium rounded-full transition",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
