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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
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

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Layout>
              <Fill>
                <Link href="https://twitter.com/oddlyfunctional" textColor="primary">@oddlyfunctional</Link>
              </Fill>

              <Fill>
                <Heading size={2} caps textColor="primary" textFont="primary">
                  Eu
                </Heading>
              </Fill>

              <Fill>
                <Link href="mailto:hi@oddlyfunctional.com" textColor="primary">hi@oddlyfunctional.com</Link>
              </Fill>
            </Layout>

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
                <Image src={images.me.replace("/", "")} margin="0px auto 40px" height="293px"/>
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
          </Slide>

          <Slide transition={["slide"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
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

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps textColor="black">
              Por que ser um mentor?
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
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

          <Slide transition={["slide"]} bgColor="black">
            <Image width="50%" src={images.cryingMoney} />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading caps fit>Nunca subestime o poder da sensação de segurança</Heading>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="black">
            <Image width="50%" src={images.giveItToMe} />
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Codementor</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>

          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>

          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>

          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
