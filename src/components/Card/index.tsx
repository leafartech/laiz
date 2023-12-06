import { ElementType, ReactNode } from "react"

interface CardProps {
    text: string
    children: ReactNode
    grad?: boolean
}

export default function Card({ children, text, grad }: CardProps) {
    return (
        <div className={`px-4 py-8 flex flex-col items-center sm:py-16 sm:w-[45%] gap-3 border border-zinc-300 rounded-md w-full text-center ${grad ? '' : 'grad-sec'}`}>
            {children}
            <h4 className={`font-bold text-lg sm:text-xl ${grad ? 'text-zinc-950' : 'text-zinc-50'}`}>{text}</h4>
        </div>
    )
}