import React from 'react';

const Delta = (props) => {
    return (
        <div>
            <input value={props.delta} id={props.id} onChange={props.handleChange} />
        </div>
    );
};

export default Delta;