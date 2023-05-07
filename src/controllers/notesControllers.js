const dataBase = require("../DB/config");
const note = require("../models/note");

module.exports = {

    async index(req, res) {
        try {
            const notes = await note.all();

            res.render('index', {
                 notes,
            });
        } catch (e) {
            console.log(e)
            res.status(500).json({ e })
        }
    },


    async create(req, res) {
        res.render('create_note');
    },


    async store(req, res) {
        console.log(req);
    },


    async show(req, res) {
        
        try {
            const note_id = req.params.id;
            const notes = await note.where("id", note_id);
            const current_note = notes[0];
         
            res.render('show_note', {current_note});
        } catch (e) {
            console.log(e)
            res.status(500).json({ e })
        }
    },


    async edit(req, res) {

       
        try {
            const note_id = req.params.id;
            const notes = await note.where("id", note_id);
            const current_note = notes[0];
         
            res.render('edit_note', {current_note});
        } catch (e) {
            console.log(e)
            res.status(500).json({ e })
        }
    },


    async update(req, res) {
        try {
            const note_id = req.params.id;
            const new_data = req.body;

            new_data['id'] = note_id;
            await note.update(new_data);

            res.status(200).json({new_data});

        } catch (e) {
            console.log(e)
            res.status(500).json({ e })
        }
    },


    async destroy(req, res) {
        console.log(req);
    },

}