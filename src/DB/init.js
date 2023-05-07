const dataBase = require('./config')
const initDB = {
    async init() {
        const db = await dataBase();
        await db.exec(`CREATE TABLE notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            body TEXT NOT NULL
            )`)
        await db.close();
    }
}
initDB.init();
