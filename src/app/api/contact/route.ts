import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactSchema } from '@/features/contact/schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const fieldErrors = parsed.error.issues.reduce(
        (acc, issue) => {
          const path = issue.path[0] as string;
          if (!acc[path]) {
            acc[path] = issue.message;
          }
          return acc;
        },
        {} as Record<string, string>,
      );

      return NextResponse.json({ errors: fieldErrors }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    // メール送信
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `【お問い合わせ】${name}様より`,
      replyTo: email,
      text: `名前: ${name}\nメールアドレス: ${email}\n\n内容:\n${message}`,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch {
    return NextResponse.json({ error: 'server error' }, { status: 500 });
  }
}
