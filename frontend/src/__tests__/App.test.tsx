import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import App from '../App';
import { BrowserRouter } from 'react-router-dom';

/**
 * @vitest-environment jsdom
 */

describe('App page', () => {
  it('renders page', () => {
    render(<BrowserRouter><App /></BrowserRouter>);

    expect(screen.getByTestId('app-page')).toBeTruthy();
  });
});
