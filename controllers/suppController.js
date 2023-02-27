import { pool } from "../config/data_base.js";

const supplist = (req, res) => {
    let supp = "DELETE FROM todolist where id = ?";

    pool.query(supp, [req.body.id], (err, result) => {
        if (err) throw err;

        res.json({ response: true });
    });
};

export default supplist;
