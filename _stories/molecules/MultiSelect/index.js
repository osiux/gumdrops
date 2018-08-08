import React, { Component } from 'react';
import { text } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import MultiSelect from '../../../components/molecules/MultiSelect';

const options = [
    {
        name: 'Anyone',
        value: 'anyone',
        selected: false
    },
    {
        name: 'Men',
        value: 'men',
        selected: false,
        options: [
            {
                name: 'John',
                value: 'john',
                selected: true
            },
            {
                name: 'Sam',
                value: 'sam',
                selected: false
            }
        ]
    },
    {
        name: 'Women',
        value: 'women',
        selected: false,
        options: [
            {
                name: 'Jane',
                value: 'jane',
                selected: true
            },
            {
                name: 'Sara',
                value: 'sara',
                selected: false
            }
        ]
    }
];

const sizeOptions = {
    sm: 'sm',
    xs: 'xs',
    'No Value': ''
};

class MultiSelectOptions extends Component {
    state = {
        options
    };

    handleCallback = (index, value, selected) => {
        const options = this.state.options.map((o, i) => ({
            ...o,
            selected: i === index ? selected : o.selected
        }));

        this.setState({
            options
        });
    };

    handleChange = newOptions => {
        this.setState({
            options: newOptions
        });
    };

    render() {
        return (
            <MultiSelect
                placeholder={text('Placeholder', 'Select an option')}
                size={optionalSelect('Size', sizeOptions, '')}
                callback={this.handleCallback} // @TODO: Deprecate?
                onChange={this.handleChange}
                options={this.state.options}
                className={text('className', '')}
            />
        );
    }
}

const component = () => <MultiSelectOptions />;

export default [readme, component];
