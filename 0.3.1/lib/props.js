import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
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
            themes: 'simple'
        },
        propTypes: {
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
