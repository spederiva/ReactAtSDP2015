(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var getParameterByName = name => {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var HelloWorld = React.createClass({
    displayName: "HelloWorld",

    render() {
        var name = getParameterByName("name"),
            greet;

        if (name) {
            greet = React.createElement(
                "h1",
                null,
                "Hello ",
                name
            );
        } else {
            greet = React.createElement(
                "h1",
                null,
                "Hello anonymous"
            );
        }

        return React.createElement(
            "div",
            null,
            greet
        );
    }
});

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById("container"));

},{}]},{},[1]);
