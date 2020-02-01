import React, { useState, useEffect } from 'react';

const MainClassFunc = props => {
    const [contador, setContador] = useState(0);
    const [name, setName] = useState('');

    const [state, setState] = useState({ tareas: [] });

    function cambiarValor() {
        setContador(contador + 1)
    }

    function handleChange(e) {
        setName(e.target.value);
    }

    const addtareas = (e) => {
        if (e.keyCode === 13 && e.target.value !== '') {
            let newState = Object.assign({}, state);
            newState.tareas.push(e.target.value);
            setState(newState);
            
        }

    }

    useEffect(() => {

    }, [state]);

    return (
        <>
            {contador}<br />
            <button onClick={() => cambiarValor()}>Click</button><br />
            {name}<br />
            <input type="text" name="name" onChange={(e) => handleChange(e)} /> <br />
            <input type="text" name="tarea" onKeyDown={(e) => addtareas(e)} /> <br />

            <ul>
                {
                    !!state.tareas &&
                        state.tareas.length > 0 ?
                        state.tareas.map((tarea, i) => {
                            return <li key={i}>{tarea}</li>
                        })
                        : (
                            <li>No tiene tareas</li>
                        )
                }
            </ul>
        </>
    )
}
export default MainClassFunc;