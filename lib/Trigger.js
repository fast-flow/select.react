import { Component, PropTypes } from "react"
import classNames from "classnames"
import Body from "body.react"
import Align from "rc-align"
import Menu from "./Menu"
import Animate from "rc-animate"
import addEventListener from "add-dom-event-listener"
import util from "util.react"
class Trigger extends Component {
    constructor (props) {
        super(props)
        this.state = {
            align: props.menuAlign
        }
    }
    getTarget = () => {
        const self = this
        return self.refs.trigger
    }
    onAlign = (HTMLElement, align) => {
        const self = this
        if (typeof self.props.menuStyle.width === 'undefined') {
            HTMLElement.style.width = this.getTarget().clientWidth + 'px'
        }
        // window 系统下某些情况会出现定位不准的情况，暂时使用触发 resize 解决。
        setTimeout(function() {
            if( document.createEvent) {
                var event = document.createEvent ("HTMLEvents");
                event.initEvent("resize", true, true);
                window.dispatchEvent(event);
            }
            else if(document.createEventObject) {
                if (typeof window.fireEvent === 'function') {
                    window.fireEvent("onresize")
                }
            }
        }, 0)
    }
    // https://github.com/react-component/menu/blob/d21490a7440c3850bff61ea2e835926d158f70bb/src/SubMenuStateMixin.jsx
    bindRootCloseHandlers = () => {
        if (!this._onDocumentClickListener) {
          this._onDocumentClickListener = addEventListener(document,
            'click', this.handleDocumentClick)
        }
    }
    unbindRootCloseHandlers = () => {
        if (this._onDocumentClickListener) {
            this._onDocumentClickListener.remove();
            this._onDocumentClickListener = null;
        }
    }
    handleDocumentClick = (e) => {
        const self = this
        // If the click originated from within this component
        // don't do anything.
        let containsTrigger = false
        let containsMenu = false
        if (typeof self.refs.trigger !== 'undefined') {
            containsTrigger = util.contains(self.refs.trigger, e.target)
        }
        if (typeof self.refs.menu !== 'undefined') {
            containsMenu = util.contains(self.refs.menu.refs.wrap, e.target)
        }
        if (containsTrigger || containsMenu) {
            return;
        }
        if (typeof self.props.open === 'boolean') {
            self.props.onSwitch(false, e)
        }
        else {
            self.props.onDocumentClick()
        }
    }
    componentDidUpdate  = () => {
        if (this.getOpen()) {
            this.bindRootCloseHandlers()
        }
        else {
            this.unbindRootCloseHandlers()
        }
    }
    rootClick = (e) => {
        const self = this
        // 多选删除被点击时不显示菜单
        if (e.target.getAttribute('data-r-select-element-selection-multiple-item-remove')) {
            return
        }
        if (e.target.getAttribute('data-r-select-clear')) {
            self.props.clearValue()
        }
        else {
            if (typeof self.props.open === 'boolean') {
                self.props.onSwitch(!self.props.open, e)
            }
            else {
                self.props.onStateSwitch()
            }
        }
    }
    getOpen = () => {
        const self = this
        let open = undefined
        if (typeof self.props.open === 'boolean') {
            open = self.props.open
        }
        else {
            open = self.props.stateOpen
        }
        return open
    }
    render() {
        const self = this
        const pcls = self.props.prefixClassName
        let singleSelectedPreview
        let multipleSelectedPreview
        let children = util.flatElement(self.props.children)
        let multipleSelectedOptionArray
        if (self.props.multiple) {
            multipleSelectedOptionArray = children.filter(function (option, index) {
                if (self.props.value.indexOf(option.props.value) !== -1) {
                    return true
                }
                return false
            })
            multipleSelectedPreview = self.props.render.selection.multiple(
                self,
                multipleSelectedOptionArray
            )
        }
        else {
            children.some(function (option, index) {
                if (option.props.value === self.props.value) {
                    singleSelectedPreview = option.props.view || option.props.children
                    return true
                }
            })
        }
        let selected
        if (self.props.multiple) {
            let values = self.props.value || []
            selected = (self.props.value.length !== 0)
        }
        else {
            if (self.props.value === 0) {
                selected = true
            }
            else {
                selected = self.props.value
            }

        }
        let open = self.getOpen()
        return (
            <div ref="trigger"
                className={classNames({
                    [pcls]: true,
                    [`${pcls}--open`]: open,
                    [`${pcls}--selected`]: selected,
                    [`${pcls}--multiple`]: self.props.multiple,
                    [util.themes(self.props)]: self.props.themes
                })}
                onClick={this.rootClick}
             >
                <div className={`${pcls}-selection`}>
                    <div className={`${pcls}-selection-placeholder`}>{self.props.placeholder}</div>
                    {
                        self.props.multiple?
                        multipleSelectedPreview
                        :
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
                            open?
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
    onStateSwitch: PropTypes.func.isRequired,
    open: PropTypes.bool
}
export default Trigger
