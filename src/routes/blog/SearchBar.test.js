import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe("SearchBar", () => {
    const mockFunc = jest.fn();

    test("renders correctly", () => {
        render(<SearchBar func={mockFunc} />);
        const searchBar = screen.getByTestId("searchbar");
        expect(searchBar).toBeInTheDocument();
    });

    test("handles input change and search icon click", () => {
        render(<SearchBar func={mockFunc} />);
        const searchInput = screen.getByPlaceholderText("Search Articles");
        const searchIcon = screen.getByTestId("searchIcon");

        const inputValue = "test search";
        fireEvent.change(searchInput, { target: { value: inputValue } });
        expect(searchInput.value).toBe(inputValue);

        fireEvent.click(searchIcon);
        expect(mockFunc).toHaveBeenCalledWith(inputValue);
        expect(mockFunc).toHaveBeenCalledTimes(1);
    });
});
