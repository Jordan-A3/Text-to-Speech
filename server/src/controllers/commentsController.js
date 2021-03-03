const knex = require('../database')
const fs = require('fs')
const path = require('path')

module.exports = {
    async index (req, res){
        const results = await knex('comments')

        return(
            res.json(results)
        )
    },

    async create (req, res, next){
        try {
            const { comment } = req.body

            await knex('comments').insert({
                comment
            })
            
            return res.status(201).send()
        } catch (error) {
            next(error)
        }

    },

    async delete (req, res, next){
        try {
            const { id } = req.params

            await knex('comments')
            .where({ id })
            .del()

            const filePath = path.join(__dirname, '..', '..', `/public/comment-audio-${id}.wav`);

            fs.unlink(filePath, (err) => {
                if (err) {
                  console.error(err)
                  return
                }
              
                //file removed
              })

            return res.send()
        } catch (error) {
            next(error)
        }
    }
}