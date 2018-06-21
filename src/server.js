const translate = require('./translator')

const text = "quiero trabajar con los mejores"
const targetLang = 'en'

//console.log(translate);

translate.translateText(text, targetLang)
  .then((x)=>console.log(x))
  .catch((error)=>console.error(error))
bootsnipps