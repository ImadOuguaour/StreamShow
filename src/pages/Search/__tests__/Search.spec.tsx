import { beforeEach, describe, expect, it } from 'vitest'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event';

// eslint-disable-next-line import/order
import { renderWithStore } from '../../../../tests/testsUtils';

import '@testing-library/jest-dom';

import Search from '..';

describe('Test Search', () => {
  beforeEach(()=>{
    renderWithStore(<Search/>)
  })
  it('renders the Search component', async () => {
    expect(screen.getByText("No movie/serie found")).toBeInTheDocument();
  })
  it('write in input and check buttons exists', async () => {
    const searchInput = screen.getByPlaceholderText(/Search.../i);
    expect(searchInput).toBeInTheDocument();
    await userEvent.type(searchInput, 'Avengers');
    await waitFor(async () => {
        const previousButton = await screen.findByLabelText(/previous/i);
        const nextButton = await screen.findByLabelText(/next/i);
        expect(previousButton).toBeInTheDocument();
        expect(nextButton).toBeInTheDocument();
    },{ timeout: 2000 });
  })
})