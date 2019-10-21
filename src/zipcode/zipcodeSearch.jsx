import React, { Component } from 'react';
import axios from 'axios';

import Form from './zipcodeForm'
import List from './zipcodeList'

const searchURL = 'https://localhost:44396/api/zipcode/search';

export default class Search extends Component {

    constructor(props){
        super(props);    

        this.state = { code: '', list: [], errorMenssager: ''}

        this.changeValue    = this.changeValue.bind(this);
        this.searchValue    = this.searchValue.bind(this);
        this.clearValue     = this.clearValue.bind(this);
    }
    
    changeValue(e){
        this.setState({...this.state, code: e.target.value });
    }

    load(code = "") {
        axios.get(`${searchURL}?code=${code.replace("-","")}`).then(resp => {
            let newList = this.state.list;
            let object = resp.data;
            var include = true;
    
            if(newList.length == 0){
                newList.push(object);
            }
            else{
                newList.map(item => {
                    if(item.cep == object.cep){
                        include = false;
                        return;
                    }
                });

                if(include)
                    newList.push(object);
            }

            this.setState({...this.state, list: newList, code: "", errorMenssager: ""});
        });
    }

    searchValue(){
        if(this.state.code == ""){
            this.setState({...this.state, errorMenssager: "zip code required"});
        }

        if(this.state.code){
            const regx = new RegExp(/[0-9]{5}-[\d]{3}/);
            if(!regx.test(this.state.code))
                this.setState({...this.state, errorMenssager: "zip code invalid!"});
            else
                this.load(this.state.code);
        }
    }

    clearValue(e){
        this.setState({...this.state, list: [], code: "", errorMenssager: ""});
    }

    render(){
        return( 
            <div>
                <h2 className="text-center">Search your Zip code BR!</h2>
                <Form
                    code={ this.state.code }
                    changeValue={this.changeValue}
                    keyPress={this.keyPress}
                    clearValue={this.clearValue}
                    searchValue={this.searchValue}
                    errorMenssager={ this.state.errorMenssager}
                />
                <br/>
                <List list={this.state.list}/>
            </div>
        )
    }
}