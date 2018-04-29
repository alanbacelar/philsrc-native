import React from 'react';

import { Provider } from 'mobx-react';
import { StatusBar } from 'react-native';

import Main from './Main';
import stores from './stores';

StatusBar.setBarStyle('light-content', true);

 const App = () => {
    return (
    	<Provider {...stores} >
    		<Main />
    	</Provider>
    );
}

export default App;
