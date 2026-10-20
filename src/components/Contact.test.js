import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";

const mockSendForm = jest.fn();

jest.mock("emailjs-com", () => ({
  sendForm: (...args) => mockSendForm(...args),
}));

jest.mock("react-on-screen", () => ({ children }) =>
  children({ isVisible: true })
);

jest.mock("react-google-recaptcha", () => {
  const React = require("react");
  return React.forwardRef(function MockReCAPTCHA({ onChange }, ref) {
    React.useImperativeHandle(ref, () => ({ reset: jest.fn() }));
    return React.createElement(
      "button",
      {
        type: "button",
        onClick: () => onChange("test-captcha-token"),
      },
      "Complete test CAPTCHA"
    );
  });
});

process.env.REACT_APP_RECAPTCHA_SITE_KEY = "test-recaptcha-site-key";
process.env.REACT_APP_SERVICE_ID = "test-service-id";
process.env.REACT_APP_TEMPLATE_ID = "test-template-id";
process.env.REACT_APP_PUBLIC_KEY = "test-public-key";

const { Contact } = require("./Contact");

const fillRequiredFields = () => {
  fireEvent.change(screen.getByLabelText(/First name/i), {
    target: { value: "Ada" },
  });
  fireEvent.change(screen.getByLabelText(/Email address/i), {
    target: { value: "ada@example.com" },
  });
  fireEvent.change(screen.getByLabelText(/What’s on your mind\\?/i), {
    target: { value: "I'd like to discuss a project." },
  });
};

describe("Contact form", () => {
  beforeEach(() => {
    mockSendForm.mockReset();
  });

  test("sends using EmailJS values from the environment", async () => {
    mockSendForm.mockResolvedValue({ status: 200, text: "OK" });
    render(<Contact />);

    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /Complete test CAPTCHA/i }));
    fireEvent.click(screen.getByRole("button", { name: /Send your message/i }));

    expect(await screen.findByText(/Your message has been sent/i)).toBeInTheDocument();
    expect(mockSendForm).toHaveBeenCalledWith(
      "test-service-id",
      "test-template-id",
      expect.any(HTMLFormElement),
      "test-public-key"
    );
  });

  test("logs provider diagnostics and shows a safe error when EmailJS rejects", async () => {
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
    mockSendForm.mockRejectedValue({ status: 403, text: "Forbidden" });

    render(<Contact />);
    fillRequiredFields();
    fireEvent.click(screen.getByRole("button", { name: /Complete test CAPTCHA/i }));
    fireEvent.click(screen.getByRole("button", { name: /Send your message/i }));

    expect(
      await screen.findByText(/Your message couldn't be sent/i)
    ).toBeInTheDocument();
    expect(consoleError).toHaveBeenCalledWith(
      "EmailJS contact form submission failed:",
      { status: 403, text: "Forbidden", message: undefined }
    );

    consoleError.mockRestore();
    expect(mockSendForm).toHaveBeenCalledTimes(1);
  });
});
