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
            open: typeof props.open === 'boolean'? props.open: false
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
            case 'DATA_R_SELECT-CLOSE':
                state.open = false
            break
            case 'SINGLE_CHENGED':
                state.open = false
            break
            case 'MULTIPLE_CHANGE':
                let multipleValue
                if (self.props.value.indexOf(action.payload.value) !== -1) {
                    multipleValue = self.props.value.filter(function (item) {
                        if (item === action.payload.value) {
                            return false
                        }
                        else {
                            return true
                        }
                    })
                }
                else {
                    multipleValue = self.props.value.concat(action.payload.value)
                }
                self.props.onChange(multipleValue)
            break
            case 'MULTIPLE_REMOVE':
                let removedValue = self.props.value.filter(function (value) {
                    if (value === action.payload.value) {
                        return false
                    }
                    return true
                })
                self.props.onChange(removedValue)
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
    singleChanged = (value, e) => {
        const self = this
        self.props.onChange(value)
        if (typeof self.props.open === 'boolean') {
            self.props.onSwitch(false, e)
        }
        else {
            self.ms({
                type: 'SINGLE_CHENGED',
                payload: {value: value}
            })
        }
    }
    multipleChange = (value) => {
        const self = this
        self.ms({
            type: 'MULTIPLE_CHANGE',
            payload: {value: value}
        })
    }
    onStateSwitch = () => {
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
    multipleRemove = (value) => {
        this.ms({
            type: 'MULTIPLE_REMOVE',
            payload: {
                value: value
            }
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
                onStateSwitch={self.onStateSwitch}
                stateOpen={self.state.open}
                onDocumentClick={self.onDocumentClick}
                dataRSelectClose={self.dataRSelectClose}
                singleChanged={self.singleChanged}
                multipleChange={self.multipleChange}
                clearValue={self.clearValue}
                multipleRemove={self.multipleRemove}
             />
        )
    }
}
props(Select)
export {Option}
export default Select
