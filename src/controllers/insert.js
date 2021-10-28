const dataBase = require("../DB/config")
module.exports = {
    async create(req, res){
        try{
            console.log("***********")
            let sendID = req.params.teste1
            let sendAtt = req.params.teste2
            console.log(sendID, sendAtt)
            const db = await dataBase()
            console.log(db.all(`SELECT * FROM testeTable`))
            await db.run(`INSERT INTO testeTable (
                attOne,
                attTwo
            ) VALUES (
                ${sendID},
                ${sendAtt.toString()}
            )`)
            console.log("??????????2222")
            await db.close()
            res.redirect(``)

        }catch(e){
            console.log(e)
        }
    }
}