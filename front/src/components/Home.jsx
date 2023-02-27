import React from 'react'
import axios from "axios"
import { NavLink } from "react-router-dom";




const Home = () => {
    const [list,setList] = React.useState([])

    

    React.useEffect(() => {
        axios.get("http://127.0.0.1:3000/getlist")
            .then((res) => {
                if(res.data.response) {
                    setList(res.data.result)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[list])

    const supp = (id) => {
        axios.post(`http://127.0.0.1:3000/supp`, {id})
            .then((res) => {
                if(res.data.response) {
                    console.log(res.data.response)

                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
    <React.Fragment>
        <h1>Todolist</h1>
        <ul>
        {list && list.map((e,i) => {
            return(
                <li key={i}>
                    <NavLink to={`/${e.id}`}>
                        {e.nom}
                    </NavLink> 
                    <button onClick={() => supp(e.id)}>supprimer</button>
                </li>
            )
        })}
        </ul>
    </React.Fragment>
    );
}
export default Home