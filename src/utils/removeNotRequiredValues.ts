const defaultNotRequiredValues = [
  /^export default `|`\s*;?$|\r/gm,
  /\/\/# sourceMappingURL=.*$/gm,
];

export default function removeNotRequiredValues(
  content: string,
  externalNotRequiredValues: string[] = []
) {
  let result = content;
  const valuesForRemove = [
    ...defaultNotRequiredValues,
    ...externalNotRequiredValues,
  ];

  for (const value of valuesForRemove) {
    result = result.replace(value, '');
  }

  return result;
}
