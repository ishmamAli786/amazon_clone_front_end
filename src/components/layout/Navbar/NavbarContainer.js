import React, { Component } from 'react';
import NavbarView from './NavbarView';

class NavbarContainer extends Component {
    constructor(props){
        super(props)
        this.state={
            prefLang:this.props.i18n.languages[0],
            selectedCat:0,
            productCategory:[
                "navbar.product_category.all","navbar.product_category.smartphone","navbar.product_category.primary_deals","navbar.product_category.books"
            ],
            query:''
        }
    }

    handleChangeLang=(e)=>{
        this.setState({prefLang:[e.target.value]})
        this.props.i18n.changeLanguage([e.target.value])
    }

    handleCatChange=(e,index)=>{
        e.preventDefault();
        this.setState({selectedCat:index})
    }

    handleQueryChange=(e)=>{
        this.setState({query:[e.target.value]});
    }


    handleSearch=(e)=>{
        e.preventDefault();
        console.log("Query:"+this.state.query);
        console.log("Category:"+this.state.selectedCat)
    }
    render() {
        const rtl =(this.state.prefLang =='pk' ? 'text-right':'');

        return (
            <div>
                <NavbarView {...this.props} handleChangeLang={this.handleChangeLang} prefLang={this.state.prefLang} rtl={rtl}
                handleCatChange={this.handleCatChange} selectedCat={this.state.selectedCat} productCategory={this.state.productCategory}
                handleQueryChange={this.handleQueryChange} query={this.state.query} handleSearch={this.handleSearch}
                />
            </div>
        )
    }
}


export default NavbarContainer;