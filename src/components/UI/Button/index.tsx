// src/core/components/UI/Button.tsx
import { ComponentProps, forwardRef } from "react";

type ButtonProps = ComponentProps<"button">;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children }, ref) => {
    return (
      <button
        ref={ref}
        className="py-1 px-5 bg-primary text-white font-medium rounded-sm hover:bg-[#fd6e0098] duration-200 ease-linear"
      >
        {children}
      </button>
    );
  }
);

export default Button;
