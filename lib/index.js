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
            case 'CHENGED':
                state.open = false
            break
            case 'DATA_R_SELECT-CLOSE':
                state.open = false
            break
            case 'CLEAR_VALUE':
                if (self.props.multiple) {
                    self.props.onChange([])
                }
                else {
                    self.props.onChange(undefined)
                }

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
    changed = () => {
        const self = this
        self.ms({
            type: 'CHENGED'
        })
    }
    onSwitch = () => {
        const self = this
        self.ms({
            type: 'SWITCH'
        })
    }
    dataRSelectClose = () => {
        const self = this
        self.ms({
            type: 'DATA_R_SELECT-CLOSE'
        })
    }
    clearValue = (e) => {
        const self = this
        self.ms({
            type: 'CLEAR_VALUE'
        })
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <Trigger
                {...self.props}
                onSwitch={self.onSwitch}
                open={self.state.open}
                onDocumentClick={self.onDocumentClick}
                dataRSelectClose={self.dataRSelectClose}
                changed={self.changed}
                clearValue={self.clearValue}
             />
        )
    }
}
props(Select)
export {Option}
export default Select
