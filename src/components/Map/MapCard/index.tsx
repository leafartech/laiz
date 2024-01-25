interface MapCardProps {
    title: string
    text: string
    number: string
    styles?: string
}

export default function MapCard({ number, text, title, styles }: MapCardProps) {
    return (
        <div className={`relative w-full flex ${styles === 'right' && 'sm:justify-end items-end'}`}>
            <div className={`relative py-6 px-4 bg-emerald-800 border-2 border-emerald-500 ${styles} rounded-xl sm:max-w-md col z-10`}>
                <p className="absolute -top-5 -left-5 text-white font-semibold rounded-full bg-emerald-500 flex justify-center items-center h-10 w-10 text-2xl">{number}</p>
                <h5 className="text-white font-semibold text-2xl mb-3">{title}</h5>
                <p className="text-zinc-300">{text}</p>
            </div>
        </div>
    )
}