import React, {Component} from 'react';
import Card from 'card/Card.js';


export default class CardWrap extends Component{

    componentDidUpdate(){
        console.log('CardWrap 更新好了');
    }

    componentDidMount(){
        console.log('CardWrap 渲染完成');
    }

    componentWillUnmount(){
        console.log('CardWrap 被卸载了');
    }

    render(){
        
        console.log('cardWrap');

        let { data } = this.props;

        let cards = data.map((elt, i)=>{
            return (
                <Card key={i} {...elt}/>
            )
        });

        return (
            <div className="ui cards">
                {cards}
            </div>
        )
    }
}
