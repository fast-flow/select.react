import { Component, PropTypes } from "react"
import classNames from "classnames"
import util from "util.react"
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
        if (!Array.isArray(children)) {
            children = [children]
        }
        return (
            <div ref="wrap" className={classNames({
                [`${pcls}-menu`]: true,
                [util.themes(self.props, '-menu')]: true
            })}
            onClick={self.rootClick}
            style={self.props.menuStyle}
             >
             {self.props.arrows}
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
                <div className={`${pcls}-menu-body`} onScroll={function(e) {
                        let inBottom = (e.target.scrollTop + e.target.offsetHeight) === e.target.scrollHeight
                        if (inBottom) {
                            // if (typeof self.__onScrollBottomTime !== 'undefined') {
                            //     // 250毫秒频率控制
                            //     console.log(new Date().getTime() - self.__onScrollBottomTime)
                            //     if ((new Date().getTime() - self.__onScrollBottomTime) < 1000) {
                            //         console.log('stop')
                            //         return
                            //     }
                            //     else {
                            //         console.log('pass')
                            //     }
                            // }
                            self.__onScrollBottomTime = new Date().getTime()
                            self.props.onScrollBottom()
                        }
                    }}  >
                    <div ref="menuList" className={`${pcls}-menu-list`}>
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
