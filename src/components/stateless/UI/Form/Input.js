import React from 'react';
import '../../../../assets/css/styles.css';

const Input = props => (
        <div className="form-group">
            <label className="form-label">
                {props.label}
                {props.children}
            </label>
            <input type={props.type} className="form-control" onChange={event => props.onchange(event)} name={props.name} placeholder={props.pholder} />
        </div>
    );

export default Input;