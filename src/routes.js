import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

const RootStack = createStackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
      title: 'JSHunt',
    },
  },
  Product: {
    screen: Product,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
});

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
