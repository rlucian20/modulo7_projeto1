function maior() {
  const campoA = parseFloat(document.getElementById('campoA').value)
  const campoB = parseFloat(document.getElementById('campoB').value)

  let avisoError = ''
  const mensagem = document.getElementById('avisoError')

  if (campoA < campoB) {
    avisoError = `O campo B ${campoB} é maior. Formulário válido!!`
    mensagem.classList.remove('invalid')
    mensagem.classList.add('valid')
  } else if (campoA > campoB) {
    avisoError = `O campo A ${campoA} é menor. Formulário inválido.`
    mensagem.classList.remove('valid')
    mensagem.classList.add('invalid')
  } else {
    avisoError = 'Os campos são iguais, formulário inválido.'
    mensagem.classList.remove('valid')
    mensagem.classList.add('invalid')
  }

  mensagem.innerHTML = avisoError
}
