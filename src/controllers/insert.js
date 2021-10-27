const data_base = require("../DB/config")

module.exports = {
    async create(req, res){
        const db = await data_base()
        console.log(req)
       
        await db.run(`INSERT INTO teste_table (
            att_one,
            att_two
        ) VALUES(
            TESTE1,
            TESTE-1
        )`)
        console.log(db)
        await db.close()
        res.redirect(`/`)
    }
}