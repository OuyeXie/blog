var Records2 = React.createClass({

    state: {
        records: null
    },

    propTypes: {
        data: React.PropTypes.array.isRequired
    },

    componentDidMount: function() {
       this.setState({records: this.props.data})
    },

    render: function () {
        console.log(this.props)

        var records = this.props.data.map(function(record) {
            return (<Record2 key={record.title} record={record} />)
        });

        return (
            <div className="records">
                <h2 className="title"> Records2 </h2>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <td>date</td>
                        <td>title</td>
                        <td>amount</td>
                    </tr>
                    </thead>
                    <tbody>
                        {records}
                    </tbody>
                </table>
            </div>
        );
    }
});