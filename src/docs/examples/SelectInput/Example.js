import React from 'react';
import SelectInput from 'r-components/SelectInput';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        selectField: ''
      },
      error: 'Not empty',
    };
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      user: { ...this.state.user, [name]: value },
      error: null
    });
  }

  render() {
    console.log(this.state.user);
    return (
      <SelectInput
        name="selectField"
        label="Select Field"
        value={this.state.user.selectField}
        defaultOption="Select Option"
        options={
          [
            {
              value: 'option1',
              text: 'option 1'
            },
            {
              value: 'option2',
              text: 'option 2'
            },
            {
              value: 'option3',
              text: 'option 3'
            },
          ]}
        onChange={this.onChange}
        error={this.state.error}
      />
    );
  }
}
