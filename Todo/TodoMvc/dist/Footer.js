(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

window.Footer = React.createClass({
    displayName: "Footer",

    render: function () {
        var itemCount = this.props.list.reduce(function (acumm, task) {
            var res = acumm + !task.isCompleted;

            return acumm + !task.isCompleted;
        }, 0);

        return React.createElement(
            "footer",
            { className: "footer" },
            React.createElement(
                "span",
                { className: "todo-count" },
                React.createElement(
                    "strong",
                    null,
                    itemCount
                ),
                React.createElement(
                    "span",
                    null,
                    " "
                ),
                React.createElement(
                    "span",
                    null,
                    "item/s"
                ),
                React.createElement(
                    "span",
                    null,
                    " left"
                )
            ),
            React.createElement(
                "ul",
                { className: "filters" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/", className: this.props.currentFilter === null ? 'selected' : '' },
                        "All"
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    " "
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/active", className: this.props.currentFilter === 'active' ? 'selected' : '' },
                        "Active"
                    )
                ),
                React.createElement(
                    "span",
                    null,
                    " "
                ),
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: "#/completed", className: this.props.currentFilter === 'completed' ? 'selected' : '' },
                        "Completed"
                    )
                )
            )
        );
    }
});

},{}]},{},[1]);
