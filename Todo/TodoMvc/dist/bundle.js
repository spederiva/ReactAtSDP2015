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

},{}],2:[function(require,module,exports){
/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

var todoList = [{ id: 1, task: 'task 1', isCompleted: false }, { id: 2, task: 'task 2', isCompleted: false }, { id: 3, task: 'task 3', isCompleted: false }];

var Todo = React.createClass({
    displayName: 'Todo',

    getInitialState: function () {
        return {
            newToDo: "",
            TODO_LIST: this.props.list,
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
            'div',
            null,
            React.createElement(
                'header',
                { className: 'header' },
                React.createElement('input', { value: this.state.newToDo, onChange: this.handleOnChange, onKeyDown: this.handleOnKeyDown, className: 'new-todo', placeholder: 'What needs to be done?' })
            ),
            React.createElement(TodoList, { list: list, onComplete: this.handleOnComplete, onDelete: this.handleOnDelete }),
            React.createElement(Footer, { list: list, currentFilter: this.state.filterIsComplete })
        );
    }
});

ReactDOM.render(React.createElement(Todo, { list: todoList }), document.getElementById("container"));

},{}],3:[function(require,module,exports){
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

},{}]},{},[1,2,3]);
