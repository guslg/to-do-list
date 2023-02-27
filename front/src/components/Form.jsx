import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addDragon,reverseDragon} from '../actions/actions-types'
import axios from "axios"



const Form = () => {
    const { a,b } = useSelector((state) => {
        return {
            a: state.ReducerChrono,
            b: state.reducerDragon,
    }})
    const dispatch = useDispatch();
    const [content,setContent] = React.useState("")
    const [nameList,setNameList] = React.useState("")


    const addTask = (e) => {
      e.preventDefault()
      dispatch(addDragon(content))
      setContent("")

    }
    const submit = (e) => {
      e.preventDefault()
      let data = [...b.dragons]
       axios.post("http://127.0.0.1:3000/add", {result:data, nameList:nameList})
        .then((res) => {
            console.log(res.data);
      })
      .catch((err) => {
        console.log(err)
      }) 
    }
      return (
        <React.Fragment>
        <h1>To Do List, nombre de tâche(s) {b.count}</h1>
        <form onSubmit={submit}>
          <label>Nom de la liste
            <input type="text" value={nameList} name="nameList" onChange={(e) => setNameList(e.target.value)}/>
          </label>
          <label>Ajoutez une tâche
            <input type="text" value={content} name="content" onChange={(e) => setContent(e.target.value)}/>
          </label>
          <button onClick={addTask}>ajouter une tâche</button>
          <input type="submit" value="enregistrer la liste"/>
        </form>
          <button onClick={() => dispatch(reverseDragon())}>inverser la liste</button>
          {b.error !== "" && <p>{b.error}</p>}
          <p>{b.rien}</p>
          
        </React.Fragment>
      );
}
export default Form