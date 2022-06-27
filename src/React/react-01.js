class Welcome extends React.Component{
    render(){
        return (<h1>Hello, {this.props.name}</h1>)
    }
}

function Welcome1 (props){
    return <h1>Hello, {props.name}</h1>;
}
let element = <Welcome1 name="sara" />
ReactDom.render(element, document.getElementById('root'))