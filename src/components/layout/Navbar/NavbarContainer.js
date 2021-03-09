import React, { Component } from 'react';
import NavbarView from './NavbarView';

class NavbarContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            prefLang:this.props.i18n.languages[0]
        }
    }

    handleChangeLang=(e)=>{
        this.setState({prefLang:[e.target.value]})
        this.props.i18n.changeLanguage([e.target.value])
    }

    render() {
        const rtl =(this.state.prefLang =='pk' ? 'text-right':'');

        return (
            <div>
                <NavbarView {...this.props} handleChangeLang={this.handleChangeLang} prefLang={this.state.prefLang} rtl={rtl}/>
            </div>
        )
    }
}


export default NavbarContainer;