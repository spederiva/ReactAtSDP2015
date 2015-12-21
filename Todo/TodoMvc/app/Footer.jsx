/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

window.Footer = React.createClass({
    render: function () {
        var itemCount = this.props.list.reduce(function (acumm, task) {
            var res = acumm + !task.isCompleted;

            return acumm + !task.isCompleted;
        }, 0);


        return (
            <footer className="footer">
                <span className="todo-count">
                    <strong>{itemCount}</strong>
                    <span> </span>
                    <span>item/s</span>
                    <span> left</span>
                </span>
                <ul className="filters">
                    <li><a href="#/" className={this.props.currentFilter===null?'selected':''}>All</a></li>
                    <span> </span>
                    <li><a href="#/active" className={this.props.currentFilter==='active'?'selected':''}>Active</a></li>
                    <span> </span>
                    <li><a href="#/completed" className={this.props.currentFilter==='completed'?'selected':''}>Completed</a></li>
                </ul>
            </footer>
        );
    }
});
