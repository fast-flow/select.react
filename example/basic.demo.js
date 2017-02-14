var React = require('react')
var Select = require('select.react').default
var Option = require('select.react').Option
var Align = require('rc-align')
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

                <div ref="demo" style={{width: 100, border: "1px solid red"}} >
                    ABCD
                </div>
                <Align
                   target={this.getTarget}
                   monitorWindowResize={true}
                   align={
                       {points: ['tc', 'bc']}
                   }
                 >
                   <div
                     style={{
                       position: 'absolute',
                       width: 50,
                       height: 50,
                       background: 'yellow',
                     }}
                   >
                     source
                   </div>
                 </Align>
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
