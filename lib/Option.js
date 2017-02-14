import { Component, PropTypes } from "react"
import classNames from "classnames"
class Option extends Component {
    onClick = () => {
        const self = this
        if (self.props.disabled) {
            return
        }
        self.context.onChange(self.props.value)
        self.context.changed()
    }
    render() {
        const self = this
        const pcls = self.context.prefixClassName
        return (
            <div className={classNames({
                    [self.props.className]: true,
                    [`${pcls}-menu-list-item`]: true,
                    [`${pcls}-menu-list-item--disabled`]: self.props.disabled,
                    [`${pcls}-menu-list-item--selected`]: self.props.value.length !== 0 && self.props.value === self.context.value
                })} onClick={self.onClick}>{this.props.children}</div>
        )
    }
}
Option.defaultProps = {
    className: ''
}
Option.propTypes = {
    className: PropTypes.string
}
Option.contextTypes = {
    prefixClassName: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    changed: PropTypes.func
}
export default Option
