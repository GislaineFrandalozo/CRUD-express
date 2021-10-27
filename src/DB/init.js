const dataBase = require('./config')
const initDB = {
    async init(){
        const db = await dataBase()
        await db.exec(`CREATE TABLE teste_table (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            att_one INTEGER,
            att_two TEXT
            )`)
        await db.close()
    }
}
initDB.init();