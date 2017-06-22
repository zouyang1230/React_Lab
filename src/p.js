
import JSX from 'parc/JSX';
import Props from 'parc/Props';

require('../semantic/dist/semantic.css');












let data = [
    {date: '今天', time: '11:20', name: 'Matt', content: '你好', avatar: require("parc/img/matt.jpg")},
    {
        date: '今天', time: '11:20', name: 'Jenny', content: '你好', avatar: require("parc/img/molly.jpg"),
        subComment: [
            { time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
            { time: '11:20',name: 'Jenny', content: '你好', avatar: require("parc/img/jenny.jpg")},
            { time: '11:20',name: 'Elliot', content: '你好', avatar: require("parc/img/elliot.jpg")},
            { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
        ]
    },
    {date: '今天', time: '11:20', name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")},
    {date: '今天', time: '11:20', name: 'Elliot', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '昨天', time: '11:20', name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
    {date: '昨天', time: '11:20', name: 'Mike', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '前天', time: '11:20', name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg")},
    {
        date: '前天', time: '11:20', name: 'Hurley', content: '你好', avatar: require("parc/img/matt.jpg"),
        subComment: [
            {
                time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg"),
                subComment: [
                    {
                         time: '11:20',name: 'Sal', content: '你好', avatar: require("parc/img/molly.jpg"),
                        subComment: [
                            { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
                        ]
                    },
                    { time: '11:20',name: 'Jenny', content: '你好', avatar: require("parc/img/jenny.jpg")},
                    { time: '11:20',name: 'Elliot', content: '你好', avatar: require("parc/img/elliot.jpg")},
                    { time: '11:20',name: 'Molly', content: '你好', avatar: require("parc/img/molly.jpg")}
                ]
            }
        ]
    },
    {date: '前天',  time: '11:20', name: 'Ben', content: '你好', avatar: require("parc/img/matt.jpg")},
    {date: '前天',  time: '11:20', name: 'Jane', content: '你好', avatar: require("parc/img/molly.jpg")}
];




























class III extends Component{
    constructor(props){
        super(props);

        this.state = {
            val: ''
        }

    }

    render(){

        let arr = Array.from({length:1000}).map((elt, i)=>{
            return (
                <input type="text" className="column" key={i}
                    value={this.state.val}
                    onChange={ev=>{
                        this.setState({val: ev.target.value})
                    }}
                />
            )
        });

        return (
            <form className="ui form ten column grid">
                {
                    arr
                }
            </form>

        );
    }
}

ReactDOM.render(
    <JSX data={data}/>,
    document.getElementById('root')
);



if(module.hot){ 
    module.hot.accept()
}
