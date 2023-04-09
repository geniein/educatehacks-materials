const express = require('express')
const router = express.Router()
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

router.post("/translate", async( req, res )=>{
    const text = req.body.text;
    const target = req.body.target;
    let result = await translateText(text,target);
    console.log(result);
    res.json(result);
})

/**
 * TODO(developer): Uncomment the following lines before running the sample.
 */
// const text = 'The text to translate, e.g. Hello, world!';
// const target = 'The target language, e.g. ru';

async function translateText(text, target) {      
    let result = ""
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    translations.forEach((translation, i) => {
        console.log(`${text[i]} => (${target}) ${translation}`);
        result += translation
    });
    return result;
}

module.exports = router