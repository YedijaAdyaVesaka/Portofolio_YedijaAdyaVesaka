import { cva } from "class-variance-authority";

export const buttonVariants = cva(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    {
        variants: {
            variant: {
                default:
                    "bg-[#2B66FF] text-white shadow-lg shadow-blue-500/25 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/30",
                gradient:
                    "bg-[#2B66FF] hover:bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35",
                outline:
                    "border border-border bg-background/60 text-foreground backdrop-blur hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400",
                ghost: "text-muted-foreground hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400",
                white: "bg-white text-zinc-900 shadow-lg hover:bg-white/90",
            },
            size: {
                sm: "h-9 px-4 text-sm",
                default: "h-11 px-6 text-sm",
                lg: "h-12 px-8 text-base",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: { variant: "default", size: "default" },
    }
);