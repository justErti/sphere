import React from 'react';
import PropTypes from "prop-types";
import InputRange from "../UI/InputRange";

const Options = (props) => {

    const rangeChangeHandler = (event) => {
        props.onChange(event.target.value, props.links)
    };

    const linksChangeHandler = (event) => {
        props.onChange(props.range, event.target.value)
    };

    return (
        <div>
            <InputRange title={'Points'} value={props.range} onChange={rangeChangeHandler} max={400} />
            <InputRange title={'Links'} value={props.links} onChange={linksChangeHandler} max={props.range / 5} />
        </div>
    );
};

Options.propTypes = {
    range: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    links: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange: PropTypes.func
};

export default Options;
