import { StackNavigator } from 'react-navigation';

import Home from 'pages/home';
import Detail from 'pages/detail';

const Routes = StackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail },
}, {
  headerMode: 'none',
});

export default Routes;
