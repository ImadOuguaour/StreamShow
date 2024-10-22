import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';

import messages_en from '../../../locales/en.json';
import Movies from '..';
import store from '../../../store';

const renderWithStore = (component: any) => {
    return render(
        <Provider store={store}>
            <IntlProvider locale="en" messages={messages_en}> {/* Définissez la locale souhaitée */}
                {component}
            </IntlProvider>
        </Provider>
    );
};

describe('Test Movies', () => {
  it('renders the Movies component', () => {
    renderWithStore(<Movies/>)
    screen.debug();
  })
})
