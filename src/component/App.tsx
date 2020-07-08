import React from 'react';
import { Router } from './Boostrap/Router';
import { Store } from './Boostrap/Store';
import { Theme } from './Boostrap/Theme';

export const App: React.FC = () => {
  return (
    <Store>
      <Theme>
        <Router />
      </Theme>
    </Store>
  );
};
