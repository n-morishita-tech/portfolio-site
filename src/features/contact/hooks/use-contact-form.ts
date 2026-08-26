'use client';

import { useState } from 'react';
import { contactSchema, ContactInput } from '../schema';
import { sendContact } from '../api/send-contact';
import { ContactErrorResponse } from '../types';
import { toast } from 'sonner';

export const useContactForm = () => {
  const [form, setForm] = useState<ContactInput>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactInput, string>>
  >({});

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);

    // 👇 リアルタイムバリデーション
    const parsed = contactSchema.safeParse(newForm);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
    } else {
      setErrors({});
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // フロントバリデーション
    const parsed = contactSchema.safeParse(form);

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;

      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });

      return;
    }

    setErrors({});
    setLoading(true);

    try {
      await sendContact(parsed.data);
      toast.success('送信しました ✨');
      setSent(true);
    } catch (err: unknown) {
      const e = err as ContactErrorResponse;

      if (e.errors?.fieldErrors) {
        setErrors({
          name: e.errors.fieldErrors.name?.[0],
          email: e.errors.fieldErrors.email?.[0],
          message: e.errors.fieldErrors.message?.[0],
        });
      } else {
        toast.error('送信に失敗しました');
      }
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setSent(false);
    setForm({ name: '', email: '', message: '' });
  };

  return {
    form,
    errors,
    loading,
    sent,
    handleChange,
    handleSubmit,
    reset,
  };
};
