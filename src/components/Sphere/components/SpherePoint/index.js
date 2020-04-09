import React from 'react';
import './SpherePoint.scss'
import PropTypes from "prop-types";

class SpherePoint extends React.Component {

    state = {
        position: this.positionCalc(),
        relative: this.relativeCalc()
    };

    relativeCalc() {
        let relMString = this.props.relative;
        relMString = relMString.replace('matrix3d(', '').replace(')', '')

        let relM = relMString.split(',');
        relM[2] = (Number.parseFloat(relM[2]) * -1);
        relM[8] = (Number.parseFloat(relM[8]) * -1);

        return 'matrix3d(' + relM.join(',') + ')'
    }

    positionCalc() {
        let pitch = (Math.random() * 360) * (Math.PI / 180);
        let yaw = (Math.random() * 360) * (Math.PI / 180);

        let cosPitch = Math.cos(pitch);
        let x = this.props.radius * cosPitch * Math.cos(yaw);
        let y = this.props.radius * Math.sin(yaw) * cosPitch;
        let z = this.props.radius * Math.sin(pitch);

        return {x: x, y: y, z: z};
    };


    render() {
        return (
            <div
                className={
                    ['sphere__point', this.props.data.filled ? 'sphere__point__filled' : null].join(" ")
                }
                style={{
                    transform: `translate3d(
                    ${this.state.position.x}px,
                    ${this.state.position.y}px,
                    ${this.state.position.z}px)
                    ${this.state.relative}`
                }}>
                <div className={'sphere__point__border'}>
                    {this.props.show ? <a className={'sphere__point__title'} target={'_blank'} href={this.props.data.link}>{this.props.data.title}</a> : null}
                </div>
            </div>
        );
    }
}

SpherePoint.propTypes = {
    relative: PropTypes.string,
    radius: PropTypes.number,
    data: PropTypes.object,
    show: PropTypes.bool
};


export default SpherePoint;
