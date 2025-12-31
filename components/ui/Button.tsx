import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md font-medium transition-colors inline-flex items-center justify-center",
        {
          "bg-primary text-white hover:bg-blue-600": variant === "primary",
          "bg-secondary text-white hover:bg-purple-600":
            variant === "secondary",
          "border border-gray-300 hover:bg-gray-50": variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
