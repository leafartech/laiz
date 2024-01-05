import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode
}

export default function Button({ children }: ButtonProps) {
    return (
        <div className="w-full flex justify-center items-center">
            <a href="#_forms_3" className="text-white font-semibold py-3 w-full sm:w-96 text-sm sm:text-lg bg-emerald-500 rounded-md text-center">{children}</a>
        </div>
    )
}
