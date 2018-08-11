import React, { Component } from 'react';
import { text } from '@storybook/addon-knobs';
import { optionalSelect } from '../../../components/utils/optionalSelect';
import { action } from '@storybook/addon-actions';

import readme from './README.md';
import MultiSelect from '../../../components/molecules/MultiSelect';

const options = [
    {
        name: 'All Pets',
        value: 0,
        selected: false
    },
    {
        name: 'Dogs',
        value: 1,
        selected: false,
        options: [
            {
                name: 'Lassie',
                value: 1,
                selected: true
            },
            {
                name: 'Snoopy',
                value: 2,
                selected: true
            },
            {
                name: 'Toto',
                value: 3,
                selected: false
            },
            {
                name: 'Brian Griffin',
                value: 3,
                selected: false
            }
        ]
    },
    {
        name: 'Cats',
        value: 'cats',
        selected: false,
        options: [
            {
                name: 'Grumpy Cat',
                value: 1,
                selected: true
            },
            {
                name: 'Lil Bub',
                value: 2,
                selected: true
            },
            {
                name: 'Hello Kitty',
                value: 3,
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
                onChange={this.handleChange}
                options={this.state.options}
                className={text('className', '')}
            />
        );
    }
}

const component = () => <MultiSelectOptions />;

export default [readme, component];
