import { ContactInput } from '../schema';
import { ContactErrorResponse } from '../types';

export const sendContact = async (data: ContactInput) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err: ContactErrorResponse = await res.json();
    throw err;
  }

  return res.json();
};
