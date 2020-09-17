import React from 'react';
import './Places.css';
import cn from 'classnames';
import Place from '../Place/Place';

const Places = (props) => {
  // eslint-disable-next-line react/prop-types
  const { className } = props;
  return (
    <div className={cn('places', className)}>
      {[1, 2, 3, 4, 6].map(() => <Place />)}
    </div>
  );
};

export default Places;
