import { Component, PropTypes } from "react"
import classNames from "classnames"
import Body from "body.react"
import Align from "rc-align"
import Menu from "./Menu"
import Animate from "rc-animate"
import addEventListener from "add-dom-event-listener"
import util from "./util"
class Trigger extends Component {
    constructor (props) {
        super(props)
    }
    getTarget = () => {
        const self = this
        return self.refs.trigger
    }
    onAlign = (HTMLElement, align) => {
        const self = this
        HTMLElement.style.width = this.getTarget().clientWidth + 'px'
    }
    // https://github.com/react-component/menu/blob/d21490a7440c3850bff61ea2e835926d158f70bb/src/SubMenuStateMixin.jsx
    bindRootCloseHandlers() {
        if (!this._onDocumentClickListener) {
          this._onDocumentClickListener = addEventListener(document,
            'click', this.handleDocumentClick)
        }
    }
    unbindRootCloseHandlers() {
        if (this._onDocumentClickListener) {
            this._onDocumentClickListener.remove();
            this._onDocumentClickListener = null;
        }
    }
    handleDocumentClick = (e) => {
        const self = this
        // If the click originated from within this component
        // don't do anything.
        if (util.contains(self.refs.trigger, e.target) || util.contains(self.refs.menu.refs.wrap, e.target)) {
            return;
        }
        self.props.onDocumentClick()
    }
    componentDidUpdate () {
        if (this.props.open) {
            this.bindRootCloseHandlers()
        }
        else {
            this.unbindRootCloseHandlers()
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        return (
            <div ref="trigger" className={classNames({
                [pcls]: true,
                [self.props.className]: true,
                [`${pcls}--open`]: self.props.open
            })}>
                <div className={`${pcls}-placeholder`}>{self.props.placeholder}</div>
                <div className={`${pcls}-value`}>
                    some
                </div>
                <span className={`${pcls}-switch`} onClick={self.props.onSwitch} ></span>
                <Body>
                    <Animate animation={{}} >
                        {
                            self.props.open?
                            (
                                <Align
                                    target={self.getTarget}
                                    monitorWindowResize={true}
                                    align={{
                                        points: ['tl', 'bl'],
                                        offset: [0, 10]
                                    }}
                                    onAlign={self.onAlign}
                                >
                                    <Menu ref="menu" {...self.props} />
                                </Align>
                            ):null
                        }
                    </Animate>
                </Body>
            </div>
        )
    }
}
Trigger.propTypes = {
    onSwitch: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
}
export default Trigger
