import Button from "@/components/Button";
import HeroFlex from "@/components/Heroflex";
import Map from "@/components/Map";
import Section from "@/components/Section";

export default function Page() {
    return (
        <div className="bg-zinc-100">
            <header className="sm:min-h-screen flex items-center justify-center pt-6 sm:pt-0 bg-gradient-to-b from-emerald-100 to-zinc-100">
                <img src="./images/lines.png" alt="" className="hidden sm:block absolute w-full" />
                <img src="./images/v-2/bg0.png" alt="" className="hidden sm:block absolute right-0 top-0 h-full opacity-5" />
                <div className="flex flex-col items-start sm:items-center gap-4 z-10 px-4 sm:px-0 py-12 sm:py-0">
                    <img src="./images/logo2.png" alt="" className="w-36 sm:w-48" />
                    <div className="max-w-3xl text-center flex flex-col gap-6 items-center z-10">
                        <h1 className="font-semibold text-zinc-700 text-xl sm:text-2xl tracking-wide text-left sm:text-center">ASSISTA O VÍDEO ABAIXO PARA ENTENDER COMO UMA MUDANÇA NA SUA ALIMENTAÇÃO IRÁ TE <span className="text-emerald-500">PROPORCIONAR ENERGIA E EMAGRECIMENTO</span></h1>
                        <img src="./images/player.png" alt="" className="" />
                        <Button>Quero agendar minha consulta</Button>
                    </div>
                </div>
            </header>
            <main className="pt-0 sm:pt-12">
                <Section className="py-6 sm:py-12">
                    <HeroFlex
                        title="Para quem é?"
                        imagePath="v-2/bg1"
                    >
                        <div className="text-zinc-600 flex flex-col gap-3">
                            <p className="">Este protocolo foi criado para pessoas que buscam ter uma transformação profunda na sensação de sentir-se bem e cheio de vida.</p>
                            <p className="">Você receberá todo meu acompanhamento - pessoal e de minha equipe - para nunca mais precisar tomar remédios de</p>
                            <ul className="">
                                <li>• Dor de cabeça;</li>
                                <li>• Emagrecedores;</li>
                                <li>• Digestão com omeprazol;</li>
                                <li>• "Produtividade" como vevanse e ritalina;</li>
                            </ul>
                        </div>
                    </HeroFlex>
                </Section>
                <Section className="py-6 sm:py-12 px-4 sm:px-0" classNameS="grad-fixed">
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
                    <div className="flex flex-col items-center gap-4 z-10 w-full">
                        <h2 className="text-xl sm:text-3xl text-zinc-50 font-bold">Como funciona o <span className="text-emerald-400">Protocolo Faxina Biológica</span></h2>
                        <Map />
                        <Button>Quero agendar minha consulta</Button>
                    </div>
                </Section>
                <Section className="py-6 sm:py-12 px-4 sm:px-0">
                    <img src="./images/laiz2.png" alt="" className="sm:hidden block rounded-xl mb-8" />
                    <div className="flex flex-col gap-8 z-10">
                        <h2 className="text-zinc-950 font-semibold text-2xl sm:text-3xl">Laiz Lauda</h2>
                        <div className="relative flex flex-col gap-4 text-zinc-600 text-lg">
                            <img src="./images/left.png" className="absolute top-0 left-0 opacity-30 h-4" />
                            <img src="./images/right.png" className="absolute bottom-0 opacity-30 right-0 h-4" />
                            <p><span className="ms-8">A</span> nutrição é uma ciência muito estudada e por isso o profissional nutricionista torna-se tão importante para quem quer ter qualidade de vida.</p>
                            <p>São inúmeras informações e descobertas científicas divulgadas em todos os meios de comunicação e esse bombardeio de novidades causa dúvidas e dificuldade de saber o que é melhor para cada um.</p>
                            <p>Meu comprometimento está em trazer a informação mais atualizada e de forma mais adequada para você, dentro da sua individualidade bioquímica. Somos todos únicos e isso deve ser respeitado e conhecido por cada um de nós. </p>
                            <p>O fazer um exame e entender o que cada um daqueles resultados significa, saber o porquê de você estar consumido tal alimento em tal horário, faz toda a diferença para que você siga ou não aquela orientação.</p>
                        </div>
                    </div>
                    <div className="w-full mt-6">
                        <Button>Quero agendar minha consulta</Button>
                    </div>
                </Section>
                <Section className="py-6 sm:py-12 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <HeroFlex
                            imagePath="v-2/bg4"
                            title="Sobre a Laiz Lauda"
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-600">Nutricionista especialista em restauração de energia e vontade de viver. Ao longo de 14 anos, Laiz acumula a transformação de centenas de casos de cansaço e falta de energia, dores de cabeça e enxaqueca recorrente e até algumas dezenas de casos de gravidez, em mulheres que se queixavam de não conseguirem engravidar.</p>
                                <p className="text-zinc-600">Ao longo dos anos e diversas formações, Laiz percebeu que havia uma conexão em todas essas queixas relatadas por seus pacientes. Dia após dia, a tradicional solicitação do "preciso emagrecer urgente" deu lugar para "eu preciso recuperar minha energia", "não tenho vontade de sair da cama", "não aguento mais essa dor de cabeça". </p>
                            </div>
                        </HeroFlex>
                        <HeroFlex
                            imagePath="v-2/bg5"
                            title=""
                            reverse={true}
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-600">A quantidade absurda de reclamações idênticas em pessoas com mais de 35 anos, chamou sua atenção mas foi ver seu marido adoecer com as mesmas queixas de seus pacientes, que fez com que ela mergulhasse em uma jornada de conhecimentos que lhe trouxe a "chave secreta" para a cura de todos esses males. </p>
                                <p className="text-zinc-600">A essa "chave secreta" ela chamou de Protocolo de Faxina Biológica! Um protocolo focado em restaurar a saúde e o bem estar de pessoas que já passaram dos 35 anos e relatam muita falta de energia, a necessidade constante de tomar estimulantes, dores de cabeça e enxaqueca recorrente. </p>
                            </div>
                        </HeroFlex>
                        <HeroFlex
                            imagePath="v-2/bg3"
                            title=""
                        >
                            <div className="flex flex-col gap-3">
                                <p className="text-zinc-600">Laiz é formada nutricionista pela UNIVALI, pós graduada em nutrição clínica funcional, fitoterapia funcional, nutrição ortomolecular e saúde quântica e fez formação em personal diet, health coaching, terapia vibracional, terapia Clark, modulação intestinal e medicina funcional integrativa.</p>
                                <p className="text-zinc-600">Divulgadora da nutrição funcional desde de 2009, presente em programas de rádio e TV da região, e está frequentemente nas mídias sociais falando sobre o que acredita: que a informação a respeito dos alimentos e do funcionamento do corpo é o pontapé inicial para a mudar os hábitos e estilo de vida.</p>
                            </div>
                        </HeroFlex>
                    </div>
                    <div className="px-4 w-full sm:px-0">
                        <Button>Quero agendar uma consulta</Button>
                    </div>
                </Section>
            </main>
            <footer className="pb-12">
                <div className="px-4 w-full sm:px-0 flex justify-center">
                    <img src="./images/logo2.png" alt="" className="w-56 sm:w-64 mt-6" />
                </div>
            </footer>
        </div>
    )
}