

export default class JSX extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (

            <div className="ui grid container centered">
                <div className="ui nine wide column">
                    <div className="ui comments">
                        <h1 className="ui dividing header">Comments</h1>
                        <div className="comment">
                            <a className="avatar">
                                <img src={require("./img/matt.jpg")}/>
                            </a>
                            <div className="content">
                                <a className="author">Matt</a>
                                {/* <div className="metadata">
                                    <span className="date">Today at 5:42PM</span>
                                </div> */}
                                <div className="text">
                                    How artistic!
                                </div>
                                <div className="actions">
                                    <a className="reply">回复</a>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                                <img src={require("./img/elliot.jpg")}/>
                            </a>
                            <div className="content">
                                <a className="author">Elliot Fu</a>
                                {/* <div className="metadata">
                                    <span className="date">Yesterday at 12:30AM</span>
                                </div> */}
                                <div className="text">
                                    <p>This has been very useful for my research. Thanks as well!</p>
                                </div>
                                <div className="actions">
                                    <a className="reply">回复</a>
                                </div>
                            </div>
                            <div className="comments">
                                <div className="comment">
                                    <a className="avatar">
                                        <img src={require("./img/jenny.jpg")}/>
                                    </a>
                                    <div className="content">
                                        <a className="author">Jenny Hess</a>
                                        {/* <div className="metadata">
                                            <span className="date">Just now</span>
                                        </div> */}
                                        <div className="text">
                                            Elliot you are always so right :)
                                        </div>
                                        <div className="actions">
                                            <a className="reply">回复</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <a className="avatar">
                                <img src={require("./img/joe.jpg")}/>
                            </a>
                            <div className="content">
                                <a className="author">Joe Henderson</a>
                                {/* <div className="metadata">
                                    <span className="date">5 days ago</span>
                                </div> */}
                                <div className="text">
                                    Dude, this is awesome. Thanks so much
                                </div>
                                <div className="actions">
                                    <a className="reply">回复</a>
                                </div>
                            </div>
                        </div>
                        <form className="ui reply form">
                            <div className="field">
                                <textarea
                                    cols="10"
                                ></textarea>
                            </div>
                            <button className="ui blue submit button" type="submit">
                                回复
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
