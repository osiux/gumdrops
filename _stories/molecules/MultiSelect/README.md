# MultiSelect

The `<MultiSelect>` component can be used when you need a select component to support multiple options simultaneously.

The state of the multi-select is handled by the parent component. An `onChange` prop handler is provided that will be called with the updated list of options whenever there's a change. There's also a the `callback` prop that will be called with the changed option (Deprecated?!).

Multi-select also supports nested options [See Nested Options](#nested-options). When a parent option is selected, all children will be selected. If all children are selected, the parent will be selected too.

**NOTE**: This is a controlled component, so don't forget to pass the updated props to `MultiSelect` to see the changes. [See Example](#example)

## Props

| Prop        | Type       | Required | Description                                                                                               |
| ----------- | ---------- | -------- | --------------------------------------------------------------------------------------------------------- |
| options     | `Array`    | `True`   | The select options that will make up the dropdown menu. [See Options](#options)                           |
| callback    | `Function` |          | `Deprecated!?` Callback that is called with the changed item. Example: `callback(index, value, selected)` |
| onChange    | `Function` |          | Change handler will be called with the updated list of `option` based on user selection                   |
| placeholder | `String`   |          | Text that appears before any options are selected                                                         |
| size        | `String`   |          | Size that determines the scale of the UI elements                                                         |
| className   | `String`   |          | Additional classes to apply to the outermost element                                                      |

## Options

Options determine the construction of the multi-select menu. It takes an `Array` of `Objects` with the following shape:

```javascript
    {
        name: 'John', // will be displayed as the label next to the check box
        value: 'john', // the value associated with the option
        selected: true // the current selected state
    }
```

Here's an example of a possible set of options:

```javascript
const options = [
    {
        name: 'John',
        value: 'john',
        selected: true
    },
    {
        name: 'Sam',
        value: 'sam',
        selected: false
    },
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
];
```

### Nested Options

You may also have nested options. Here's an example:

```javascript
const options = [
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
```

## Example

```javascript
import MultiSelect from 'gumdrops/MultiSelect';

class MyComponent extends Component {
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
                className="cool-options"
                onChange={this.handleChange}
                options={this.state.options}
                size="md"
            />
        );
    }
}
```
