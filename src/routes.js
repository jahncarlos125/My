import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from '~/pages/Main';
import Register from '~/pages/Register';

const Routes = createAppContainer(createSwitchNavigator({Main, Register}));

export default Routes;
