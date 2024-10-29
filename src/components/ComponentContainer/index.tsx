import { Iheader } from '../../types/header';
import Ihiliter from '../../types/hiligter';
import Header from '../Header';
import { Container } from './styles';
import References from '../References';

import { Treferences } from '../../types/references';
import SectionsMenu from './../SectionsMenu/index';
import { sectionsMenu } from './../../types/sectionsMenu';

interface Props extends Iheader, Ihiliter, sectionsMenu {
  children: JSX.Element;
  references?: Treferences;
  referencesDescriprion?: string;
}

export default function ComponentContainer({
  redirect,
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
      <div>
        <div>
          {children}
          <References links={references} description={referencesDescriprion} />
        </div>
        {<SectionsMenu sections={sections} />}
      </div>
    </Container>
  );
}
