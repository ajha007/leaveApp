import React from 'react';
import '../../../../assets/css/styles.css';

const Checkbox = props => (
    <div className="form-group">
        <label className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input"/>
            <span className="custom-control-label">Remember me</span>
        </label>
    </div>
);

export default Checkbox;