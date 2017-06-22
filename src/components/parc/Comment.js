
let propTypes = {
    name: PT.oneOf([ 'Mike', 'Matt','Sal', 'Hurley', 'Molly', 'Jenny', 'Elliot', 'Ben', 'Jane'])
}

export default class Comment extends Component{
    constructor(props){
        super(props);

        this.state = {
            inReply: false
        }
    }

    render(){
        let {time, name, content, avatar, subComment, replySomeone, Reply, comment, replyInFix, someReplyIn} = this.props;

        // let {inReply} = this.state;
        let inReply = (someReplyIn === comment);
        return (
            <div className="comment">
                <a className="avatar">
                    <img src={avatar}/>
                </a>
                <div className="content">
                    <a className="author">{name}</a>
                    <div className="metadata">
                        <span className="date">{time}</span>
                    </div>
                    <div className="text">
                        {content}
                    </div>
                    <div className="actions">
                        <a
                            className="reply"
                            onClick={ev => {
                                ev.stopPropagation();
                                ev.preventDefault();
                                // this.setState({inReply: !inReply});
                                replyInFix( inReply ? null : comment );
                            }}
                        >回复</a>
                    </div>
                    {inReply ? (
                        <Reply {...{replySomeone, comment}}/>
                    ) : null }
                    {
                        subComment ? (
                            subComment.map((elt, i)=>{
                                return (<Comment {...elt} {...{Reply, replySomeone, comment: elt, replyInFix, someReplyIn}} key={i}/>);
                            })
                        ) : (null)
                    }
                </div>
            </div>
        );
    }
}


































Comment.defaultProps = {
    name: 'Janeg'
}


Comment.propTypes = propTypes;
