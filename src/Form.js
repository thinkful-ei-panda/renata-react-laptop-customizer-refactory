import React from 'react';
import Features from './Features';

function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features features={props.features} format={props.format} selected={props.selected} updateFeature={props.updateFeature} />
        </form>
    );
};

export default Form;