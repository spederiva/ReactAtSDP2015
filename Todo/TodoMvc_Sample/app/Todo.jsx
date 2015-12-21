/**
 * Created by sebastianp on 21/12/2015.
 */
"use strict";

var Todo = React.createClass({
    render: function () {
        return (
            <div>
                <header className="header">
                    <input className="new-todo" placeholder="What needs to be done?"/>
                </header>

                <TodoList list={this.props.list} />

                <TodoFooter />
            </div>

        );
    }
});

var todoList = [
    {id: 1, task: 'task 1', isCompleted: false},
    {id: 2, task: 'task 2', isCompleted: false},
    {id: 3, task: 'task 3', isCompleted: false}
];

ReactDOM.render(
    <Todo list={todoList} />,
    document.getElementById("container")
);
