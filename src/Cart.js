import React from 'react';
import Summary from './Summary';
import Total from './Total';

function Cart(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <Summary format={props.format} selected={props.selected} />
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <Total format={props.format} selected={props.selected}/>
            </div>
        </section>
    );
};

export default Cart;