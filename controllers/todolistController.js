import { pool } from "../config/data_base.js";

const addTodolistController = (req, res) => {
    let nomSql = "INSERT INTO todolist (nom) VALUES (?)";

    let listSQL = "INSERT INTO task (todolist_id,content,date) VALUES (?,?,?)";

    pool.query(nomSql, [req.body.nameList], (err, name) => {
        if (err) throw err;

        for (let i = 0; i < req.body.result.length; i++) {
            pool.query(
                listSQL,
                [name.insertId, req.body.result[i].task, new Date()],
                (err, result) => {
                    if (err) throw err;
                }
            );
        }
        res.json({ response: true });
    });
};

export default addTodolistController;
