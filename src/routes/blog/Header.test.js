import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

describe("Header display and interaction", () => {
    const sections = ['Tourism', 'Tax', 'Employment', 'Anime', 'Low', 'Manner', 'Safety', 'Economy'];
    const CompanyName = "For immigre";
    const mockShowOtherSection = jest.fn();
    const mockShowSearchedArticles = jest.fn();
    
    test("displays texts / click buttons -> fire functions", () => {
        render(
            <MemoryRouter>
                <Header
                    sections={sections}
                    title={CompanyName}
                    showOtherSection={mockShowOtherSection}
                    showSearchedArticles={mockShowSearchedArticles}
                />
            </MemoryRouter>
        );

        expect(screen.getByText("For immigre")).toBeInTheDocument();
        expect(screen.getByText("SUBSCRIBE")).toBeInTheDocument();
        expect(screen.getByText("SIGN UP")).toBeInTheDocument();
        expect(screen.getByTestId("searchbar")).toBeInTheDocument();

        // セクションボタンをクリックし、関数が正しく呼び出されるかチェック
        sections.forEach(section => {
            const sectionElement = screen.getByText(section);
            fireEvent.click(sectionElement);
            expect(mockShowOtherSection).toHaveBeenCalledWith(section);
        });

        // 検索アイコンをクリックし、関数が正しく呼び出されるかチェック
        const searchIcon = screen.getByTestId("searchIcon");
        fireEvent.click(searchIcon);
        expect(mockShowSearchedArticles).toHaveBeenCalledTimes(1);
    });
});
