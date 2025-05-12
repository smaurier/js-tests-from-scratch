import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

test('affiche un message après soumission du formulaire', async () => {
  render(<LoginForm />);
  
  await userEvent.type(screen.getByLabelText(/email/i), 'test@example.com');
  await userEvent.type(screen.getByLabelText(/mot de passe/i), 'supersecret');
  await userEvent.click(screen.getByRole('button', { name: /se connecter/i }));
  
  expect(screen.getByText('Bienvenue, test@example.com !')).toBeInTheDocument();
});
