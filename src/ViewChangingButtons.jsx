import React from 'react';

import { useDispatchRoutes } from './router';

const ViewChangingButtons = ({routes}) => {
  const selectView = useDispatchRoutes(routes);

  return (
    <div className="viewChangingButtons">
      {
        Object.keys(routes).filter(route => route !== 'default').map(
          route =>
            (<input
              type="button"
              key={route}
              value={route}
              onClick={selectView[route]}
            />)
        )
      }
    </div>
  );
};

export default ViewChangingButtons;
