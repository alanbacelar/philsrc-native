import { StackNavigator } from 'react-navigation';

import HomeScreen from './screens/Home';
import ConfigScreen from './screens/Config';

const Main = StackNavigator({
	Home: { screen: HomeScreen },
	Config: { screen: ConfigScreen },
});

export default Main;
