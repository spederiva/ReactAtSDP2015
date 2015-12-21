(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by sebastianp on 21/12/2015.
 */
"use strict";

var Todo = React.createClass({
    displayName: "Todo",

    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "header",
                { className: "header" },
                React.createElement("input", { className: "new-todo", placeholder: "What needs to be done?" })
            ),
            React.createElement(TodoList, { list: this.props.list }),
            React.createElement(TodoFooter, null)
        );
    }
});

var todoList = [{ id: 1, task: 'task 1', isCompleted: false }, { id: 2, task: 'task 2', isCompleted: false }, { id: 3, task: 'task 3', isCompleted: false }];

ReactDOM.render(React.createElement(Todo, { list: todoList }), document.getElementById("container"));

},{}]},{},[1]);
