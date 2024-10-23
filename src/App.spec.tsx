import { beforeEach, describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

import { renderWithStore } from '../tests/testsUtils';

import '@testing-library/jest-dom';

import App from './App';

describe('Integration test App', () => {
  beforeEach(()=>{
    renderWithStore(<App/>);
  })
  it('renders App when API call is successful', async () => {
      expect(await screen.findByText("Popular Movies")).toBeInTheDocument();
      expect(await screen.findByText("Home")).toBeInTheDocument();
  })

  it('should display the input field when the search link is clicked', async () => {
    const searchLink = await screen.findByText(/Search/i); 
    expect(searchLink).toBeInTheDocument();
    await userEvent.click(searchLink);
    expect(await screen.findByPlaceholderText(/Search.../i)).toBeInTheDocument();
  });
})
