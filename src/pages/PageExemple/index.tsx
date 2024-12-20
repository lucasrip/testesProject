import ComponentContainer from '../../components/ComponentContainer';
import { PageExempleContainer } from './styles';


export default function PageExemple() {
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
      <PageExempleContainer id="readTime">
        <h1>pagina de exemplo</h1>
      </PageExempleContainer>
    </ComponentContainer>
  );
}
