import React from 'react';
import PropTypes from 'prop-types';
import Label from '../Label';

/** Text input with integrated label to enforce consistency in layout, error display, label placement, and required field marker. */
const SelectInput = ({
  htmlId, name, label, onChange, defaultOption, value, error, options }) => {
  return (
    <div className="form-group">
      <Label htmlFor={htmlId ? htmlId : name} label={label} />
      <div className="field">
        <select
          name={name}
          onChange={onChange}
          value={value}
          className="form-control"
          style={error && { border: 'solid 1px red' }}>
          <option value={""}>{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      </div>
      {error && <div className="error" style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string,

  /** Recommend setting this to match object's property so a single change handler can be used. */
  name: PropTypes.string.isRequired,

  /** label */
  label: PropTypes.string.isRequired,

  /** Function to call onChange */
  onChange: PropTypes.func.isRequired,

  /** Value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** String to display when error occurs */
  error: PropTypes.string,

  /** options to display */
  // options: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.array.isRequired,

  /** Default Value */
  defaultOption: PropTypes.string,
};

export default SelectInput;
