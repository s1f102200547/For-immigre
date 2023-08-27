import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from './Article';

describe("Article", () => {
    const testData = {
        title: "Sample Article Title",
        description: "Sample article description.",
        article: "Sample article content."
    };

    test("renders correctly", () => {
        render(<Article data={testData} />);
        
        const titleElement = screen.getByText("Sample Article Title");
        const descriptionElement = screen.getByText("Sample article description.");
        const articleContentElement = screen.getByText("Sample article content.");

        expect(titleElement).toBeInTheDocument();
        expect(descriptionElement).toBeInTheDocument();
        expect(articleContentElement).toBeInTheDocument();
    });
});
