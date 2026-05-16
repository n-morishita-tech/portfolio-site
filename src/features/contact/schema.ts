import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, '名前を入力してください'),
  email: z
    .string()
    .min(1, 'メールアドレスを入力してください')
    .email('正しいメール形式で入力してください'),
  message: z.string().min(10, '10文字以上で入力してください'),
});

export type ContactInput = z.infer<typeof contactSchema>;
