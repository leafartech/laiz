export default function Page() {
    return (
        <div className="h-screen w-screen bg-zinc-50 flex items-center justfiy-center">
            <div className="w-full flex flex-col gap-4 items-center justify-center px-4">
                <img src="./images/logo2.png" alt="" className="w-48 sm:w-52 mt-6" />
                <div className="flex flex-col text-center sm:text-center">
                    <h1 className="text-xl font-semibold">Parabéns por dar o primeiro passo!</h1>
                    <p className="text-zinc-600 text-sm">Entraremos em contato em breve via Whatsapp</p>
                </div>
            </div>
        </div>
    )
}