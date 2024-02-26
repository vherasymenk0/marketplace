export const generateId = () => {
  return Math.random().toString(36).slice(2, 9)
}

export const getUrlFromFile = (file: File) => {
  return URL.createObjectURL(file)
}

export const humanFileSizeFormat = (size: number) => {
  const i = Math.floor(Math.log(size) / Math.log(1024))

  return `${(size / 1024 ** i).toFixed(0)} ${['B', 'KB', 'MB', 'GB', 'TB'][i]}`
}
