import { pool } from "../config/data_base.js";

const getlistdetailController = (req, res) => {
    let detailsql = "SELECT * FROM task WHERE todolist_id = ?";

    pool.query(detailsql, [req.params.id], (err, result) => {
        if (err) throw err;

        res.json({ response: true, result });
    });
};
export default getlistdetailController;
