import ComponentContainer from '../../components/ComponentContainer';
import { TranslateContainer } from './styles';
import { useTranslation } from 'react-i18next';
import projectFiles from './componentContainerProps/projectFiles';
import sections from './componentContainerProps/sections';
import references from './componentContainerProps/references';
import assets from './imports';
import ChangeLanguage from '../../components/Changelanguge';

export default function Translate() {
  const { t: translate } = useTranslation();

  return (
    <ComponentContainer
      projectFiles={projectFiles}
      sections={sections}
      references={references}
      assets={assets}
      folderDowloadName="TranslateTeste"
    >
      <TranslateContainer id="TranslateTeste">
        <ChangeLanguage />
        <h1>{translate('translateText.text')}</h1>
      </TranslateContainer>
    </ComponentContainer>
  );
}
