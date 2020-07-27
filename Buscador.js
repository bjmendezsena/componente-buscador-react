import React,{Component} from 'react';
import './buscador.css';
import PropTypes from 'prop-types';


class Buscador extends Component {

    constructor(props){
        super(props);
        this.state = {
            text: props.text,

        }
    }
    render() { 
        const {text} = this.state;
        return <div className="search-box">
            <input className="search-txt" type="text" placeholder={text} />
            <a className="search-btn" href="#">
                <i className="fas fa-search"></i>
            </a>
        </div>;
    }

}

Buscador.propTypes = {
    text: PropTypes.string.isRequired
}


 
export default Buscador;

