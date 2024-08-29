// Landing.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';

import '@testing-library/jest-dom/extend-expect'; // for better assertions
import Landing from 'pages/LandingPage/Landing';
import { BrowserRouter } from 'react-router-dom';


describe('Landing Component', () => {
  test('renders without crashing', () => {
    render(<BrowserRouter><Landing /></BrowserRouter>);
    // Assertion to ensure Landing component is rendered
    expect(screen.getByText(''));
  });

  test('renders FlashCard component', () => {
    render(<BrowserRouter><Landing /></BrowserRouter>);
    // Assuming FlashCard renders something identifiable
    const flashCardElement = screen.getByRole('article'); // or another role if different
    expect(flashCardElement);
  });
});
