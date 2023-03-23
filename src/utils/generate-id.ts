const generateId = (key: string): string => {
  const accessKey = `UNIQUE_KEY_${key}`;

  (window as any).AdminJS = (window as any).AdminJS || {};
  // eslint-disable-next-line max-len
  (window as any).AdminJS[accessKey] = (Number.parseInt((window as any).AdminJS[accessKey] as any, 10) || 0) + 1
  return [accessKey, (window as any).AdminJS[accessKey]].join('_')
}

export default generateId
