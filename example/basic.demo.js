var React = require('react')
var Select = require('select.react').default
var Option = require('select.react').Option
var App = React.createClass({
    getInitialState: function () {
        return {
            value: "a",
            multipleValue: ["b", "c", "d"]
        }
    },
    render: function () {
        var self = this
        return (
            <div>
                empty:
                 <Select
                     menuStyle={{width: 100}}
                     arrows={(
                         <div className="r-select-menu-arrows" >{/* r-select-menu-arrows--center */}</div>
                     )}
                     empty={(<em>无数据</em>)}
                      >
                 </Select>
                 <hr />
                 <Select  placeholder="请选择" value={self.state.multipleValue} multiple onChange={function (value) {
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
                     <Option value="c" view="JUDY" >judy</Option>
                     <Option value="d" view={(<em>Tim</em>)} >tim</Option>
                     <Option value="e" >jack</Option>
                     <Option value="f" >title</Option>
                     <Option value="g" >ppk</Option>
                     <Option value="h" >hans</Option>
                     <Option value="i" >orly</Option>
                     <Option value="j" >efil</Option>
                     <Option value="k" >etude</Option>
                     <Option value="l" >liza</Option>
                 </Select>
                 <hr />
                 <Select placeholder="请选择" value={[]} multiple onChange={function () {}} >
                 </Select>
                 <hr />
                 <Select value={self.state.value} placeholder="请选择一项" onChange={function (value) {
                         self.setState({
                             value: value
                         })
                     }}
                 >
                     <Option value="">请选择</Option>
                     <Option value="a" >nimo</Option>
                     <Option value="b" view="NICO" >nico</Option>
                     <Option value="c" >judy</Option>
                     <Option value="d" className="myOption" >tim</Option>
                     <Option value="4194291487128419429" disabled className="titleOption" >title</Option>
                     <Option value="g" >tim</Option>
                     <Option value="h" >hans</Option>
                     <Option value="i" >orly</Option>
                     <Option value="j" >tim</Option>
                     <Option value="k" >etude</Option>
                     <Option value="l" >liza</Option>
                     <Option value={0} >0</Option>
                     <Option value={"0"} >"0"</Option>
                 </Select>
                 <hr />
                 <Select
                     themes="min"
                     value={self.state.value}
                     placeholder="请选择一项"
                     onChange={function (value) {
                         self.setState({
                             value: value
                         })
                     }}
                 >
                     <Option value="">请选择</Option>
                     <Option value="a" >nimo</Option>
                     <Option value="g" >tim</Option>
                     <Option value="h" >hans</Option>
                     <Option value="i" >orly</Option>
                     <Option value="j" >tim</Option>
                     <Option value="k" >etude</Option>

                 </Select>
             </div>
        )
    }
})
module.exports = App
