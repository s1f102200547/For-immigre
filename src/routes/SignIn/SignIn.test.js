import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './SignIn';
import createTimer from '../../conponents/Timer';


describe("SignIn display and interaction", () => {
    const mockSetLoggedInUser = jest.fn();
    const mockCreateTimer = jest.fn().mockResolvedValue();
    const emailValue = 'test@test.com';
    const passwordValue = 'test1234';

    beforeEach(() => {
        const mockCreateTimer = jest.mock("../../conponents/Timer", () => {
            return jest.fn().mockImplementation(() => {
              return {
                then: (callback) => {
                  callback();
                  return {
                    catch: () => {}
                  };
                }
              };
            });
        });
    });
    test("displays texts and click button", async () => {
        render(
            <MemoryRouter>
                <SignIn  SetLoggedInUser={mockSetLoggedInUser}/>
            </MemoryRouter>
        );

        //FirstPage of SignIn
        expect(screen.getByTestId("company-name")).toBeInTheDocument();
        expect(screen.getByText("Homepage")).toBeInTheDocument();
        expect(screen.getByText("Contact")).toBeInTheDocument();
        expect(screen.getByText("Welcome to For immigre")).toBeInTheDocument();
        expect(screen.getByText("Introduction to Australia's attractions and situation for immigration")).toBeInTheDocument();
        expect(screen.getByText("Sign in with your Account")).toBeInTheDocument();
        expect(screen.getByTestId("copyright")).toBeInTheDocument();

        const firstSigninButton = screen.getByText("Sign in with your Account");
        fireEvent.click(firstSigninButton);

        //SecondPage of SignIn
        expect(screen.getByTestId("company-name")).toBeInTheDocument();
        expect(screen.getByTestId("text-signin")).toBeInTheDocument();
        expect(screen.getByTestId("copyright")).toBeInTheDocument();
        expect(screen.getByTestId('email-input'));
        expect(screen.getByTestId('password-input'));
        expect(screen.getByTestId('second-signin-button'));

        const emailInput = screen.getByTestId('email-input');
        const passwordInput = screen.getByTestId('password-input');

        //fill in the text areas
        fireEvent.change(emailInput, { target: { value: emailValue } });
        fireEvent.change(passwordInput, { target: { value: passwordValue } });

        const secondSigninButton = screen.getByTestId('second-signin-button');
        fireEvent.click(secondSigninButton)

        //WORNING  mockCreateTimerを使っていない
        await waitFor(() => expect(mockSetLoggedInUser).toHaveBeenCalledTimes(1));
        expect(mockSetLoggedInUser).toHaveBeenCalledTimes(1);
    });
});
