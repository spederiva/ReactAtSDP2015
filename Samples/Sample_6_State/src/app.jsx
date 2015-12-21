var HelloWorld = React.createClass({
    getInitialState(){
        return {
            name: ""
        }
    },
    handleOnChange(e){
        this.setState({
            name: e.target.value
        });
    },
    render() {
        return (<input value={this.state.name} onChange={this.handleOnChange}/>);
    }
});

ReactDOM.render(
    <HelloWorld name="Sebastian"/>,
    document.getElementById("example")
);