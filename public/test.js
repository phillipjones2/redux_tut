const HTMLChanger = (() => {
  const contents = 'Hola'

  const changeHTML = (word) => {
    const element = document.getElementById('landingH1')
    element.innerHTML = word || contents
  }

  return {
    callChangeHTML: (word) => {
      changeHTML(word)
      console.log(contents)
    }
  }
})()

HTMLChanger.callChangeHTML()
console.log(HTMLChanger.contents)
