import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import './theme/globalStyle';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <AppContainer>
        {routes}
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./routes', ()=> {
        const routes = require('./routes').default;
        ReactDOM.render(
            <AppContainer>
                {routes}
            </AppContainer>,
            document.getElementById('root')
        );
    });
}