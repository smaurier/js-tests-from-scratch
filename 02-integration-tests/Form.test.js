import React from 'react';
import '@testing-library/jest-dom'; // ← important
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from './Form';

test('le formulaire affiche un message après soumission', async () => {
  render(<Form />);
  await userEvent.type(screen.getByLabelText(/nom/i), 'Nayeli');
  await userEvent.click(screen.getByText(/envoyer/i));
  expect(screen.getByText('Bonjour Nayeli !')).toBeInTheDocument();
});
