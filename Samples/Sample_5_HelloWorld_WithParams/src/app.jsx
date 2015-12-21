var HelloWorld = React.createClass({
    render() {
        return (<div>Hello {this.props.name}!!</div>);
    }
});

ReactDOM.render(
    <HelloWorld name="Sebastian" />,
    document.getElementById("example")
);
