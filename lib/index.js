import "./index.css"
import { Component } from "react"
import props from "./props"
import classNames from "classnames"

import Trigger from "./Trigger"
class Select extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <Trigger {...self.props} />
        )
    }
}
props(Select)
export default Select
