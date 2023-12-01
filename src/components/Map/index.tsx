import MapCard from "./MapCard";

export default function Map() {
    return (
        <div className="w-full max-w-5xl relative flex flex-col gap-6 sm:gap-6 mt-6 mb-4 sm:mb-12 sm:mt-16 px-2 sm:px-0">
            <img src="./images/v-2/lines.png" alt="" className="absolute mt-4 hidden sm:block" />
            <MapCard
                number="1"
                styles=""
                text={`“Todos temos uma história para contar". É nesse momento que eu me conecto com você para poder saber e te mostrar o que mudou e  porque mudou no seu corpo, que esta te deixando sem energia, sem foco e com vontade de desistir de tudo.`}
                title="Conhecendo a sua história"
            />
            <MapCard
                number="2"
                styles="right"
                text={`Nesse momento, iremos remover todos alimentos, paliativo medicamentosos e formas de cozinhar que estão intoxicando o seu corpo e fazendo com que ele não consiga produzir a quantidade de energia que você precisa. Parar de sujar sim, mas também retirar toda a sujeira que já está lá.`}
                title="Acabando com os vilões da produtividade"
            />
            <MapCard
                number="3"
                styles=""
                text={`Comida de verdade! Forte e saborosa para nutrir seus órgãos e glândulas, os quais voltarão a produzir hormônios, enzimas e nutrientes como no passado, trazendo a força e o vigor da juventude.`}
                title="Criando um terreno fértil"
            />
            <MapCard
                number="4"
                styles="right"
                text={`Com a energia restaurada e a vontade de vencer a todo vapor, fica fácil mudar coisas na gente que precisam ser reformuladas. Eu vou criar para você um roteiro totalmente personalizado com pratos saborosos e cheios de vida. Você receberá protocolos de limpeza, desintoxicação, desparasitação, bem como cardápios e sugestões alimentares adequadas a você.Também vou te explicar o que você deve fazer e como evitar o que não te fará bem.`}
                title="Uma nova vida!"
            />
        </div>
    )
}