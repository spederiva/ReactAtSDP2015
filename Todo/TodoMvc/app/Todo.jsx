/**
 * Created by sebastianp on 16/12/2015.
 */
"use strict";

var Todo = React.createClass({
    getInitialState: function () {
        return {
            newToDo: "",
            TODO_LIST: [],
            filterIsComplete: null
        }
    },

    componentDidMount: function () {
        var router = Router({
            '/': this.setState.bind(this, {filterIsComplete: null}),
            'active': this.setState.bind(this, {filterIsComplete: 'active'}),
            'completed': this.setState.bind(this, {filterIsComplete: 'completed'}),
        });

        router.init('/');

        this.getData();
    },

    getData(){
      return $.get('data/data.json')
        .then(function(data){
            this.setState({
                TODO_LIST: data
            });
        }.bind(this))
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

        this.setState({TODO_LIST: list});
    },

    render: function () {
        var
            filterIsComplete = this.state.filterIsComplete === "completed",
            list = this.state.filterIsComplete === null ? this.state.TODO_LIST :
                this.state.TODO_LIST.filter(function (item) {
                    return item.isCompleted === filterIsComplete;
                });

        return (
            <div>
                <header className="header">
                    <input value={this.state.newToDo} onChange={this.handleOnChange} onKeyDown={this.handleOnKeyDown} className="new-todo" placeholder="What needs to be done?"/>
                </header>

                <TodoList list={list} onComplete={this.handleOnComplete} onDelete={this.handleOnDelete}/>

                <Footer list={list} currentFilter={this.state.filterIsComplete}/>
            </div>
        );
    }
});

ReactDOM.render(
    <Todo/>,
    document.getElementById("container")
);