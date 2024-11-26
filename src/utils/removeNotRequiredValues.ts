const notRequiredItes = [
  /^export default `|`\s*;?$|\r/gm,
  /\/\/# sourceMappingURL=.*$/gm,
];

export default function removeNotRequiredValues(
  content: string,
  values: string[] = []
) {
  let result = content;
  const valuesForRemove = [...notRequiredItes, ...values];

  for (const value of valuesForRemove) {
    result = result.replace(value, '');
  }
  return result;
}
