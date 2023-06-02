import React from 'react';
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import Login from './login';

describe('HomePage', () => {
    it('renders order button when logged in', async () => {
        render(<Login />);

        fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'Yves' } });
        fireEvent.change(screen.getByTestId('password-input'), { target: { value: '123' } });
        fireEvent.click(screen.getByText('Sign In'));
        console.log("Click was successful")

        await waitForElementToBeRemoved(() => screen.queryByText('Sign In'));

        await waitFor(() => {
            expect(screen.getByText('Browsing as USER')).toBeInTheDocument();
        })
    })
})