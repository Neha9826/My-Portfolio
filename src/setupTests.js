// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';


// Canvas drawing is browser-only. Keep DOM smoke tests deterministic in JSDOM.
jest.mock("./components/SystemVisual", () => ({
  SystemVisual: () => null,
}));

jest.mock("./components/SkillsVisual", () => ({
  SkillsVisual: () => null,
}));
