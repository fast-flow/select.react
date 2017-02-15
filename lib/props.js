import { PropTypes } from "react"
import extend from "extend"
export default function (component) {
    extend(true, component, {
        defaultProps: {
            prefixClassName: 'r-select',
            className: 'r-select--simple',
            menuClassName: 'r-select-menu--simple',
            placeholder: '',
            value: undefined,
            onChange: function (value) {},
            header: undefined,
            footer: undefined,
            multiple: false,
            menuAlign: {
                points: ['tl', 'bl'],
                offset: [0, 10]
            },
            empty: (<div className="r-select-menu-list-empty">empty</div>)
        },
        propTypes: {
            prefixClassName: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.array
            ]),
            placeholder: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            className: PropTypes.string,
            menuClassName: PropTypes.string,
            onChange: PropTypes.func,
            header: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            footer: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.element
            ]),
            multiple: PropTypes.boolean,
            menuAlign: PropTypes.object,
            empty: PropTypes.element
        }
    })
}
