const dataBase = require("../DB/config")
module.exports = {

    async index(req, res){
        try{



            res.render('index', {notes: []});
        }catch(e){
            console.log(e)
            res.status(500).json({e})
        }
    },


    async create(req, res){
        res.render('create_note');
    },


    async store(req, res){
        console.log(req);
    },


    async show(req, res){
        res.render('show_note');
    },


    async edit(req, res){
        res.render('edit_note');
    },


    async update(req, res){
        console.log(req);
    },


    async destroy(req, res){
        console.log(req);
    },

}