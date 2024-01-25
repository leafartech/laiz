'use client'

import { useEffect, useState } from "react"

export default function Modal() {
    const [modal, setModal] = useState<boolean>(false)
    
    return (
        modal ? (
            <div className="absolute top-0 left-0 h-screen w-full">
                <div className="absolute top-0 left-0 h-screen w-full bg-black/60">

                </div>
            </div>
        ) : ''
    )
}