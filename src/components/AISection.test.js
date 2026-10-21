import { fireEvent, render, screen } from "@testing-library/react";
import { AISection } from "./AISection";

describe("AISection", () => {
  test("renders the applied AI capability cards and project examples", () => {
    render(<AISection />);

    expect(screen.getByRole("heading", { name: /intelligence, engineered/i })).toBeInTheDocument();
    expect(screen.getByText(/context-aware ai/i)).toBeInTheDocument();
    expect(screen.getByText(/ai that works with tools/i)).toBeInTheDocument();
    expect(screen.getByText(/ai-assisted engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/multi-workspace document assistant/i)).toBeInTheDocument();
    expect(screen.getByText(/arch-os/i)).toBeInTheDocument();
    expect(screen.getByText(/docs studio/i)).toBeInTheDocument();
  });

  test("lets visitors explore each stage in the illustrative workflow", () => {
    render(<AISection />);

    const retrieveTab = screen.getByRole("tab", { name: /retrieve/i });
    fireEvent.click(screen.getByRole("tab", { name: /respond/i }));

    expect(screen.getByRole("tabpanel")).toHaveTextContent(/return a grounded response/i);
    expect(screen.getByRole("tabpanel")).toHaveTextContent(/citations/i);
    expect(screen.getByRole("tab", { name: /respond/i })).toHaveAttribute("aria-selected", "true");

    fireEvent.click(retrieveTab);
    expect(screen.getByRole("tabpanel")).toHaveTextContent(/pgvector/i);
  });
});
