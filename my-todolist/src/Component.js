import React, {Component} from 'react';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name: [],
        }
    }


    handleChange  = (e) => {
        if(e.keyCode===13 && e.target.value!==''){
            this.setState({
                notas: this.state.name.concat(e.target.value)
            })
        }
    }





render(){
    return(
        <>
        <h1>Todos</h1>
        <input type="text" name="name" onChange={(e) => this.handleChange(e)}></input><br/>
        
        
        </>
    )
}
}

export default TodoList;