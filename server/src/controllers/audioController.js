const knex = require('../database')

const path = require('path')

const fs = require('fs');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: 'FCzxQiWS4CERpIgLNOF8S_eFpUWqKefvYI2OHsg77k05',
  }),
  serviceUrl: 'https://api.us-south.text-to-speech.watson.cloud.ibm.com/instances/5e956e06-0a22-4689-bfcf-6677649e5430',
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