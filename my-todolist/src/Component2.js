import React, { useState, useEffect } from 'react';

const MainClassFunc = props => {


    const [state, setState] = useState({ contador: 0, tareas: [] });
    const [contador, setContador] = useState(0);




    



    const addtareas = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            let newState = Object.assign({}, state);
            newState.tareas.push(e.target.value);
            setState(newState);
            setContador(contador+1);

            e.target.value='';
        }
    }
    
    const deleteTask = (e) => {
        let newState = Object.assign({}, state);
        newState.tareas.splice(e, 1);
        setContador(contador-1);
        setState(newState);
    }




    useEffect(() => {

    }, [state]);

    return (
        <>
            
            <input type="text" name="tarea" onKeyDown={(e) => addtareas(e)} /> <br />

            <ul>
                {
                    !!state.tareas &&
                        state.tareas.length > 0 ?
                        state.tareas.map((tarea, i) => {
                            return <li key={i}>{tarea}<span onClick={(e) => deleteTask(i)}>  X </span></li>
                        })
                        : (
                            <li>No tiene tareas</li>
                        )
                }
            </ul>

            <br />
            <p>{contador} Items left!</p>
            <br />
        </>
    )
}
export default MainClassFunc;