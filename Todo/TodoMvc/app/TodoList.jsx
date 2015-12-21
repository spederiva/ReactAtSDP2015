/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

window.TodoList = React.createClass({
    handleOnComplete: function (todo) {
        this.props.onComplete(todo);
    },

    handleOnDelete: function (todo) {
        this.props.onDelete(todo);
    },

    render: function () {
        var list = [];
        if (this.props.list.length > 0) {
            list = this.props.list.map(function (todo) {
                return (
                    <li key={todo.id} className={todo.isCompleted?"completed":""}>
                        <div className="view">
                            <input className="toggle" type="checkbox" value={todo.isCompleted} onChange={this.handleOnComplete.bind(this, todo)}/>
                            <label>{todo.task}</label>
                            <button className="destroy" onClick={this.handleOnDelete.bind(this, todo)}></button>
                        </div>
                        <input className="edit" vvalue="Lorem ipsum dolar sit amut"/>
                    </li>);
            }.bind(this));
        }

        return (
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <ul className="todo-list">
                    {list}
                </ul>
            </section>
        );
    }
});
