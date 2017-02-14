import { Component } from "react"
import classNames from "classnames"
class Trigger extends Component {
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div className={classNames({
                [pcls]: true,
                [self.props.className]: true
            })}>
                <div className={`${pcls}-placeholder`}>{self.props.placeholder}</div>
                <div className={`${pcls}-value`}>
                    some
                </div>
                <span className={`${pcls}-switch`}></span>
            </div>
        )
    }
}
export default Trigger
