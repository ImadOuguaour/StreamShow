import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import messages_en from '../src/locales/en.json'; 
import store from '../src/store';

const renderWithStore = (component: React.ReactNode) => {
    return render(
        <Provider store={store}>
            <IntlProvider locale="en" messages={messages_en}>
                <MemoryRouter>
                    {component}
                </MemoryRouter>
            </IntlProvider>
        </Provider>
    );
};

export { renderWithStore };
