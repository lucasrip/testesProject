import removeNotRequiredValues from './removeNotRequiredValues';

export default async function importFile(fileUrl: string) {
  const productionUrl =
    'https://raw.githubusercontent.com/lucasrip/testesProject/main';
  const localCase = document.URL.includes('http://localhost')
    ? 'development'
    : 'production';
  const fileCaseResult =
    localCase === 'production' ? productionUrl + fileUrl : fileUrl;

  try {
    const response = await fetch(fileCaseResult);
    const fileContent = await response.text();
    const result = removeNotRequiredValues(fileContent);
    return result;
  } catch (error) {
    return error;
  }
}
