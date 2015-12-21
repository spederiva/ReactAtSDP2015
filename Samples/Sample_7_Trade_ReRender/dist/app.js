(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var WatchStock = React.createClass({
    displayName: "WatchStock",

    getInitialState: function () {
        return { symbol: "" };
    },
    watchStock: function () {
        this.props.watchStockHandler(this.state.symbol);
        this.setState({ symbol: '' });
    },
    handleChange: function (event) {
        this.setState({ symbol: event.target.value });
    },
    render: function () {
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "p",
                null,
                "Available stocks for demo: MCD, BA, BAC, LLY, GM, GE, UAL, WMT, AAL, JPM"
            ),
            React.createElement(
                "div",
                { className: "input-group" },
                React.createElement("input", { type: "text", className: "form-control", placeholder: "Comma separated list of stocks to watch...", value: this.state.symbol, onChange: this.handleChange }),
                React.createElement(
                    "span",
                    { className: "input-group-btn" },
                    React.createElement(
                        "button",
                        { className: "btn btn-default", type: "button", onClick: this.watchStock },
                        React.createElement("span", { className: "glyphicon glyphicon-eye-open", "aria-hidden": "true" }),
                        " Watch"
                    )
                )
            )
        );
    }
});

var StockRow = React.createClass({
    displayName: "StockRow",

    unwatch: function () {
        this.props.unwatchStockHandler(this.props.stock.symbol);
    },
    render: function () {
        var lastClass = '',
            changeClass = 'change-positive',
            iconClass = 'glyphicon glyphicon-triangle-top';
        if (this.props.stock === this.props.last) {
            lastClass = this.props.stock.change < 0 ? 'last-negative' : 'last-positive';
        }
        if (this.props.stock.change < 0) {
            changeClass = 'change-negative';
            iconClass = 'glyphicon glyphicon-triangle-bottom';
        }
        return React.createElement(
            "tr",
            null,
            React.createElement(
                "td",
                null,
                this.props.stock.symbol
            ),
            React.createElement(
                "td",
                null,
                this.props.stock.open
            ),
            React.createElement(
                "td",
                { className: lastClass },
                this.props.stock.last
            ),
            React.createElement(
                "td",
                { className: changeClass },
                this.props.stock.change,
                " ",
                React.createElement("span", { className: iconClass, "aria-hidden": "true" })
            ),
            React.createElement(
                "td",
                null,
                this.props.stock.high
            ),
            React.createElement(
                "td",
                null,
                this.props.stock.low
            ),
            React.createElement(
                "td",
                null,
                React.createElement(
                    "button",
                    { type: "button", className: "btn btn-default btn-sm", onClick: this.unwatch },
                    React.createElement("span", { className: "glyphicon glyphicon-eye-close", "aria-hidden": "true" })
                )
            )
        );
    }
});

var StockTable = React.createClass({
    displayName: "StockTable",

    render: function () {
        var items = [];
        for (var symbol in this.props.stocks) {
            var stock = this.props.stocks[symbol];
            items.push(React.createElement(StockRow, { key: stock.symbol, stock: stock, last: this.props.last, unwatchStockHandler: this.props.unwatchStockHandler }));
        }
        return React.createElement(
            "div",
            { className: "row" },
            React.createElement(
                "table",
                { className: "table-hover" },
                React.createElement(
                    "thead",
                    null,
                    React.createElement(
                        "tr",
                        null,
                        React.createElement(
                            "th",
                            null,
                            "Symbol"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Open"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Last"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Change"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "High"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Low"
                        ),
                        React.createElement(
                            "th",
                            null,
                            "Unwatch"
                        )
                    )
                ),
                React.createElement(
                    "tbody",
                    null,
                    items
                )
            )
        );
    }
});

var HomePage = React.createClass({
    displayName: "HomePage",

    watchStock: function (symbols) {
        symbols = symbols.replace(/ /g, '');
        var arr = symbols.split(",");
        feed.watch(arr);
    },
    unwatchStock: function (symbol) {
        feed.unwatch(symbol);
    },
    render: function () {
        return React.createElement(
            "div",
            null,
            React.createElement(WatchStock, { watchStockHandler: this.watchStock }),
            React.createElement(StockTable, { stocks: this.props.stocks, last: this.props.lastStock, unwatchStockHandler: this.unwatchStock }),
            React.createElement(
                "div",
                { className: "row" },
                React.createElement(
                    "div",
                    { className: "alert alert-warning", role: "alert" },
                    "All stock values are fake and changes are simulated. Do not trade based on the above data."
                )
            )
        );
    }
});

var stocks = {};

function render(stock) {
    stocks[stock.symbol] = stock;

    ReactDOM.render(React.createElement(HomePage, { stocks: stocks, lastStock: stock }), document.getElementById("example"));
}

feed.watch(['MCD', 'BA', 'BAC', 'LLY', 'GM', 'GE', 'UAL', 'WMT', 'AAL', 'JPM']);
feed.onChange(render);

},{}]},{},[1]);
