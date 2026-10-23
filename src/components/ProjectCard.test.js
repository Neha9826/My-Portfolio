import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard image loading", () => {
  test("shows the tiny thumbnail first and fades in the full image after load", async () => {
    const originalObserver = window.IntersectionObserver;
    window.IntersectionObserver = undefined;

    try {
      const { container } = render(
        <ProjectCard
          title="Example project"
          description="A test project"
          imgUrl="/images/example-full.webp"
          thumbnailUrl="/image-thumbnails/example.webp"
          source="https://example.com"
        />
      );

      const preview = container.querySelector(".project-card-image-preview");
      const fullImage = screen.getByRole("img", { name: "Example project" });

      await waitFor(() => {
        expect(preview).toHaveAttribute("src", "/image-thumbnails/example.webp");
        expect(fullImage).toHaveAttribute("src", "/images/example-full.webp");
      });

      expect(fullImage).not.toHaveClass("is-loaded");
      expect(container.querySelector(".project-card-image")).not.toHaveClass("is-image-loaded");

      fireEvent.load(fullImage);

      expect(fullImage).toHaveClass("is-loaded");
      expect(container.querySelector(".project-card-image")).toHaveClass("is-image-loaded");
    } finally {
      window.IntersectionObserver = originalObserver;
    }
  });
});
