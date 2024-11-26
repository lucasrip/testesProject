import removeNotRequiredValues from "./removeNotRequiredValues";

const baseUrlCase = {
  development: '',
  production: 'https://raw.githubusercontent.com/lucasrip/testesProject/main',
};
export default async function importFile(fileUrl: string) {
  const codeStatus = document.URL.includes('http://localhost')
    ? 'development'
    : 'production';
  const fileCase = codeStatus as keyof typeof baseUrlCase;
  const urlFile = baseUrlCase[fileCase] + fileUrl;

  try {
    const response = await fetch(urlFile);
    const fileContent = await response.text();
    const result = removeNotRequiredValues(fileContent); 
    return result;
  } catch (error) {
    return error;
  }
}
