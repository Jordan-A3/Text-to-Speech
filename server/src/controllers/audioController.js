const knex = require('../database')

const path = require('path')

const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const data = require('../apiKeys.json');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: data.apikey,
  }),
  serviceUrl: data.url
});


module.exports = {
    async show (req, res, next){
        try {
            const { id } = req.params
            console.log(id)

            const thisComment = await knex('comments').where('id', id).first()
            console.log(thisComment)

            const synthesizeParams = {
                text: thisComment.comment,
                accept: 'audio/wav',
                voice: 'pt-BR_IsabelaV3Voice'
              };
              
              await textToSpeech.synthesize(synthesizeParams)
                .then( response => {
                  return textToSpeech.repairWavHeaderStream(response.result);
                })
                .then( buffer => {
                   fs.writeFileSync(`public/comment-audio-${id}.wav`, buffer);
                })
                .catch(err => {
                  console.log('error:', err);
                });
            
                
            return res.sendFile(path.join(__dirname, '..', '..', `/public/comment-audio-${id}.wav`));
        } catch (error) {
            next(error)
        }


    },
}