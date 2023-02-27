import mysql from "mysql";

let pool = mysql.createPool({
    connectionLimit: 10000,
    host: "db.3wa.io", // on rentre l'hôte, l'adresse url où se trouve la bdd
    user: "augustinleguennec", // identifiant BDD
    password: "d61f20b1585656d55c809f8d4bd42e83", // le password
    database: "augustinleguennec_todolist", // nom de la base de donnée
});

export { pool };
