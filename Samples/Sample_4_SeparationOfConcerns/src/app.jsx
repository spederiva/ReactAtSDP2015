var getParameterByName = (name) => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var HelloWorld = React.createClass({
    render(){
        var name = getParameterByName("name"),
            greet;

        if (name) {
            greet = <h1>Hello {name}</h1>;
        } else {
            greet = <h1>Hello anonymous</h1>;
        }

        return (
            <div>
                {greet}
            </div>
        )
    }
});

ReactDOM.render(
    <HelloWorld />,
    document.getElementById("container")
);