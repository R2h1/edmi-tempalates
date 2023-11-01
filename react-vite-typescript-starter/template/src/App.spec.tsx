import { describe, test, expect } from 'vitest';

import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  test('Should show title: react-vite-typescript-template', () => {
    render(<App />);
    expect(screen.getByText('react-vite-typescript-template')).toBeDefined();
  });
});
