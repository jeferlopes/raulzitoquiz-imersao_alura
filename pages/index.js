import styled from 'styled-components'
import db from './db.json'
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'
import { useRouter } from 'next/router'

const BackgroundImage = styled.div`
  background-image: url(${db.bg});
  flex: 1;
  background-size: cover;
  background-position: center;
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {

  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

    return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>Raulzito Quiz</title>
      <meta name="title" content="Raulzito Quiz" />
      <meta name="description" content="Sabe tudo sobre o grande Raul Seixas?
      Será mesmo?
      Encare o nosso Quiz, e mostre que você é a Mosca na Sopa, e viva a Sociedade Alternativa!" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta property="og:title" content="Raulzito Quiz" />
      <meta property="og:description" content="Sabe tudo sobre o grande Raul Seixas?
      Será mesmo?
      Encare o nosso Quiz, e mostre que você é a Mosca na Sopa, e viva a Sociedade Alternativa!" />
      <meta property="og:image" content="http://www.jeferlopes.com.br/quiz/thumb.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta property="twitter:title" content="Raulzito Quiz" />
      <meta property="twitter:description" content="Sabe tudo sobre o grande Raul Seixas?
      Será mesmo?
      Encare o nosso Quiz, e mostre que você é a Mosca na Sopa, e viva a Sociedade Alternativa!" />
      <meta property="twitter:image" content="http://www.jeferlopes.com.br/quiz/thumb.png" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <form onSubmit={function (infosdoEvento) {
                infosdoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submit por meio do react');
            }}
            >
              <input
                onChange={function (infosdoEvento) {
                  console.log(infosdoEvento.target.value);

                  // name = infosdoEvento.target.value;
                  setName(infosdoEvento.target.value);
                }}
              
              placeholder="Ei! Quem é você?" />
              <button type="submit" disabled={name.length === 0}> 
                Vamos! {name} Responda!
              </button>
            </form>
          </Widget.Content>
        </Widget>
        {/* <Widget> */}
          {/* <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content> */}
        {/* </Widget> */}
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/jeferlopes" />
    </QuizBackground>
  );
}