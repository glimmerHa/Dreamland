// 时钟组件
class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
    }
    tick(){
        this.setState({data: new Date()})
    }
    // 生命周期方法
    componentDidMount(){
        this.timerID = setInterval(()=>{
            this.tick()
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    // 生命周期方法
    render(){
        return (
            <div>
                <h1>hello, world!</h1>
                <div>It is {this.state.date.toLocalTimeString()}</div>
            </div>
        )
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);