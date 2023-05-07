const dataBase = require("../DB/config")

module.exports = {
    async all() {
    
        const db = await dataBase();
        const resDB = await db.all(`
            SELECT * FROM notes
        `);
        await db.close();

        return resDB;
   },

   async where(column, value){
        const db = await dataBase();
        const resDB = await db.all(`
            SELECT * FROM notes
            WHERE ${column} = ${value}
        `);
        await db.close();
        return resDB;
   },

   async update(data){
        const db = await dataBase();
        const resDB = await db.all(`
            UPDATE notes
            SET title= '${data.title}', body= '${data.body}'
            WHERE id= ${data.id}
        `);
        await db.close();
        return resDB;
   },
}