const dataBase = require("../DB/config")
module.exports = {
    async create(req, res){
        try{
            console.log("***********")
            let sendID = req.params.teste1
            let sendString = req.params.teste2
            console.log(sendID, sendString)
            const db = await dataBase()
            
            await db.run(`INSERT INTO testeTable (
                attOne,
                attTwo
            ) VALUES (
                ${sendID},
                "${sendString}"
            )`)
            
            await db.close()
            res.redirect('/')


        }catch(e){
            console.log(e)
            res.status(500).json({e})
        }
    },
    async select(req, res){
        try{
            let searchID = req.params.teste1
            const db = await dataBase()
            const resDB = await db.all(`SELECT * FROM testeTable
            WHERE attOne = ${searchID}`)
            await db.close()
            res.render('index', {resObj: resDB,} )
            console.log(resDB)
            

        }catch(e){
            console.log(e)
            res.status(500).json({e})

        }
    },
    async renderEdit(req, res){
        try{
            let editID = req.params.teste1
            const db = await dataBase()
            const resDB = await db.all(`SELECT * FROM testeTable
            WHERE attOne = ${editID}`)
            await db.close()
            res.render('edit', {resObj: resDB,} )
            console.log(resDB)

        }catch(e){
            console.log(e)
            res.status(500).json({e})
        }
    },
    async edit(req, res){
        try{
            let id = req.params.teste1
            let editID = req.body.attONE
            let editString = req.body.attTWO
            console.log(editID, editString)
            const db = await dataBase()
            await db.all(`UPDATE testeTable SET attOne= ${editID}, attTwo= '${editString}' WHERE attOne=${id}`)
            await db.close()
            res.redirect('/')
            console.log(editID, editString)


        }catch(e){
            console.log(e)
            res.status(500).json({e})
        }
    },
    async remove(req, res){
        try{
            let deleteID = req.params.teste1
            const db = await dataBase()
            await db.all(`DELETE from testeTable WHERE attOne=${deleteID};`)
            await db.close()
            res.redirect('/')


        }catch(e){
            console.log(e)
            res.status(500).json({e})
        }
    }
}