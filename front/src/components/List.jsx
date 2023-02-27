import React from 'react'
import axios from "axios"
import {useParams} from "react-router-dom";



const List = () => {
    const [detail,setDetail] = React.useState([])

    const currentPath = location.pathname.split('/').pop()


    React.useEffect(() => {
        axios.get(`http://127.0.0.1:3000/${currentPath}`)
            .then((res) => {
                if(res.data.response) {
                    setDetail(res.data.result)
                }
            })
            .catch((err) => {
                console.log(err)
            })
    },[detail])

    const suppList = (id) => {
        axios.post(`http://127.0.0.1:3000/suppdetail`, {id})
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
        {detail && detail.map((e,i) => {
            return(
                <div key={i}>
                    <p>{e.content}</p>
                    <button onClick={() => suppList(e.id)}>supprimer</button>
                </div>
            )
        })}
    </React.Fragment>
    );
}
export default List