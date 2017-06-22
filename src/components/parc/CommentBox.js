
import Reply from './Reply';
import TimeHeader from './TimeHeader';
import Comment from './Comment';

export default class CommentBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            someReplyIn: null
        }

        this.replySomeone = this.replySomeone.bind(this);
        this.replyInFix = this.replyInFix.bind(this);
    }

    replySomeone(){
        this.setState({someReplyIn: null});
    }

    replyInFix(someReplyIn){
        this.setState({someReplyIn});
    }

    render(){
        let {data, someReplyIn} = this.state;

        let {replySomeone, replyInFix} = this;

        let array = [];
        let lastDate = null;

        data.forEach((comment, i)=>{

            let {date, time, name, content, avatar, subComment} = comment;

            if(lastDate !== date){
                array.push(<TimeHeader {...{date}} key={Math.random()}/>);
            }
            array.push(
                <Comment
                    {...{time, name, content, avatar, subComment, Reply, replySomeone, comment, replyInFix, someReplyIn}}
                    key={Math.random()}
                />
            );
            lastDate = date;
        });

        return (
            <div className="ui grid container centered">
                <div className="ui nine wide column">
                    <div className="ui comments">
                        <h1 className="ui dividing header">Comments</h1>
                        {array}
                    </div>
                </div>
            </div>
        );
    }
}
