import * as React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component<any, any> {
  constructor(props?: any, context?: any) {
      super(props, context);
  }

  public render() {
    return (
      <div>
        <h2>Hello World!</h2>
      </div>
    );
  }
}

export default HomePage;
