import { HomePage } from 'page/HomePage';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

export const Router: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
      </>
    </BrowserRouter>
  );
};
