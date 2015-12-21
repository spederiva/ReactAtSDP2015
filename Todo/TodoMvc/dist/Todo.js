(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

var Todo = React.createClass({
    displayName: "Todo",

    getInitialState: function () {
        return {
            newToDo: "",
            TODO_LIST: [],
            filterIsComplete: null
        };
    },

    componentDidMount: function () {
        var router = Router({
            '/': this.setState.bind(this, { filterIsComplete: null }),
            'active': this.setState.bind(this, { filterIsComplete: 'active' }),
            'completed': this.setState.bind(this, { filterIsComplete: 'completed' })
        });

        router.init('/');

        this.getData();
    },

    getData() {
        return $.get('data/data.json').then((function (data) {
            this.setState({
                TODO_LIST: data
            });
        }).bind(this));
    },

    handleOnKeyDown: function (e) {
        if (e.keyCode === 13) {
            var list = this.state.TODO_LIST;
            list.push({
                id: list.length + 1, task: e.target.value, isCompleted: false
            });

            this.setState({
                TODO_LIST: list,
                newToDo: ''
            });
        }
    },

    handleOnChange: function (e) {
        this.setState({
            newToDo: e.target.value
        });
    },

    handleOnComplete: function (todo) {
        var list = this.state.TODO_LIST;

        list[list.indexOf(todo)].isCompleted = !todo.isCompleted;

        this.setState(list);
    },

    handleOnDelete: function (todo) {
        var list = this.state.TODO_LIST;

        list.splice(list.indexOf(todo), 1);

        this.setState({ TODO_LIST: list });
    },

    render: function () {
        var filterIsComplete = this.state.filterIsComplete === "completed",
            list = this.state.filterIsComplete === null ? this.state.TODO_LIST : this.state.TODO_LIST.filter(function (item) {
            return item.isCompleted === filterIsComplete;
        });

        return React.createElement(
            "div",
            null,
            React.createElement(
                "header",
                { className: "header" },
                React.createElement("input", { value: this.state.newToDo, onChange: this.handleOnChange, onKeyDown: this.handleOnKeyDown, className: "new-todo", placeholder: "What needs to be done?" })
            ),
            React.createElement(TodoList, { list: list, onComplete: this.handleOnComplete, onDelete: this.handleOnDelete }),
            React.createElement(Footer, { list: list, currentFilter: this.state.filterIsComplete })
        );
    }
});

ReactDOM.render(React.createElement(Todo, null), document.getElementById("container"));

},{}]},{},[1]);
