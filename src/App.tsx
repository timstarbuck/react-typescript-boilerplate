// This component handles the App template used on every page.
import * as React from 'react';
import {connect} from 'react-redux';
import { LocationDescriptor } from 'react-router';
import { PleaseWaitModalContainer } from './common/ui/pleaseWait.modal';

import './stylesheets/app.scss';

export interface IAppProps  {
    children: any;
    loading: boolean;
    location: LocationDescriptor;
}

export class App extends React.Component<IAppProps, any>  {

  constructor(props?: IAppProps, context?: any) {
      super(props, context);
      this.state = {
        };
  }
  public componentDidMount() {
  }
  public render() {
      return (
      <div>
        <div>Could be a menu component here!</div>
        <PleaseWaitModalContainer />
        {this.props.children}
      </div>
    );
  }

}
export default App;
