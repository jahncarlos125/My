import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Theme from './theme';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {store, persistor} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Theme>
            <Routes />
          </Theme>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
