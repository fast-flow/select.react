import { Component, PropTypes } from "react"
import classNames from "classnames"
class Menu extends Component {
    getChildContext() {
        return {
            props: this.props
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
            style={self.props.menuStyle}
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
    props: PropTypes.object
}
export default Menu
