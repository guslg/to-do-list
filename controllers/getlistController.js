import { pool } from "../config/data_base.js";

const getlistController = (req, res) => {
    let getList = "SELECT * FROM todolist";

    pool.query(getList, (err, result) => {
        if (err) throw err;

        res.json({ response: true, result });
    });
};

export default getlistController;
