import { Component, PropTypes } from "react"
import classNames from "classnames"
class Option extends Component {
    onClick = () => {
        const self = this
        if (self.props.disabled) {
            return
        }
        if (self.context.props.multiple) {
            self.context.props.multipleChange(self.props.value)
        }
        else {
            self.context.props.singleChanged(self.props.value)
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
        return (
            <div className={classNames({
                    [self.props.className]: true,
                    [`${pcls}-menu-list-item`]: true,
                    [`${pcls}-menu-list-item--disabled`]: self.props.disabled,
                    [`${pcls}-menu-list-item--selected`]: selected
                })} onClick={self.onClick}>{this.props.children}</div>
        )
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
