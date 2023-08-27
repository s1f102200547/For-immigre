import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Blog from './Blog';

//TODO headerの表示しかテストしていないので、そのほかもテストする
describe("Blog", () => {
  let mockShowOtherSection, mockShowSearchedArticles;

  beforeEach(() => {
    mockShowOtherSection = jest.fn();
    mockShowSearchedArticles = jest.fn();

    jest.mock('../../conponents/GetDB', () => {
      return () => Promise.resolve({ data: {
        users: {
          tourism: {
            "000000": {
              title: "tourism test title",
              description: "tourism test description",
              image: "https://www.mywestford.com/wp-content/uploads/elementor/thumbs/tour-pobk95pziymk0x1at687indy4vbwivie2ajmm21q5m.jpg",
              imageLabel: "tourism",
              article: "tourism test article",
            }
          }
        }
      } });
    });
  });

  test("renders correctly", () => {
    const sections = ['Tourism', 'Tax', 'Employment', 'Anime', 'Low', 'Manner', 'Safety', 'Economy'];

    render(
      <MemoryRouter>
        <Blog />
      </MemoryRouter>
    );

    expect(screen.getByText("For immigre")).toBeInTheDocument();
    expect(screen.getByText("SUBSCRIBE")).toBeInTheDocument();
    expect(screen.getByText("SIGN UP")).toBeInTheDocument();
    expect(screen.getByTestId("searchbar")).toBeInTheDocument();

    // セクションボタンをチェック
    sections.forEach(section => {
      expect(screen.getByText(section)).toBeInTheDocument();
    });

  });
});
