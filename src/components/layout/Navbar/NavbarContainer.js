import React, { Component } from 'react';
import NavbarView from './NavbarView';

class NavbarContainer extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }


    render() {
        return (
            <div>
                <NavbarView {...this.props}/>
            </div>
        )
    }
}


export default NavbarContainer;