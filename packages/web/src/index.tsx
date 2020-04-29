import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { Button } from './components/Button';

export const App = () => {
  return (
    <div>
      Welcome Back <Button />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
