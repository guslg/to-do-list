import { pool } from "../config/data_base.js";

const supplistdetail = (req, res) => {
    let supp = "DELETE FROM task where id = ?";

    pool.query(supp, [req.body.id], (err, result) => {
        if (err) throw err;

        res.json({ response: true });
    });
};

export default supplistdetail;
