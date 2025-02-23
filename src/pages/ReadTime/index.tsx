import ComponentContainer from '../../components/ComponentContainer';
import { ReadTimeContainer } from './styles';
import { useEffect, useRef, useState } from 'react';
import { secondsToMinutes } from 'date-fns/secondsToMinutes';
export default function ReadTime() {
  const elementRef = useRef<HTMLElement>(null);
  const [readTiming, setReadTiming] = useState('0');
  function readingRate() {
    const text = elementRef?.current?.textContent || '';

    const wordCount = text.split(' ').length || 0;
    const readingRateInSeconds = (wordCount * 60) / 200;
    return readingRateInSeconds;
  }

  useEffect(() => {
    const timinInMinutes = secondsToMinutes(readingRate());
    const timingFormat = ' ' + timinInMinutes + ' minutes ';
    setReadTiming(timingFormat);
  }, []);
  return (
    <ComponentContainer
      redirect="/"
      projectFiles={[
        {
          name: 'index',
          url: '/src/pages/ReadTime/index.tsx?raw',
          type: 'tsx',
        },
        {
          name: 'styles',
          url: '/src/pages/ReadTime/styles.ts',
          type: 'ts',
        },
      ]}
      sections={[
        { id: 'readTime', name: 'readTime' },
        { id: 'references', name: 'references' },
      ]}
      references={[
        {
          name: 'artigo sobre o teste',
          url: 'https://medium.com/@lucas.galrao0/desenvolvendo-algoritmo-para-calcular-tempo-de-leitura-em-uma-p%C3%A1gina-web-4b779c521315',
        },
      ]}
      folderDowloadName="ReadTime"
      referencesDescriprion="o texto usado neste teste é meramente usado para o teste não ha nenhuma pesquisa opinião ou fato que seja confirmado"
    >
      <ReadTimeContainer id="readTime">
        <main id="content" ref={elementRef}>
          <h1>
            350 empresas brasileiras já vazaram dados de usuários na internet em
            2020
          </h1>
          {parseInt(readTiming) > 0 && (
            <p>
              timing to read
              <strong>{readTiming}</strong>
            </p>
          )}
          <h2>13/09/2020 às 12:00</h2>
          <span>
            <p>
              Em meio à pandemia do novo coronavírus, as empresas se viram
              forçadas a migrar para o modelo de home office, e seus
              profissionais, que antes trabalhavam por trás de toda a camada de
              segurança do escritório, como firewall e antivírus, agora estão
              trabalhando direto de casa, com um nível de segurança inferior ao
              ambiente corporativo. O resultado: ataques cibernéticos em massa.
              Segundo a Kaspersky, entre fevereiro e abril, ataques direcionados
              a ferramentas que permitem acesso remoto aumentaram 333%.
            </p>
            <p>
              “A vulnerabilidade das empresas ficou ainda maior devido ao acesso
              remoto dos sistemas via home office. As pessoas, muitas vezes,
              trabalham com um computador e ainda compartilham o uso do aparelho
              com outras pessoas da casa. Todo esse movimento se torna um risco
              para as redes das organizações”, explica Caio Telles, CEO da
              BugHunt, primeira plataforma brasileira de Bug Bounty, programa de
              recompensa por identificação de falhas. “O crescimento do trabalho
              remoto permite que servidores estejam configurados incorretamente,
              atraindo cibercriminosos e facilitando invasões”, alerta.
            </p>
            <p>
              Esse movimento refletiu na plataforma, que, em seis meses, conta
              com a participação de mais de 2.000 especialistas em segurança e
              já identificou mais de 350 vulnerabilidades em empresas
              brasileiras. Com o objetivo de democratizar o acesso à segurança e
              promover a união entre organizações e profissionais de segurança,
              a BugHunt acompanha de perto as falhas e vulnerabilidades de
              sistemas e soluções ao reunir especialistas em busca de
              reconhecimento e instituições comprometidas com a segurança da
              informação e privacidade de seus clientes.
            </p>
            <p>
              Durante a pandemia, as vulnerabilidades mais encontradas pelos
              especialistas na plataforma foram falhas que expõem dados de
              usuários. “Isso é alarmante, tendo em vista a vigência da nova Lei
              Geral de Proteção de Dados (LGPD), que poderá acarretar multas
              milionárias a empresas que tenham dados de clientes vazados”,
              destaca Telles.
            </p>
          </span>
          <span>
            <h1>Bug Bounty</h1>
            <p>
              Nesse período, a BugHunt também observou um aumento no interesse
              por programas de Bug Bounty, tanto por especialistas, quanto por
              empresas. “As empresas estão interessadas pois foram forçadas a
              operar de forma online, o que traz a necessidade de identificar e
              tratar bugs em sistemas”, explica o executivo. “Já o especialista
              enxergou esse momento como uma possibilidade de aumentar o
              conhecimento na área de segurança, complementar a renda e utilizar
              uma plataforma nacional de recompensas”, completa.
            </p>
            <p>
              Os especialistas cadastrados na plataforma identificam bugs em
              sistemas, aplicativos, websites e dispositivos físicos, como
              totens e máquinas de cartão. A empresa que contratou o serviço
              avalia os relatórios de vulnerabilidades enviados pela comunidade
              e, se aprovados, o pesquisador recebe sua recompensa. Um
              especialista pode ganhar até R$ 10 mil pela descoberta de cada
              vulnerabilidade.{' '}
            </p>
            <p>
              O foco é identificar falhas que possam representar riscos às
              empresas, como vazamento de dados, que impacta na LGPD; invasão;
              ataques por ransomware; ou outro risco que traga prejuízo
              financeiro, operacional ou de imagem. Em média, as companhias
              levam 196 dias para perceber que foram atacadas.
            </p>
          </span>
          <span>
            <h1>Cenário brasileiro</h1>
            <p>
              Segundo Telles, no Brasil, terceiro país que mais sofre tentativas
              de ataques virtuais no mundo, os cibercriminosos se diferem de
              hackers de outros países pois, além do entendimento técnico,
              possuem conhecimento das regras de negócios, além de muita
              criatividade. “Eles encontram não apenas vulnerabilidades
              técnicas, mas também falhas de processos das empresas”, pontua.{' '}
            </p>
            <p>
              Por essas razões, a cibersegurança se faz cada vez mais
              necessária. “É preciso simplificar sistemas e integrar
              cibersegurança e testes nos processos de desenvolvimento. Além
              disso, é primordial conscientizar os colaboradores com o objetivo
              de criar uma cultura de segurança”, explica. “Agora, com mais
              pessoas trabalhando em casa, também é essencial que as empresas
              adotem medidas para proteger seus funcionários remotos, além de
              seus dispositivos e redes domésticas”, completa.
            </p>
          </span>
        </main>
      </ReadTimeContainer>
    </ComponentContainer>
  );
}
