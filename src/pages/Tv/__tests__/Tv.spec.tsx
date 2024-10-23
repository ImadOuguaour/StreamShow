import { beforeEach, describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'

// eslint-disable-next-line import/order
import { renderWithStore } from '../../../../tests/testsUtils';

import '@testing-library/jest-dom';

import Tv from '..';

describe('Test Movies', () => {
  beforeEach(()=>{
    renderWithStore(<Tv/>)
  })
  it('renders the Tv component', async () => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect(await screen.findByText("Now Showing")).toBeInTheDocument();
  })
  it('contains next and previous buttons', async () => {
    const previousButton = await screen.findByLabelText(/previous/i);
    expect(previousButton).toBeInTheDocument();
    const nextButton = await screen.findByLabelText(/next/i);
    expect(nextButton).toBeInTheDocument();
  })
})
