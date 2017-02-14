var React = require('react')
var Select = require('select.react').default
var Option = require('select.react').Option
var App = React.createClass({
    getInitialState: function () {
        return {
            value: "a"
        }
    },
    getTarget: function () {
        return this.refs.demo
    },
    render: function () {
        var self = this
        return (
            <div>
                 <Select value={self.state.value} onChange={function (value) {
                         self.setState({
                             value: value
                         })
                     }} >
                     <Option value="a" >nimo</Option>
                     <Option value="b" >nico</Option>
                 </Select>
            </div>
        )
    }
})
module.exports = App
