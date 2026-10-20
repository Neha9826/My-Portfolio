# My Portfolio

A React-based personal portfolio website designed to present professional skills, selected projects, experience, and contact information through an interactive single-page experience.

## Overview

The portfolio is built with React and organized into reusable UI components rather than a single monolithic page.

The application includes dedicated sections for:

- Navigation
- Hero/banner presentation
- Technical skills
- Projects
- About/profile information
- Contact
- Newsletter
- Footer

It also includes interactive visual components for presenting skills, projects, and system-oriented information.

## Features

- Responsive personal portfolio layout
- Component-based React architecture
- Project showcase with reusable project cards
- Skills presentation and visualizations
- About and professional profile sections
- Contact section
- Newsletter/Mailchimp integration
- Social/profile links
- Smooth back-to-top interaction
- Responsive UI built with Bootstrap and custom CSS
- Automated React testing setup

## Tech Stack

- React 18
- React Router 6
- React Bootstrap / Bootstrap 5
- Material UI
- Styled Components
- Animate.css
- EmailJS
- Mailchimp subscription integration
- Create React App / react-scripts
- Jest + React Testing Library

## Architecture

The application follows a component-based React structure:

```text
src/
├── App.js
├── components/
│   ├── NavBar.js
│   ├── Banner.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── About.js
│   ├── Contact.js
│   ├── Footer.js
│   ├── ProjectCard.js
│   ├── ProjectCityVisual.js
│   ├── SkillsVisual.js
│   └── SystemVisual.js
├── assets/
└── stylesheets
```

The main application composes the portfolio from reusable sections and manages the scroll-aware back-to-top interaction with React hooks.

## Getting Started

### Requirements

- Node.js
- npm

### Installation

```bash
git clone https://github.com/Neha9826/My-Portfolio.git
cd My-Portfolio

npm install
```

### Environment configuration

The contact form uses these Create React App environment variables:

- `REACT_APP_SERVICE_ID`
- `REACT_APP_TEMPLATE_ID`
- `REACT_APP_PUBLIC_KEY`
- `REACT_APP_RECAPTCHA_SITE_KEY`

Create a local override from the example file:

```bash
# macOS / Linux / Git Bash
cp .env.example .env.local

# Windows PowerShell alternative:
# Copy-Item .env.example .env.local
```

Replace the example values in `.env.local` with the EmailJS service ID, template ID and public key from your EmailJS account, plus the reCAPTCHA v2 site key configured for your site. Ensure the EmailJS template uses the form field names `firstName`, `lastName`, `email`, `phone`, and `message`.

Restart `npm start` after changing environment variables. These `REACT_APP_*` values are embedded in the client bundle during the build, so rebuild before deployment after changing them. They are client-side configuration values—not a place to store private server credentials. Do not commit `.env.local`.

Start the development server:

```bash
npm start
```

### Production Build

```bash
npm run build
```

### Tests

Run the complete test suite once (without watch mode):

```bash
npm test -- --watchAll=false
```

The contact-form regression tests mock EmailJS and CAPTCHA, so they do not send real email or require a live CAPTCHA service.

## Engineering Highlights

- Reusable React component architecture
- Responsive layout with Bootstrap and custom CSS
- Interactive project and skill visualizations
- Contact and newsletter integrations
- Accessibility-aware navigation and back-to-top behavior
- React Testing Library/Jest test setup

## Project Status

Personal portfolio application with ongoing visual and content evolution.

## Author

**Neha Pattnayak**  
Senior Full Stack Engineer

## License

This project is proprietary unless otherwise specified by the repository owner.
