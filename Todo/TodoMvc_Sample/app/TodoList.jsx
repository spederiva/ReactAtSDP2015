/**
 * Created by sebastianp on 21/12/2015.
 */
"use strict";

window.TodoList = React.createClass({
    render: function () {
        var
            rows = this.props.list.map((item)=> {
                return (
                    <li key={item.id}>
                        <div className="view">
                            <input className="toggle" type="checkbox"/>
                            <label>{item.task}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                )
            });


        return (
            <section className="main">
                <ul className="todo-list">
                    {rows}
                </ul>
            </section>
        );
    }
});
