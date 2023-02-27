import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {deleteDragon} from '../actions/actions-types'

const ListDragon = () => {
    const { a,b } = useSelector((state) => {
        return {
            a: state.ReducerChrono,
            b: state.reducerDragon,
  }})
    const dispatch = useDispatch();
    return(
        <React.Fragment>
        {b.dragons.map((e,i) => 
        <div key={i}>
            <p>{e.task}</p>
            <button onClick={() => dispatch(deleteDragon(e.task))} >supprimer</button>
        </div>
        )}
        </React.Fragment>
        )
}
export default ListDragon