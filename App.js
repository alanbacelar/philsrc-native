import React from 'react';

import { Provider } from 'mobx-react';

import Main from './Main';
import stores from './stores';

 const App = () => {
    return (
    	<Provider {...stores} >
    		<Main />
    	</Provider>
    );
}

export default App;
