import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            open: undefined,
            onSwitch: function (open, event) {},
            prefixClassName: 'r-select',
            menuStyle: {},
            arrows: undefined,
            placeholder: '',
            value: undefined,
            onChange: function (value) {},
            header: undefined,
            footer: undefined,
            multiple: false,
            onScrollBottom: function() {},
            menuAlign: {
                points: ['tl', 'bl'],
                offset: [0, 10]
            },
            empty: (<div className="r-select-menu-list-empty">empty</div>),
            // themes: 'some' 'some light'
            themes: 'simple',
            render: {
                selection: {
                    multiple: function (self, multipleSelectedOptionArray) {
                        let pcls = self.props.prefixClassName
                        return (
                            <div className={`${pcls}-selection-multiple`}>
                                {
                                    multipleSelectedOptionArray.map(function (option, index) {
                                        return (
                                            <span key={index} className={`${pcls}-selection-multiple-item`}>
                                                <span className={`${pcls}-selection-multiple-item-text`}>{option.props.view || option.props.children}</span>
                                                <span className={`${pcls}-selection-multiple-item-remove`} data-r-select-element-selection-multiple-item-remove={true} onClick={function () {
                                                        self.props.multipleRemove(option.props.value)
                                                    }} ></span>
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                }
            }
        },
        propTypes: {
            open: PropTypes.bool,
            onSwitch: PropTypes.func,
            prefixClassName: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
                PropTypes.arrayOf(PropTypes.string),
                PropTypes.arrayOf(PropTypes.number)
            ]),
            placeholder: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            menuStyle: PropTypes.object,
            arrows: PropTypes.element,
            onChange: PropTypes.func,
            header: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            footer: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            multiple: PropTypes.bool,
            onScrollBottom: PropTypes.func,
            menuAlign: PropTypes.object,
            empty: PropTypes.element,
            themes: PropTypes.string
        }
    })
}
