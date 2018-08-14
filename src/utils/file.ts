export const readAsDataURL = ({ target: { files } }: { target: { files: any } }) => {
  return new Promise((resolve, reject) => {
    const file = files[0]
    if (!file) {
      return reject('file not loaded. check the debugger')
    }

    const reader = new FileReader()
    reader.addEventListener('load', () => resolve({ result: reader.result }))
    reader.addEventListener('error', (error) => reject(error))

    reader.readAsDataURL(file)
  })
}
