// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  mentor: require("../assets/mentor.jpg"),
  me: require("../assets/me.jpg"),
  giveItToMe: require("../assets/give-it-to-me.gif"),
  crying1: require("../assets/crying-1.gif"),
  crying2: require("../assets/crying-2.gif"),
  crying3: require("../assets/crying-3.gif"),
  cryingMoney: require("../assets/crying-money.gif"),
  codementorLogo: require("../assets/codementor-logo.png"),
  tesoura: require("../assets/tesoura.png"),
  internet: require("../assets/internet.gif"),
  english: require("../assets/english.gif"),
  skills: require("../assets/skills.gif"),
  equipment: require("../assets/equipment.gif"),
  application1: require("../assets/application-1.png"),
  application2: require("../assets/application-2.png"),
  application3: require("../assets/application-3.png"),
  application4: require("../assets/application-4.png"),
  application5: require("../assets/application-5.png"),
  application6: require("../assets/application-6.png"),
  application7: require("../assets/application-7.png"),
  application8: require("../assets/application-8.png"),
  freedom: require("../assets/freedom.gif"),
  accent: require("../assets/accent.gif"),
  needs: require("../assets/needs.png"),
  digitalNomad: require("../assets/digital-nomad.jpg"),
  twitter: require("../assets/twitter.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="bar">
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Sem chefe
            </Heading>
            <Heading size={1} fit caps>
              Tornando-se independente como mentor online no
            </Heading>
            <Heading size={1} fit caps textColor="black">
             Codementor
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} caps textColor="primary" textFont="primary">
              Eu
            </Heading>

            <Layout textSize="1px">
              <Fill>
                <Appear><Text textColor="white">
                  Programo desde 2007
                </Text></Appear>

                <Appear><Text textColor="white" margin="20px 0">
                  Trabalho com Rails (Full Stack) desde 2010
                </Text></Appear>

                <Appear><Text textColor="white" margin="20px 0">
                  Trabalhei em startups entre 2012 e 2015
                </Text></Appear>
              </Fill>

              <Fill style={ { padding: "80px" } }>
                <Image src={images.me.replace("/", "")} height="293px" style={ { borderRadius: "50%" } }/>
              </Fill>

              <Fill>
                <Appear><Text textColor="white">
                  Comecei com o Codementor em 2015 nas horas livres
                </Text></Appear>

                <Appear><Text textColor="white" margin="40px 0">
                  Mentor e freelancer full-time a partir de 2016
                </Text></Appear>
              </Fill>
            </Layout>

            <Heading fit textColor="primary">
              Marcos a.k.a. Oddly Functional
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit textColor="primary">
              @oddlyfunctional
            </Heading>

            <Heading fit textColor="white">
              #RioDevDayCodementor
            </Heading>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              O que é um
            </Heading>
            <Heading size={1} fit caps>
              Mentor?
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.mentor.replace("/", "")}>
          </Slide>

          <Slide transition={["fade"]} bgImage={images.mentor.replace("/", "")} bgDarken={0.75}>
            <BlockQuote>
              <Quote>
                men·tor
                <ol>
                  <ListItem>
                    Pessoa que, pela sua sabedoria ou experiência, ajuda outra como guia ou conselheiro.
                  </ListItem>
                  <ListItem>
                    Pessoa que inspira outras.
                  </ListItem>
                </ol>
              </Quote>
              <Cite>Dicionário Priberam da Língua Portuguesa</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps textColor="black">
              Por que ser um
            </Heading>
            <Heading caps textColor="white">
              mentor online?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
          <ul>
            <li>
              Sobre dinheiro, perguntar:
              <ul>
                <li>quem trabalha atualmente</li>
                <li>quem tem ideia de seu valor/hora</li>
                <li>quantos acham que um salário de R$30/h, R$5040/mês bom</li>
              </ul>
            </li>
            <li>Sobre validação, perguntar quem sente que sabe o suficiente</li>
          </ul>">
            <List>
              <Appear><ListItem>Você faz seu horário ⏰</ListItem></Appear>
              <Appear><ListItem>Aproveitar enquanto espera</ListItem></Appear>
              <Appear><ListItem>Ganhar acima da média nacional</ListItem></Appear>
              <Appear><ListItem>Treinar inglês</ListItem></Appear>
              <Appear><ListItem>Treinar negociação</ListItem></Appear>
              <Appear><ListItem>Contato com diversas áreas e tech stacks</ListItem></Appear>
              <Appear><ListItem>Acompanhar tendências da indústria</ListItem></Appear>
              <Appear><ListItem>Realização pessoal e validação</ListItem></Appear>
              <Appear><ListItem><b>Sensação de segurança</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit>Em Dezembro de 2015, a startup em que eu trabalhava faliu.</Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image width="50%" src={images.crying1} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image width="50%" src={images.crying2} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image width="50%" src={images.crying3} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Dependendo da reação da platéia, não explique nada, senão seja curto e breve">
            <Image width="50%" src={images.cryingMoney} />
          </Slide>

          <Slide transition={["fade"]} bgColor="black" notes="Hierarquia de necessidades de Maslow, 10º psicólogo mais citado do século XX, 'enfatizava a importância de focar nas qualidades positivas das pessoas ao invés de tratá-las como sacos de sintomas'">
            <Heading caps fit>Nunca subestime o poder da sensação de segurança</Heading>
            <Image width="100%" src={images.needs} />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps textColor="black">
              Essa carreira
            </Heading>
            <Heading caps textColor="white">
              Tem futuro?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Ser *breve* sobre mentoria vs ensino formal">
            <List textColor="primary">
              <Appear><ListItem>Há uma tendência mundial de de-centralização</ListItem></Appear>
              <Appear><ListItem>E-learning está crescendo</ListItem></Appear>
              <Appear><ListItem>Mentoria não substitui ensino formal, complementa</ListItem></Appear>
              <Appear><ListItem>Cada vez mais pessoas com mais acesso à internet</ListItem></Appear>
              <Appear><ListItem><b>As oportunidades só vão aumentar</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Image width="50%" src={images.giveItToMe} />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="white">
            <Image src={images.codementorLogo} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <List textColor="primary">
              <Appear><ListItem>Especialistas em programação e design</ListItem></Appear>
              <Appear><ListItem>Diversos serviços</ListItem></Appear>
              <Appear><ListItem>Diversos tipos de cliente</ListItem></Appear>
              <Appear><ListItem>Você define seu valor/hora</ListItem></Appear>
              <Appear><ListItem>Você é pago semanalmente, em dólar</ListItem></Appear>
              <Appear><ListItem>A taxa da plataforma varia entre 20% e 10%</ListItem></Appear>
              <Appear><ListItem><b>Você é avaliado por seus clientes, e os avalia também</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              Você vai
            </Heading>
            <Heading caps fit textColor="white">
              Precisar de:
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit>
              Tesoura sem ponta
            </Heading>
            <Image src={images.tesoura} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Seja BREVE">
            <Heading fit>
              Especialidades
            </Heading>
            <Image src={images.skills} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit>
              Boa conexão com a internet
            </Heading>
            <Image src={images.internet} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit>
              Inglês fluente
            </Heading>
            <Image src={images.english} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="Inglês é interface de comunicação">
            <Heading fit>
              Entender sotaques
            </Heading>
            <Image src={images.accent} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading fit>
              Bom equipamento de som
            </Heading>
            <Image src={images.equipment} />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              Antes de
            </Heading>
            <Heading caps fit textColor="white">
              Se jogar
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <List textColor="primary">
              <Appear><ListItem>Junte uma grana</ListItem></Appear>
              <Appear><ListItem>Comece a ajudar as pessoas</ListItem></Appear>
              <Appear><ListItem>Crie uma micro-empresa</ListItem></Appear>
              <Appear><ListItem>Arrume um contador</ListItem></Appear>
              <Appear><ListItem>Crie uma conta PayPal vinculada à sua conta de banco</ListItem></Appear>
              <Appear><ListItem>Faça a application para o Codementor</ListItem></Appear>
              <Appear><ListItem>Não largue o emprego ainda!</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="white">
              Cadastro
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application1.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application2.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application3.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application4.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application5.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application6.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application7.replace("/", "")}>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.application8.replace("/", "")}>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              O que fazer quando
            </Heading>
            <Heading caps fit textColor="white">
              Se está começando?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <List textColor="primary">
              <Appear><ListItem>Seja pouco exigente (por enquanto)</ListItem></Appear>
              <Appear><ListItem>Peça (educadamente) por avaliações</ListItem></Appear>
              <Appear><ListItem>Você é um mentor, não um solucionador de problemas</ListItem></Appear>
              <Appear><ListItem>Over-deliver</ListItem></Appear>
              <Appear><ListItem>Cuide bem de seus clientes regulares</ListItem></Appear>
              <Appear><ListItem>Acostume-se com ambientes e ferramentas diferentes</ListItem></Appear>
              <Appear><ListItem><b>Seja honesto</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              Além do
            </Heading>
            <Heading caps fit textColor="white">
              Codementor
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <List textColor="primary">
              <Appear><ListItem>Networking</ListItem></Appear>
              <Appear><ListItem>Portfolio</ListItem></Appear>
              <Appear><ListItem><b>Confiança</b></ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              Pra onde
            </Heading>
            <Heading caps fit textColor="white">
              Vou daqui
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Image width="100%" src={images.digitalNomad} />
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="black">
              Ser mentor
            </Heading>
            <Heading caps fit textColor="white">
              Me Salvou
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>
              E esse foi apenas o começo
            </Heading>
          </Slide>

          <Slide transition={["zoom"]} bgImage={images.freedom.replace("/", "")}>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit textColor="white">
              Ferramentas
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <List textColor="primary">
              <Appear><ListItem>Zoom (<Link textColor="white" href="https://zoom.us">https://zoom.us</Link>)</ListItem></Appear>
              <Appear><ListItem>tmate (<Link textColor="white" href="https://tmate.io">https://tmate.io</Link>)</ListItem></Appear>
              <Appear><ListItem>Trello (<Link textColor="white" href="https://trello.com">https://trello.com</Link>)</ListItem></Appear>
              <Appear><ListItem>Contabilizei (<Link textColor="white" href="https://www.contabilizei.com.br">https://www.contabilizei.com.br</Link>)</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size={4} fit textColor="black">
              <Link href="https://twitter.com/oddlyfunctional"><Image src={images.twitter} width="1em" margin="0" /> @oddlyfunctional</Link>
            </Heading>

            <Heading size={4} fit textColor="black">
              <Link href="http://www.oddlyfunctional.com/codementor-talk">http://www.oddlyfunctional.com/codementor-talk</Link>
            </Heading>

            <Heading size={4} fit textColor="black">
              <Link href="https://www.codementor.io/mrodrigues">https://www.codementor.io/mrodrigues</Link>
            </Heading>

            <Heading size={4} fit textColor="white" lineHeight={"40px"}>
              <Link href="https://www.codementor.io/i/k253lmkh6">https://www.codementor.io/i/k253lmkh6</Link>
            </Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps textColor="white">
              ?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
