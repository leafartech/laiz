import Button from "../Button";

export default function Header() {
    return (
        <header className="h-screen flex items-center justify-center">
            <img src="./images/lines.png" alt="" className="absolute w-full" />
            <div className="flex flex-col items-center gap-4 z-10 px-4 sm:px-0">
                <img src="./images/logo.png" alt="" className="w-16 h-16" />
                <div className="max-w-3xl text-center flex flex-col gap-6 items-center">
                    <h1 className="font-semibold text-white text-xl sm:text-2xl tracking-wide">ASSISTA O VÍDEO ABAIXO PARA ENTENDER COMO UMA MUDANÇA NA SUA ALIMENTAÇÃO IRÁ TE <span className="text-emerald-500">PROPORCIONAR ENERGIA E EMAGRECIMENTO</span></h1>
                    <img src="./images/player.png" alt="" className="" />
                    <Button>Quero agendar uma consulta</Button>
                </div>
            </div>
        </header>
    )
}