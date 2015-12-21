var MyList = React.createClass({
    render(){
        return (
            <div>
                <h1>The Greatest List</h1>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                    <li>Third</li>
                </ul>
            </div>
        )
    }
});


ReactDOM.render(
    <MyList />,
    document.getElementById("container")
);