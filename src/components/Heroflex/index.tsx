
import { ReactNode } from "react"

interface HeroFlexProps {
    children?: ReactNode
    title?: string
    topTitle?: string
    subtitle?: string
    reverse?: boolean
    imagePath?: string
    href?: string
    cta?: string
}

export default function HeroFlex({ children, imagePath, reverse, title, subtitle, topTitle, href, cta }: HeroFlexProps) {
    return (
        <div className={`flex flex-col px-4 sm:px-0 items-center gap-4 sm:gap-12 ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
                <h2 className="font-bold text-xl sm:text-3xl text-zinc-950">{title}</h2>
                {children}
                {href && (
                    // <div className="w-full">
                        <a href={href} className="py-2 rounded-md bg-zinc-600 sm:w-96 text-white font-medium text-sm text-center">{cta}</a>
                    // </div>
                )}
            </div>
            <div className={`w-full sm:w-1/2 flex ${reverse ? 'justify-start' : 'justify-end'}`}>
                <img src={`./images/${imagePath}.png`} alt={title} className="rounded-2xl" />
            </div>
        </div>
    )
}
