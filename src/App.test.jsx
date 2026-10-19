import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Pruebas del Portafolio', () => {
  it('Debe renderizar la aplicación correctamente', () => {
    render(<App />);
    const element = document.body;
    expect(element).toBeDefined();
  });
});