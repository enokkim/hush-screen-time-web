import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        "flex w-full h-16 rounded-full border border-gray-200 bg-white px-6 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all",
        className
      )}
      {...props}
    />
  )
})
Input.displayName = "Input"

export { Input }
