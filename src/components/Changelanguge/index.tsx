import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import assets from './imports';
import { Container } from './styles';

export default function ChangeLanguge() {
  const { i18n } = useTranslation();
  console.log(i18n);
  const languageStarted = i18n.language;
  const [languageFlag, setLanguageFlag] = useState(languageStarted);

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
    setLanguageFlag(value);
  };

  const { brasilIcon, usaIcon } = assets;
  const flagsList = {
    pt: brasilIcon,
    en: usaIcon,
  };
  return (
    <Container>
      <label htmlFor="language">
        <img
          src={flagsList[languageFlag as keyof typeof flagsList]?.url}
          alt="language flag"
          title="language flag"
        />
      </label>
      <select
        onChange={(e) => handleChangeLanguage(e.target.value)}
        id="language"
        name="language"
      >
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </select>
    </Container>
  );
}
