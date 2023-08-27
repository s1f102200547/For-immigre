import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SecondMainContents from './SecondMainContents';

describe('SecondMainContents', () => {
  const emailValue = 'test@test.com';
  const passwordValue = 'test1234';

  beforeEach(() => {
    // Firebaseのモック設定
    const mockSignInWithEmailAndPassword = jest.fn().mockResolvedValue({ user: { uid: 'testUserId' } });
    jest.mock('../../firebase/firebase', () => ({
      auth: () => ({
        signInWithEmailAndPassword: mockSignInWithEmailAndPassword
      })
    }));
  });

  test('should fill out form and submit', async () => {
    const mockChangeBlurredBackgroundColor = jest.fn();
    const mockSetLoggedInUser = jest.fn();

    render(
      <MemoryRouter>
        <SecondMainContents
          changeBlurredBackgroundColor={mockChangeBlurredBackgroundColor}
          SetLoggedInUser={mockSetLoggedInUser}
        />
      </MemoryRouter>
    );

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const signinButton = screen.getByTestId('second-signin-button');

    // フォームに入力
    fireEvent.change(emailInput, { target: { value: emailValue } });
    fireEvent.change(passwordInput, { target: { value: passwordValue } });

    // サブミットボタンをクリック
    fireEvent.click(signinButton);

    // Firebaseの非同期操作を待つ
    await waitFor(() => {
      expect(mockChangeBlurredBackgroundColor).toHaveBeenCalledTimes(1);
      expect(mockSetLoggedInUser).toHaveBeenCalledTimes(1);
    });
  });
});
