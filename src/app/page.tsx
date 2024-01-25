'use client'

import Button from "@/components/Button";
import Card from "@/components/Card";
import HeroFlex from "@/components/Heroflex";
import Map from "@/components/Map";
import Section from "@/components/Section";
import { useEffect } from "react";

export default function Page() {
  let cont = 0
  useEffect(() => {
    if (cont === 0) {
      const script = document.createElement('script');
      script.src = 'https://laizlauda.activehosted.com/f/embed.php?id=3';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      document.body.appendChild(script);
      cont++;
    }
  }, []);

  return (
    <div className="bg-zinc-100">
      <img src="./images/lines.png" alt="" className="hidden sm:block absolute w-full" />
      <header className="sm:min-h-screen flex items-center justify-center pt-6 sm:pt-0 bg-gradient-to-b from-emerald-100 to-zinc-100">
        <div className="flex flex-col items-center gap-4 z-10 px-4 sm:px-0 py-12 sm:py-0">
          <img src="./images/logo2.png" alt="" className="w-36" />
          <div className="max-w-4xl text-center flex flex-col gap-6 items-center z-10">
            <h1 className="font-bold text-zinc-950 text-3xl sm:text-4xl tracking-wide text-center">Assista o vídeo abaixo para entender como uma única decisão pode te <span className="text-emerald-500">proporcionar energia e emagrecimento</span></h1>
            <iframe className="rounded-xl w-full h-[200px] sm:w-[600px] sm:h-[330px]" src="https://www.youtube.com/embed/z62WXfY-Lmg?si=5UMfokZxZD_ZnN_u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <Button>Quero agendar minha consulta</Button>
          </div>
        </div>
      </header>
      <main className="pt-0 sm:pt-12">
        <Section className="py-6 sm:py-12 px-4 lg:px-0">
          <div className="flex flex-col items-center gap-8">
            <div className="text-left sm:text-center max-w-2xl">
              <h2 className="text-2xl sm:text-3xl text-zinc-950 font-bold mb-4">Para quem é?</h2>
              <p className="text-zinc-600 text-lg mb-2">Este protocolo foi criado para pessoas que buscam ter uma transformação profunda na sensação de sentir-se bem e cheio de vida.</p>
              <p className="text-zinc-600 text-lg">Você receberá todo meu acompanhamento - pessoal e de minha equipe - para nunca mais precisar tomar remédios.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Card text="Dor de cabeça" grad={true}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <g clipPath="url(#clip0_22_58)">
                    <path d="M24 0C10.76 0 0 10.76 0 24C0 37.24 10.76 48 24 48C37.24 48 48 37.24 48 24C48 10.76 37.24 0 24 0ZM8.48 11.4C9.54 10.1 10.74 8.94 12.08 7.96C18.98 9.28 31.52 12.5 43.56 19.9C43.84 21.22 43.98 22.6 43.98 24.02C43.98 24.32 43.98 24.62 43.96 24.92C30 15.52 14.5 12.34 8.48 11.4ZM4.04 22.74C4.22 20 4.94 17.42 6.1 15.1C7.34 15.26 10.62 15.74 15.02 16.82C9.94 18.94 6.32 21.14 4.06 22.74H4.04ZM41.3 13.96C32.58 9.3 23.98 6.58 17.62 5.04C19.62 4.36 21.78 4 24.02 4C31.4 4 37.84 8 41.32 13.96H41.3ZM24 44C14.18 44 6 36.9 4.32 27.56C5.48 26.6 8.8 24.06 14.44 21.46C14.16 21.92 14 22.44 14 23.02C14 24.68 15.34 26.02 17 26.02C18.66 26.02 20 24.68 20 23.02C20 21.58 18.98 20.38 17.64 20.08C18.84 19.6 20.12 19.12 21.48 18.66C23.72 19.38 26.12 20.24 28.56 21.26C28.2 21.76 28 22.36 28 23.02C28 24.68 29.34 26.02 31 26.02C32.42 26.02 33.62 25.04 33.92 23.7C37.06 25.28 40.24 27.12 43.28 29.3C40.96 37.78 33.18 44.02 23.98 44.02L24 44ZM33.74 34.98C33.38 35.64 32.7 36 32 36C31.68 36 31.34 35.92 31.04 35.76C31 35.76 27.82 34 24.02 34C20.22 34 17.02 35.74 16.98 35.76C16.02 36.28 14.8 35.94 14.26 34.98C13.72 34.02 14.06 32.8 15.04 32.26C15.2 32.16 19.14 30 24.02 30C28.9 30 32.84 32.16 33 32.26C33.96 32.8 34.32 34.02 33.78 34.98H33.74Z" fill="#111" />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_58">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card text="Emagrecedores" grad={false}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <g clipPath="url(#clip0_22_60)">
                    <path d="M35 22C27.832 22 22 27.832 22 35C22 42.168 27.832 48 35 48C42.168 48 48 42.168 48 35C48 27.832 42.168 22 35 22ZM35 26C36.758 26 38.402 26.508 39.788 27.384L27.382 39.79C26.506 38.402 25.998 36.76 25.998 35.002C25.998 30.04 30.036 26.002 34.998 26.002L35 26ZM35 44C33.242 44 31.598 43.492 30.212 42.616L42.618 30.21C43.494 31.598 44.002 33.24 44.002 34.998C44.002 39.96 39.964 43.998 35.002 43.998L35 44ZM4 26V35C4 39.962 8.038 44 13 44C14.444 44 15.818 43.67 17.088 43.02C18.074 42.522 19.278 42.906 19.78 43.892C20.282 44.874 19.894 46.08 18.91 46.584C17.096 47.512 15.052 48.002 12.998 48.002C5.832 48 0 42.168 0 35V13C0 5.832 5.832 0 13 0C20.168 0 26 5.832 26 13V18C26 19.106 25.104 20 24 20C22.896 20 22 19.106 22 18V13C22 8.038 17.962 4 13 4C8.038 4 4 8.038 4 13V22H18C19.104 22 20 22.894 20 24C20 25.106 19.104 26 18 26H4Z" fill="#ddd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_60">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card text="Produtividade" grad={true}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <g clipPath="url(#clip0_22_56)">
                    <path d="M48 24C48 37.24 37.24 48 24 48C10.76 48 0 37.24 0 24C0 10.76 10.76 0 24 0C25.46 0 26.94 0.14 28.36 0.4C29.44 0.6 30.16 1.64 29.96 2.72C29.76 3.8 28.72 4.52 27.64 4.32C26.46 4.1 25.22 4 24 4C12.98 4 4 12.98 4 24C4 35.02 12.98 44 24 44C35.02 44 44 35.02 44 24C44 22.78 43.88 21.56 43.68 20.36C43.48 19.28 44.2 18.24 45.28 18.04C46.38 17.84 47.4 18.56 47.6 19.64C47.86 21.06 48 22.54 48 24ZM25.72 12.12C26.82 12.28 27.82 11.52 27.98 10.42C28.14 9.32 27.38 8.32 26.28 8.16C25.52 8.06 24.76 8 24 8C15.18 8 8 15.18 8 24C8 32.82 15.18 40 24 40C32.82 40 40 32.82 40 24C40 23.24 39.94 22.48 39.84 21.72C39.68 20.62 38.68 19.86 37.58 20.02C36.48 20.18 35.72 21.18 35.88 22.28C35.96 22.84 36 23.42 36 24C36 30.62 30.62 36 24 36C17.38 36 12 30.62 12 24C12 17.38 17.38 12 24 12C24.58 12 25.16 12.04 25.72 12.12ZM21.34 21.02C22.16 20.28 22.24 19.02 21.5 18.2C20.76 17.38 19.5 17.3 18.68 18.04C16.98 19.56 16.02 21.74 16.02 24C16.02 28.42 19.6 32 24.02 32C26.3 32 28.46 31.02 29.98 29.34C30.72 28.52 30.64 27.26 29.82 26.52C29 25.78 27.74 25.86 27 26.68C26.24 27.52 25.16 28.02 24.02 28.02C21.82 28.02 20.02 26.22 20.02 24.02C20.02 22.88 20.5 21.8 21.36 21.04L21.34 21.02ZM24.6 20.58C23.82 21.36 23.82 22.62 24.6 23.4C25 23.8 25.5 23.98 26.02 23.98C26.54 23.98 27.04 23.78 27.44 23.4L36.86 13.98H42.04C42.58 13.98 43.08 13.76 43.46 13.4L47.46 9.4C48.04 8.82 48.2 7.96 47.9 7.22C47.6 6.48 46.86 5.98 46.06 5.98H42.06V2C42.06 1.2 41.58 0.46 40.82 0.16C40.06 -0.16 39.22 0.02 38.64 0.6L34.64 4.6C34.26 4.98 34.06 5.48 34.06 6.02V11.2L24.64 20.62L24.6 20.58Z" fill="#111" />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_56">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
              <Card text="Digestão" grad={false}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" className="w-8 h-8">
                  <g clipPath="url(#clip0_22_62)">
                    <path d="M34.4915 12.386C36.4794 10.2095 37.6996 7.44171 37.9655 4.506C38.0426 3.90065 37.9801 3.28567 37.783 2.70815C37.5858 2.13064 37.2591 1.6059 36.8279 1.1741C36.3966 0.742295 35.8723 0.414884 35.2951 0.216927C34.7178 0.0189697 34.1029 -0.0442852 33.4975 0.0320044C31.6766 0.175008 29.9083 0.711068 28.3145 1.60325C26.7208 2.49544 25.3393 3.72254 24.2655 5.2C23.5856 3.49874 22.6241 1.92407 21.4215 0.542004C21.0483 0.172062 20.5445 -0.0361402 20.019 -0.03759C19.4935 -0.0390398 18.9886 0.16638 18.6133 0.534257C18.2381 0.902134 18.0227 1.40291 18.0138 1.92832C18.0048 2.45373 18.203 2.96155 18.5655 3.342C20.5482 5.81086 21.7084 8.83839 21.8835 12H16.9995C12.3613 12.1417 7.96819 14.1155 4.78201 17.4891C1.59583 20.8627 -0.123849 25.3613 -0.000529775 30C-0.32253 41.2 11.2875 51.546 21.4995 46.77C22.2794 46.2741 23.1859 46.0139 24.1101 46.0206C25.0343 46.0273 25.9369 46.3008 26.7095 46.808C28.0152 47.5629 29.4915 47.9731 30.9995 48C51.5275 47.432 54.1315 17.164 34.4915 12.386ZM28.4455 6.336C29.9968 4.9794 31.9448 4.16008 33.9995 4C33.8355 6.05032 33.0173 7.99376 31.6655 9.544C30.1128 10.8998 28.1645 11.7189 26.1095 11.88C26.2719 9.82894 27.0911 7.88484 28.4455 6.336ZM30.9995 44C30.1181 43.9661 29.2607 43.7035 28.5115 43.238C27.1386 42.4451 25.5848 42.0187 23.9995 42C22.4985 42.0349 21.0298 42.4424 19.7255 43.186C12.0095 46.522 3.79947 38.282 3.99947 30C3.87613 26.4221 5.17441 22.9408 7.61048 20.3174C10.0465 17.6939 13.4222 16.1417 16.9995 16H30.9995C48.1995 16.642 48.1995 43.364 30.9995 44Z" fill="#ddd" />
                  </g>
                  <defs>
                    <clipPath id="clip0_22_62">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Card>
            </div>
          </div>
        </Section>
        <Section className="py-6 sm:py-12 px-4 lg:px-0" classNameS="bg-zinc-600">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div> */}
          <div className="flex flex-col items-center gap-4 z-10 w-full">
            <h2 className="text-2xl sm:text-3xl text-zinc-50 font-bold">Como funciona o <span className="text-emerald-400">Protocolo Faxina Biológica</span></h2>
            <Map />
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
        <Section className="" classNameS="py-6 sm:py-12 my-6 sm:my-12 bg-zinc-600 px-4 lg:px-0">
          <h2 className="text-xl sm:text-3xl font-bold text-center text-grad sm:max-w-4xl">A última “direção” que você precisará seguir na sua vida! Agende sua consulta para viver com energia e nunca mais depender de remédios.</h2>
        </Section>
        <Section className="py-6 sm:py-12 px-4 lg:px-0">
          <img src="./images/laiz2.png" alt="" className="sm:hidden block rounded-xl mb-8" />
          <div className="flex flex-col gap-8 z-10">
            <h2 className="text-zinc-950 font-semibold text-2xl sm:text-3xl">Nutrição consciente: Desvendando os Segredos da Individualidade Bioquímica</h2>
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
      </main>
      <footer className="pb-12">
        <div id="_forms_3" className={`_form_3 px-4`}></div>
        <div className="px-4 w-full sm:px-0 flex justify-center">
          <img src="./images/logo2.png" alt="" className="w-56 mt-6" />
        </div>
      </footer>
    </div>
  )
}