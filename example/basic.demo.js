var React = require('react')
var Select = require('select.react').default
var Option = require('select.react').Option
var App = React.createClass({
    getInitialState: function () {
        return {
            value: "a",
            multipleValue: []
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                 <Select value={self.state.value} placeholder="请选择一项" onChange={function (value) {
                         console.log(value)
                         self.setState({
                             value: value
                         })
                     }}
                      >
                     <Option value="" >请选择</Option>
                     <Option value="a" >nimo</Option>
                     <Option value="b" >nico</Option>
                     <Option value="c" >judy</Option>
                     <Option value="d" >tim</Option>
                     <Option value="g" >tim</Option>
                     <Option value="h" >hans</Option>
                     <Option value="i" >orly</Option>
                     <Option value="j" >tim</Option>
                     <Option value="k" >etude</Option>
                     <Option value="l" >liza</Option>
                 </Select>
                 <hr />
                     <Select value={self.state.multipleValue} multiple onChange={function (value) {
                             self.setState({
                                 multipleValue: value
                             })
                         }}
                         header={(
                             <div>
                                 <span>选择多项</span>
                                 <span className="r-select-menu-header-close" data-r-select-close="true" ></span>
                             </div>
                         )}
                          >
                         <Option value="a" >nimo</Option>
                         <Option value="b" >nico</Option>
                         <Option value="c" >judy</Option>
                         <Option value="d" >tim</Option>
                         <Option value="e" >jack</Option>
                         <Option value="f" >title</Option>
                         <Option value="g" >tim</Option>
                         <Option value="h" >hans</Option>
                         <Option value="i" >orly</Option>
                         <Option value="j" >tim</Option>
                         <Option value="k" >etude</Option>
                         <Option value="l" >liza</Option>
                     </Select>
             </div>
        )
    }
})
module.exports = App
