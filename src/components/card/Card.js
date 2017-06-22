import React, {Component} from 'react';
import PropTypes from 'prop-types';


let propTypes = {
    imgSrc: PropTypes.string,
    name: PropTypes.string.isRequired,
    meta: PropTypes.string,
    desc: PropTypes.string,
    joined: PropTypes.number,
    likeNum: PropTypes.number
}

let contextTypes = {
    et: PropTypes.string
}

export default class Card extends Component{

    constructor(props){
        super(props);
        this.state = {
            isHeartON: false,
            year: props.joined
        };

        this.heartClick = this.heartClick.bind(this);
        this.yearAdd = this.yearAdd.bind(this);
    }

    yearAdd(){

        let {year} = this.state

        this.setState({
            year: year + 10
        });
    }

    heartClick(event){
        let {isHeartON} = this.state;
        isHeartON = !isHeartON;

        console.log(event.target);

        this.setState({
            isHeartON
        })
    }

    render(){
        let {imgSrc, name, meat, desc, joined, likeNum} = this.props;

        let {et} = this.context;

        let {isHeartON, year} = this.state;

        let heartClass = isHeartON ? '' : 'empty';

        return (
            <div className="ui card">
                <div className="image">
                    <img src={imgSrc} alt=""/>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="meta">
                        <a href="">{meat}</a>
                    </div>
                    <div className="description">{desc}</div>
                </div>
                <div className="extra content">
                    <span
                        className="right floated"
                        onClick = { this.yearAdd}
                    > {`${et} in ${year}`} </span>
                    <span>
                        <i
                            className={`${heartClass} heart icon`}
                            onClick = { this.heartClick }
                        ></i> {`${likeNum} Like`}
                    </span>
                </div>
            </div>
        )
    }
}

Card.propTypes = propTypes;
Card.contextTypes = contextTypes;
