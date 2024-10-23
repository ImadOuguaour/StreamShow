import { describe, expect, it } from "vitest";
import { screen } from '@testing-library/react'

// eslint-disable-next-line import/order
import { renderWithStore } from "../../../../tests/testsUtils";

import '@testing-library/jest-dom';

import Home from "..";

describe('Test Home', () => {
    it('renders Home when API call is successful', async () => {
        renderWithStore(<Home/>)
        expect(await screen.findByText("Popular Series")).toBeInTheDocument();
    })
})
