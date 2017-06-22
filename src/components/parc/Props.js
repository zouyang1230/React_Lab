
import CommentBox from './CommentBox';



export default class Props extends Component{
    constructor(props){
        super(props);
    }

    render(){

        let {data} = this.props;

        return (

            <CommentBox {...{data}}/>

        );
    }
}
