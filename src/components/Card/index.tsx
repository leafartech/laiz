import { ElementType, ReactNode } from "react"

interface CardProps {
    text: string
    children: ReactNode
    grad?: boolean
}

export default function Card({ children, text, grad }: CardProps) {
    return (
        <div className={`px-4 py-8 flex flex-col items-center gap-3 border border-zinc-300 rounded-md w-full sm:w-52 text-center ${grad ? '' : 'grad-sec'}`}>
            {children}
            <h4 className={`font-bold text-xl ${grad ? 'text-zinc-950' : 'text-zinc-50'}`}>{text}</h4>
        </div>
    )
}