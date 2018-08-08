import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';
import MultiSelectMenuItem from './MultiSelectMenuItem';

class MultiSelectSubMenu extends Component {
    static propTypes = {
        options: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                value: PropTypes.any,
                selected: PropTypes.bool
            })
        ),
        callback: PropTypes.func.isRequired
    };

    state = {
        isOpen: false
    };

    _toggleOpen = event => {
        event.stopPropagation();
        this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
    };

    render() {
        const { isOpen } = this.state;
        const { options, onSubChange, ...rest } = this.props;
        return (
            <MultiSelectMenuItem
                {...rest}
                isActive={isOpen}
                subOptions={options}
                onClick={this._toggleOpen}>
                <ul
                    className="gds-multi-select__sub-menu"
                    onClick={event => event.stopPropagation()}>
                    {options.map(({ name, value, selected }, index) => (
                        <li key={`item-${index}`} className="gds-multi-select__menu-item">
                            <div className="gds-multi-select__menu-link">
                                <div className="gds-form-group gds-multi-select__option">
                                    <Checkbox
                                        label={name}
                                        checked={selected}
                                        onChange={() => {
                                            onSubChange({ index, value, selected: !selected });
                                        }}
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </MultiSelectMenuItem>
        );
    }
}

MultiSelectSubMenu.propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    value: PropTypes.any,
    selected: PropTypes.bool,
    children: PropTypes.node,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            value: PropTypes.any,
            selected: PropTypes.bool
        })
    ).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubChange: PropTypes.func.isRequired
};

export default MultiSelectSubMenu;
