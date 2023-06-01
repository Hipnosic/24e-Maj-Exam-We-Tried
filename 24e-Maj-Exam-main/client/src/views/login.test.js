import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './login';

describe('HomePage', () => {
    it('renders order button when logged in', async () => {
        render(
            <Router>
                <Login />
            </Router>
        );

        fireEvent.change(screen.getByTestId('username-input'), { target: { value: 'Yves' } });
        fireEvent.change(screen.getByTestId('password-input'), { target: { value: '123' } });
        fireEvent.click(screen.getByText('Sign In'));
        console.log("Click was successful")

        await waitFor(() => {
            expect(screen.getByTestId('SignOut')).toBeInTheDocument();
        })
    })
})