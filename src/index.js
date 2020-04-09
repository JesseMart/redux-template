import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Import Redux
import { createStore} from 'redux'
import {Provider} from 'react-redux'
///Import Router
import {BrowserRouter, Switch, Route} from 'react-router-dom'
//Import Reducer
import rootReducers from './reducers/rootReducers'
//Import BasseLayout
import BaseLayout from './components/layout/BaseLayout'
//Import Container
import Container from './components/Container'

let store = createStore(rootReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path ='/' component={App} />
          <Route exact path ='/container' component={Container} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);


