const dataBase = require('./config')
const initDB = {
    async init(){
        const db = await dataBase()
        await db.exec(`CREATE TABLE testeTable (
            attOne INTEGER PRIMARY KEY,
            attTwo TEXT
            )`)
        await db.close()
    }
}
initDB.init();