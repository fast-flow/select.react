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
        this.state = {
            align: this.props.menuAlign
        }
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
    rootClick = (e) => {
        const self = this
        if (e.target.getAttribute('data-r-select-clear')) {
            self.props.clearValue()
        }
        else {
            self.props.onSwitch()
        }
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        let singleSelectedPreview
        let multipleSelectedPreview
        let children = self.props.children || []
        if (self.props.multiple) {
            multipleSelectedPreview = children.filter(function (option, index) {
                if (self.props.value.indexOf(option.props.value) !== -1) {
                    return true
                }
                return false
            }).map(function (option, index) {
                return (
                    <span key={index} className={`${pcls}-selection-multiple-item`}>
                        <span className={`${pcls}-selection-multiple-item-text`}>{option.props.children}</span>
                        <span className={`${pcls}-selection-multiple-item-remove`} onClick={function () {
                                self.props.multipleRemove(option.props.value)
                            }} ></span>
                    </span>
                )
            })
        }
        else {
            children.some(function (option, index) {
                if (option.props.value === self.props.value) {
                    singleSelectedPreview = option.props.children
                    return true
                }
            })
        }
        return (
            <div ref="trigger"
                className={classNames({
                    [pcls]: true,
                    [self.props.className]: true,
                    [`${pcls}--open`]: self.props.open,
                    [`${pcls}--selected`]: self.props.value,
                    [`${pcls}--multiple`]: self.props.multiple
                })}
                onClick={this.rootClick}
             >
                <div className={`${pcls}-selection`}>
                    <div className={`${pcls}-selection-placeholder`}>{self.props.placeholder}</div>
                    {
                        self.props.multiple?
                        (
                            <div className={`${pcls}-selection-multiple`}>
                                {multipleSelectedPreview}
                            </div>
                        ):
                        (
                            <div className={`${pcls}-selection-value`}>
                                {singleSelectedPreview}
                            </div>
                        )
                    }
                    <span className={`${pcls}-selection-clear`} data-r-select-clear="true" ></span>
                    <span className={`${pcls}-selection-switch`}></span>
                </div>
                <Body>
                    <Animate animation={{}} >
                        {
                            self.props.open?
                            (
                                <Align
                                    target={self.getTarget}
                                    monitorWindowResize={true}
                                    align={self.state.align}
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
