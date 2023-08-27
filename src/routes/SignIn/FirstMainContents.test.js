import { render, screen, fireEvent } from '@testing-library/react';
import FirstMainContents from './FirstMainContents';

describe("FirstMainContents display and interaction", () => {
  test("displays tow messages and signin button", () => {
    render(<FirstMainContents />);
    
    expect(screen.getByText("Welcome to For immigre")).toBeInTheDocument();
    expect(screen.getByText("Introduction to Australia's attractions and situation for immigration")).toBeInTheDocument();
    expect(screen.getByText("Sign in with your Account")).toBeInTheDocument();
  });

  test("clicking signin button calls toggleSecondScreen", () => {
    const mockToggleSecondScreen = jest.fn();
    render(<FirstMainContents toggleSecondScreen={mockToggleSecondScreen} />);
    
    const signinButton = screen.getByText("Sign in with your Account");
    fireEvent.click(signinButton);

    expect(mockToggleSecondScreen).toHaveBeenCalledTimes(1);
  });
});
