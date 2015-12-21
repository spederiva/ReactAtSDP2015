(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

window.TodoList = React.createClass({
    displayName: "TodoList",

    handleOnComplete: function (todo) {
        this.props.onComplete(todo);
    },

    handleOnDelete: function (todo) {
        this.props.onDelete(todo);
    },

    render: function () {
        var list = [];
        if (this.props.list.length > 0) {
            list = this.props.list.map((function (todo) {
                return React.createElement(
                    "li",
                    { key: todo.id, className: todo.isCompleted ? "completed" : "" },
                    React.createElement(
                        "div",
                        { className: "view" },
                        React.createElement("input", { className: "toggle", type: "checkbox", value: todo.isCompleted, onChange: this.handleOnComplete.bind(this, todo) }),
                        React.createElement(
                            "label",
                            null,
                            todo.task
                        ),
                        React.createElement("button", { className: "destroy", onClick: this.handleOnDelete.bind(this, todo) })
                    ),
                    React.createElement("input", { className: "edit", vvalue: "Lorem ipsum dolar sit amut" })
                );
            }).bind(this));
        }

        return React.createElement(
            "section",
            { className: "main" },
            React.createElement("input", { className: "toggle-all", type: "checkbox" }),
            React.createElement(
                "ul",
                { className: "todo-list" },
                list
            )
        );
    }
});

},{}]},{},[1]);
