
let avatar = require('parc/img/molly.jpg');

export default class Reply extends Component{
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(ev){
        ev.stopPropagation();
        ev.preventDefault();

        let {comment} = this.props;


        if(!comment.subComment){
            comment.subComment = [];
        }

        comment.subComment.push({
            time: '00:00',
            avatar: avatar,
            name: this.refs.ipt.value,
            content: this.refs.area.value
        });
        this.props.replySomeone();
    }

    render(){
        return (
            <form className="ui reply form"
                onSubmit={this.onSubmit}
            >
                <div className="field">
                    <input type="text" ref="ipt"/>
                </div>
                <div className="field">
                    <textarea
                        cols="10"
                        ref="area"
                    ></textarea>
                </div>
                <button className="ui blue submit button" type="submit">
                    回复
                </button>
            </form>
        );
    }
}
