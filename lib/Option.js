import { Component, PropTypes } from "react"
import classNames from "classnames"
class Option extends Component {
    onClick = (e) => {
        const self = this
        if (self.props.disabled) {
            return
        }
        if (self.context.props.multiple) {
            self.context.props.multipleChange(self.props.value, e)
        }
        else {
            self.context.props.singleChanged(self.props.value, e)
        }
    }
    render() {
        const self = this
        let props = self.context.props || {}
        const pcls = props.prefixClassName
        let selected
        if (props.multiple) {
            selected = (self.context.props.value.indexOf(self.props.value) !== -1)
        }
        else {
            selected = (self.props.value.length !== 0 && self.props.value === self.context.props.value)
        }
        let className = classNames({
            [self.props.className]: true,
            [`${pcls}-menu-list-item`]: true,
            [`${pcls}-menu-list-item--disabled`]: self.props.disabled,
            [`${pcls}-menu-list-item--selected`]: selected
        })
        return self.context.props.render.option(self, className)
    }
}
Option.defaultProps = {
    className: '',
    value: ''
}
Option.propTypes = {
    className: PropTypes.string
}
Option.contextTypes = {
    props: PropTypes.object
}
export default Option
