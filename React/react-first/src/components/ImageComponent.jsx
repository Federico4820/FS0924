import { Component } from "react";

class MyClassComponent extends Component{
    render(){
        //obbligatorio per ritornare elementi nei componenti a classe
        return(
            <img src={this.props.src} alt={this.props.alt}/>
        )
    }
}

export default MyClassComponent