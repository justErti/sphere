import React from 'react';
import PropTypes from "prop-types";

const InputRange = (props) => {
    return (
        <div>
            <label>
                <span>{props.title}</span><br/>
                <input type="range" value={props.value} onChange={props.onChange} max={props.max} />
            </label>
        </div>
    );
};

InputRange.propTypes = {
    title: PropTypes.string,
    max: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func
};


export default InputRange;
