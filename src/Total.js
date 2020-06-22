import React from 'react';

function Total(props) {
    const total = Object.keys(props.selected).reduce(
        (acc, curr) => acc + props.selected[curr].cost,
        0
    );
       
    return (
        <div className="summary__total__value">
            {props.format(total)}
        </div>
    );
};

export default Total;