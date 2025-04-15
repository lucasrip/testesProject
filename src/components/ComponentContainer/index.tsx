import { Iheader } from '../../types/header';
import { Ihiliter } from '../../types/hiligter';
import Header from '../Header';
import { Container } from './styles';
import References from '../References';

import { Treferences } from '../../types/references';
import SectionsMenu from '../SectionsRowMenu';
import Tsections from '../../types/sections';

interface Props extends Iheader, Ihiliter {
  sections?: Tsections;
  children: JSX.Element;
  references?: Treferences;
  referencesDescriprion?: string;
}

export default function ComponentContainer({
  redirect = '/',
  projectFiles,
  assets,
  children,
  references,
  sections,
  folderDowloadName,
  referencesDescriprion,
}: Props) {
  return (
    <Container>
      <Header
        redirect={redirect}
        projectFiles={projectFiles}
        assets={assets}
        folderDowloadName={folderDowloadName}
      />
      <SectionsMenu sections={sections} />

      {children}
      <References links={references} description={referencesDescriprion} />
    </Container>
  );
}
