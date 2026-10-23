import { fireEvent, render } from "@testing-library/react";
import { Projects } from "./Projects";

jest.mock("./ProjectCard", () => ({
  ProjectCard: () => null,
}));

describe("Arch-OS featured project", () => {
  test("keeps the Redis and PostgreSQL architecture nodes visible in the canvas", () => {
    const { container } = render(<Projects />);

    expect(
      container.querySelector(".archos-node-redis strong")
    ).toHaveTextContent("Redis Cache");
    expect(
      container.querySelector(".archos-node-db strong")
    ).toHaveTextContent("PostgreSQL");
  });

  test("tilts toward the pointer direction and resets when the pointer leaves", () => {
    const { container } = render(<Projects />);
    const card = container.querySelector(".archos-feature");

    card.getBoundingClientRect = jest.fn(() => ({
      left: 100,
      top: 50,
      width: 400,
      height: 300,
      right: 500,
      bottom: 350,
      x: 100,
      y: 50,
      toJSON: () => ({}),
    }));

    fireEvent(
      card,
      new MouseEvent("pointermove", {
        bubbles: true,
        clientX: 500,
        clientY: 50,
      })
    );

    expect(card.style.getPropertyValue("--archos-tilt-x")).toBe("-3.50deg");
    expect(card.style.getPropertyValue("--archos-tilt-y")).toBe("4.50deg");
    expect(card.style.getPropertyValue("--archos-glow-x")).toBe("100.00%");
    expect(card.classList.contains("is-pointer-active")).toBe(true);

    fireEvent.pointerLeave(card);

    expect(card.style.getPropertyValue("--archos-tilt-x")).toBe("0deg");
    expect(card.style.getPropertyValue("--archos-tilt-y")).toBe("0deg");
    expect(card.classList.contains("is-pointer-active")).toBe(false);
  });
});
