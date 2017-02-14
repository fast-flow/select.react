import { Component, PropTypes } from "react"
class Option extends Component {
    render() {
        console.log(this.context)
        const plcs = this.context.prefixClassName
        return (
            <div className={`${plcs}-menu-list-item`}>{this.props.children}</div>
        )
    }
}
Option.contextTypes = {
    prefixClassName: PropTypes.string
}
export default Option
