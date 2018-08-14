import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import RootReducer, { RootState } from "./reducers/RootReducer";
import registerServiceWorker from './registerServiceWorker';


class RootComponent extends React.Component<any, any> {
  render() {
    const MyProvider: any = Provider;
    // var preloadedState = Object.assign({},
    //   (window as any)._REDUX_DEVTOOLS_EXTENSION__(),
    //   (window as any).__PRELOADED_STATE__
    // );
    // let store = createStore<RootState>(
    //   RootReducer,
    //   preloadedState, 
    //   null
    // )

    let store = createStore<RootState, any, any, any>(
      RootReducer
      // ,preloadedState
    );

    return (
      <MyProvider store={store}>
        <App />
      </MyProvider>
    )
  }
}

ReactDOM.render(
  <RootComponent /> as any,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
