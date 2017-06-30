var Record2 = React.createClass({

    state: {
        record: null
    },

    propTypes: {
        record: React.PropTypes.object.isRequired
    },

    componentDidMount: function() {
        this.setState({record: this.props.record})
    },

    render: function() {
        return (
            <tr>
                <td>{this.props.record.date}</td>
                <td>{this.props.record.title}</td>
                <td>{amountFormat(this.props.record.amount)}</td>
            </tr>
        );
    }
});
