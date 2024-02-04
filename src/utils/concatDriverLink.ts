// `https://docs.google.com/uc?id=${id}`;
// `https://drive.usercontent.google.com/download?id=${id}&authuser=0`;
// `https://drive.google.com/file/d/${id}/view`;
// 'https://drive.google.com/thumbnail?id=xxxxxxx&sz=w1000';
export default function concatDriverLink(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
}
