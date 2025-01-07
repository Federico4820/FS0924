import { Component } from "react";

class MyClassComponent extends Component{
    render(){
        //obbligatorio per ritornare elementi nei componenti a classe
        return(
            <div>
                <h3>Componente a CLASSE {this.props.title}</h3>
            </div>
        )
    }
}

export default MyClassComponent