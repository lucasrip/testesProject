import JSZip from 'jszip';
import { TdowloadAssets } from '../types/assets';

export default async function handleDowload(
  folderName: string,
  assetsArr: TdowloadAssets
) {
  const zip = new JSZip();

  for (let i = 0; i < assetsArr.length; i++) {
    const item = assetsArr[i];

    const conteudo = await import(/* @vite-ignore */ `${item.url}?raw`);
    const blob = new Blob([conteudo.default], {
      type: 'text/plain',
    });
    zip.file(`${item.name}.${item.type}`, blob);
  }

  const zipData = await zip.generateAsync({
    type: 'blob',
  });

  const link = document.createElement('a');
  link.href = URL.createObjectURL(zipData);
  link.download = `${folderName}.zip`;
  link.click();
}
