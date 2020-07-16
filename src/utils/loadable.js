import React, { lazy, Suspense } from 'react';

const loadable = (importFunc, { fallbackComponent = null } = { fallbackComponent: null }) => {
  const LazyComponent = lazy(importFunc);

  return (props) => (
    <Suspense fallback={fallbackComponent}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;
