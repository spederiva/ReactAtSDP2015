var Header = React.createElement("h1", null, "The Greatest List");

var li1 = React.createElement("li", null, "First");
var li2 = React.createElement("li", null, "Second");
var li3 = React.createElement("li", null, "Third");

var MyList = React.createElement(
    "ul",
    null,
    li1, li2, li3
);

var Home = React.createElement(
    "div",
    null,
    Header, MyList
);

ReactDOM.render(
    Home,
    document.getElementById("container")
);