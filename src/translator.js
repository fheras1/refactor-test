"use strict";

var Translate = require('@google-cloud/translate');
var TranslateService = {};
var translate = new Translate({
  keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (content, targetLang)=> {
    return translate 
      .translate( content, targetLang )
      .then(results => results[0])
      .catch(err => err);
};
module.exports = TranslateService;
