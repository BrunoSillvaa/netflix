function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg != 'string') {
        reject('Cai no Erro')
        return
      }

      resolve('Passei na Promise')
    }, tempo)
  })
}

async function getDados() {
  try {
    const res = await esperaAi('Teste', 5000)
    console.log(res)
  } catch {
    console.log("Erro")
  }
}

getDados()