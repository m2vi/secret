import * as React from 'react';
import { Home } from './components/Home';

import './ui/index.global.css';

// This is an event call, see electron/bridge.ts to understand.
// This delay is used to prevent message printing before the browser is loaded.
setTimeout(() => window.Bridge.ping(), 0.5);

export const App: React.FC = () => {
  return (
    <>
      <Home />
    </>
  );
};
