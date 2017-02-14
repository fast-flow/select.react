import { Component, PropTypes } from "react"
import classNames from "classnames"
class Menu extends Component {
    getChildContext() {
        return {
            prefixClassName: this.props.prefixClassName
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div ref="wrap" className={classNames({
                [`${pcls}-menu`]: true,
                [self.props.menuClassName]: true
            })} >
                {
                    self.props.header?
                    (
                        <div className={classNames({
                            [`${pcls}-menu-header`]: true
                        })}>
                            {self.props.header}
                        </div>
                    ):null
                }
                <div className={`${pcls}-menu-body`}>
                    <div className={`${pcls}-menu-list`}>
                        {self.props.children}
                    </div>
                </div>
                {
                    self.props.footer?
                    (
                        <div className={classNames({
                            [`${pcls}-menu-footer`]: true
                        })}>
                            {self.props.footer}
                        </div>
                    ):null
                }
            </div>

        )
    }
}
Menu.childContextTypes = {
    prefixClassName: PropTypes.string
}
export default Menu
