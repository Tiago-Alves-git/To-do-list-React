import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../Pages/App';

describe("HomePage", () => {
  it("Should render the web page title", () => {
    render(<App />);

    expect(screen.getByText("Tarefas")).toBeInTheDocument();
  })
})
