import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeaturedPost from './FeaturedPost';

describe("FeaturedPost", () => {
    const mockShowArticle = jest.fn();
    const testData = {
        title: "Sample Title",
        description: "Sample description text.",
        image: "sample-image.jpg",
        imageLabel: "Sample Image Label"
    };

    test("renders correctly", () => {
        render(<FeaturedPost data={testData} showArticle={mockShowArticle} />);
        
        const titleElement = screen.getByText("Sample Title");
        const descriptionElement = screen.getByText("Sample description text.");
        const continueReadingElement = screen.getByText("Continue reading...");

        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(continueReadingElement).toBeInTheDocument();

        const imageElement = screen.getByAltText("Sample Image Label");
        expect(imageElement).toBeInTheDocument();
    });

    test("clicking on card triggers showArticle function", () => {
        render(<FeaturedPost data={testData} showArticle={mockShowArticle} />);
        
        const cardActionArea = screen.getByTestId("featured-card");
        fireEvent.click(cardActionArea);

        expect(mockShowArticle).toHaveBeenCalledWith(testData);
    });
});
