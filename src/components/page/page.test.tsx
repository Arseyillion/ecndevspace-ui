import "@testing-library/jest-dom";
import Page from ".";
import { render } from "@testing-library/react";

describe("Page component", () => {
  it("renders the title and children correctly", () => {
    // Arrange
    const title = "Test Title";
    const children = "Test Children";
    const { getByText } = render(<Page title={title}>{children}</Page>);

    // Act
    const titleElement = getByText(title);
    const childrenElement = getByText(children);

    // Assert
    expect(titleElement).toBeInTheDocument();
    expect(childrenElement).toBeInTheDocument();
  });

  it("renders the correct styling", () => {
    const title = "Test Title";
    const children = "Test children";

    const { getByTestId } = render(<Page title={title}>{children}</Page>);
    const container = getByTestId("page-container");
   

    expect(container).toHaveStyle(`
       background-color:#f5f5f5
        `);
   
  });
});
