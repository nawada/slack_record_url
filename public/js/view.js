var TableRow = React.createClass({
    render: function () {
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">
                    {this.props.date}
                </td>
                <td className="mdl-data-table__cell--non-numeric">
                    {this.props.user}
                </td>
                <td className="mdl-data-table__cell--non-numeric">
                    <a href={this.props.url} target="_blank">{this.props.title}</a>
                </td>
            </tr>
        );
    }
});
var Table = React.createClass({
    getInitialState() {
        return {rows: []};
    },
    componentDidMount() {
        var that = this;
        $.getJSON('/api/v1/infos', function (response) {
            var rows = [];
            response.forEach(function (r) {
                rows.push({
                    key: r.no,
                    date: r.reg_date,
                    user: r.user_name,
                    title: r.title,
                    url: r.url,
                })
            });
            that.setState({rows: rows});
        });
    },
    render() {
        return (
            <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">投稿日時</th>
                    <th className="mdl-data-table__cell--non-numeric">投稿者</th>
                    <th className="mdl-data-table__cell--non-numeric">タイトル</th>
                </tr>
                </thead>
                <tbody>
                {this.state.rows.map(function (row) {
                    return <TableRow key={row.key} date={row.date} user={row.user} title={row.title} url={row.url}/>
                })}
                </tbody>
            </table>
        );
    }
});

ReactDOM.render(<Table/>, document.getElementById('table-pos'));