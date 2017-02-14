import "./index.css"
import { Component, PropTypes } from "react"
import props from "./props"
import classNames from "classnames"
import Option from "./Option"
import Trigger from "./Trigger"
class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    ms = (action) => {
        const self = this
        let state = self.state
        let props = self.props
        switch(action.type) {
            case 'SWITCH':
                state.open = !state.open
            break
            case 'DOCUMENT_CLICK_CLOSE':
                state.open = false
            break
            default:
            throw new Error('node_modules/select.react/lib/index.js: Not find action.type')
        }
        self.setState(state)
    }
    onDocumentClick = () => {
        const self = this
        self.ms({
            type: 'DOCUMENT_CLICK_CLOSE'
        })
    }
    onSwitch = () => {
        const self = this
        self.ms({
            type: 'SWITCH'
        })
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <Trigger {...self.props} onSwitch={self.onSwitch} open={self.state.open}  onDocumentClick={self.onDocumentClick} />
        )
    }
}
props(Select)
export {Option}
export default Select
