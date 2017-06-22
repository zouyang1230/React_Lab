import React, {Component} from 'react';

export default class Home extends Component{
    render(){
        console.log('home');
        return (
            <img
                className="ui fluid image "
                src={require('img/128H.jpg')}
                alt=""
            />
        )
    }
}
