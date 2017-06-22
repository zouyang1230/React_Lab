import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
        console.log('nav');
        let {changeView} = this.props;

        return (
            <div className="ui menu">
                <div className="header item">Noods</div>
                <div
                    className="item"
                    onClick = {()=>{changeView('home')}}
                >Home</div>
                <div
                    className="item"
                    onClick={()=>{changeView('list')}}
                >List</div>
                <div className="item right">Login</div>
            </div>
        )
    }
}
