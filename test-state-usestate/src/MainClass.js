import React from 'react';

class MainClass extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            contador: 1,
            name: '',
            notas: [],
            soltero: true,
            user: {
                roles: [
                    'Admin',
                    'Supervisor'
                ]
            }
        }
        this.cambiarValor = this.cambiarValor.bind(this)
    }

    cambiarValor(){
        this.setState({
            contador: this.state.contador+1
        })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    addnotas = (e) => {
        if(e.keyCode===13 && e.target.value!==''){
            this.setState({
                notas: this.state.notas.concat(e.target.value)
            })
        }
    }

    render(){
        return (
            <>
                <h1>Main Class</h1>
                <span>{this.state.contador}</span><br/>
                <input type="text" name="name" onChange={(e) => this.handleChange(e)}/> <br/>
                {this.state.name}<br/>
                <button onClick={this.cambiarValor}>Click</button><br />
                <input type="text" name="notas" onKeyDown={(e) => this.addnotas(e)}/> <br/>
            </>
        )
    }
}

export default MainClass;