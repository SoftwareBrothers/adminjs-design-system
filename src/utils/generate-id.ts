declare global {
  interface Window {
    AdminJS?: {
      [key: string]: number,
    };
  }
}

const generateId = (key: string): string => {
  const accessKey = `UNIQUE_KEY_${key}`
  window.AdminJS = window.AdminJS || {}
  window.AdminJS[accessKey] = (Number.parseInt(window.AdminJS[accessKey] as any, 10) || 0) + 1
  return [accessKey, window.AdminJS[accessKey]].join('_')
}

export default generateId
