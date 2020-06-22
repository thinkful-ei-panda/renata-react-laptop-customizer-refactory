import React from 'react';
import Options from './Options';

function Features(props) {
  return Object.keys(props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <Options feature={feature} format={props.format} options={props.features[feature]} selected={props.selected} updateFeature={props.updateFeature} />
      </fieldset>
    );
  });
};

export default Features;