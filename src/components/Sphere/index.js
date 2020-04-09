import React from 'react';
import './Sphere.scss'
import PropTypes from "prop-types";
import data from '../../resources/data.json'
import SpherePoint from "./components/SpherePoint";

class Sphere extends React.Component{

    constructor(props) {
        super(props);
        this.boxRelative = React.createRef();
    }

    state = {
        data: data.items.slice(0, this.props.range),
        radius: 250,
        relative: 'matrix3d(1, 0, -0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.range !== this.props.range) {
            let sliceData = data.items.slice(0, this.props.range);
            let relativeMatrix = getComputedStyle(this.boxRelative.current)["transform"];
            this.setState({
                ...this.state, data: sliceData, relative: relativeMatrix
            })
        }
    }


    render() {
        return (
            <div className={'sphere__box'}>
                <div className="sphere__scene">
                    <div ref={this.boxRelative} className={'sphere__shape'}>
                        {this.state.data.map((point, index) => {
                            return <SpherePoint
                                key={index}
                                radius={this.state.radius}
                                data={point}
                                relative={this.state.relative}
                                show={this.props.links > index} />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

Sphere.propTypes = {
    range: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    links: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])
};


export default Sphere;
