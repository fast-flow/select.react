import { Component, PropTypes } from "react"
import classNames from "classnames"
class Menu extends Component {
    getChildContext() {
        return {
            prefixClassName: this.props.prefixClassName,
            value: this.props.value,
            onChange: this.props.onChange,
            changed: this.props.changed
        }
    }
    rootClick = (e) => {
        const self = this
        if (e.target.getAttribute('data-r-select-close')) {
            self.props.dataRSelectClose()
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        let children = self.props.children || []
        return (
            <div ref="wrap" className={classNames({
                [`${pcls}-menu`]: true,
                [self.props.menuClassName]: true
            })}
            onClick={self.rootClick}
             >
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
                        {
                            children.length?
                            children:
                            self.props.empty
                        }
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
    prefixClassName: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    changed: PropTypes.func
}
export default Menu
