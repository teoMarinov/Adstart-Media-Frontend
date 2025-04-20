import { useEffect, useRef, useState } from "react";

interface CustomInputProps {
  children?: React.ReactNode;
  placeholder?: string;
  [key: string]: unknown;
}

export default function CustomInput({
    children,
    placeholder,
    ...rest
  }: CustomInputProps) {
    const childRef = useRef<HTMLDivElement | null>(null);
    const [inputRightPadding, setInputRightPadding] = useState<string | null>(null);
  
    useEffect(() => {
      const updatePadding = () => {
        setInputRightPadding(
          `${childRef.current?.offsetWidth ? childRef.current?.offsetWidth + 16 : 0}px`
        );
      };
  
      updatePadding();
  
      const resizeObserver = new ResizeObserver(entries => {
        if (entries.length > 0) {
          updatePadding();
        }
      });
  
      if (childRef.current) {
        resizeObserver.observe(childRef.current);
      }
  
      return () => {
        resizeObserver.disconnect();
      };
    }, [children]);
  
    return inputRightPadding && (
      <div className="flex items-center space-x-2 relative">
        <input
          {...rest}
          type="text"
          placeholder={placeholder}
          style={{ paddingRight: inputRightPadding }}
          className={"border border-neutral-300 rounded-full p-4 w-full focus:outline-none shadow-md caret-neutral-500"}
        />
        <div
          ref={childRef}
          className="absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          {children}
        </div>
      </div>
    );
  }
