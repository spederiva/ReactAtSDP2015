(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by sebastianp on 21/12/2015.
 */
"use strict";

window.TodoList = React.createClass({
    displayName: "TodoList",

    render: function () {
        var rows = this.props.list.map(item => {
            return React.createElement(
                "li",
                { key: item.id },
                React.createElement(
                    "div",
                    { className: "view" },
                    React.createElement("input", { className: "toggle", type: "checkbox" }),
                    React.createElement(
                        "label",
                        null,
                        item.task
                    ),
                    React.createElement("button", { className: "destroy" })
                )
            );
        });

        return React.createElement(
            "section",
            { className: "main" },
            React.createElement(
                "ul",
                { className: "todo-list" },
                rows
            )
        );
    }
});

},{}]},{},[1]);
