'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

import { useContactForm } from '../hooks/use-contact-form';
import { ContactSuccess } from './contact-success';

export const ContactForm = () => {
  const { form, errors, loading, sent, handleChange, handleSubmit, reset } =
    useContactForm();

  return (
    <Card
      className="
        relative overflow-hidden
        border border-white/10
        bg-white/[0.035]
        backdrop-blur-2xl
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        rounded-3xl
      "
    >
      {/* Top Gradient Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-pink-500/70 to-transparent" />

      {/* Inner Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-purple-500/8 rounded-full blur-[80px] pointer-events-none" />

      <CardHeader className="relative z-10 px-8 pt-8 pb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-2 h-2 rounded-full bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.8)]" />

          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/30">
            Send Message
          </span>
        </div>

        <CardTitle className="text-2xl font-bold tracking-tight text-white">
          お問い合わせ
        </CardTitle>

        <p className="mt-2 text-sm text-white/40">
          ご相談内容をご入力ください。
        </p>
      </CardHeader>

      <CardContent className="relative z-10 px-8 pb-8">
        {sent ? (
          <ContactSuccess onReset={reset} />
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 名前 */}
            <div>
              <label className="text-sm text-white/60">お名前</label>

              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="山田 太郎"
                className={`
                  mt-2
                  h-11
                  bg-white/[0.03]
                  border-white/10
                  text-white
                  placeholder:text-white/25
                  rounded-xl
                  transition-all
                  focus-visible:ring-1
                  focus-visible:ring-pink-400/60
                  focus-visible:border-pink-400/40
                  focus-visible:shadow-[0_0_25px_rgba(236,72,153,0.12)]
                  ${errors.name ? 'border-red-400' : ''}
                `}
              />

              {errors.name && (
                <p className="text-red-400 text-xs mt-2">{errors.name}</p>
              )}
            </div>

            {/* メール */}
            <div>
              <label className="text-sm text-white/60">メールアドレス</label>

              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className={`
                  mt-2
                  h-11
                  bg-white/[0.03]
                  border-white/10
                  text-white
                  placeholder:text-white/25
                  rounded-xl
                  transition-all
                  focus-visible:ring-1
                  focus-visible:ring-purple-400/60
                  focus-visible:border-purple-400/40
                  focus-visible:shadow-[0_0_25px_rgba(168,85,247,0.12)]
                  ${errors.email ? 'border-red-400' : ''}
                `}
              />

              {errors.email && (
                <p className="text-red-400 text-xs mt-2">{errors.email}</p>
              )}
            </div>

            {/* メッセージ */}
            <div>
              <label className="text-sm text-white/60">メッセージ</label>

              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="お問い合わせ内容をご記入ください"
                className={`
                  mt-2
                  resize-none
                  bg-white/[0.03]
                  border-white/10
                  text-white
                  placeholder:text-white/25
                  rounded-xl
                  transition-all
                  focus-visible:ring-1
                  focus-visible:ring-indigo-400/60
                  focus-visible:border-indigo-400/40
                  focus-visible:shadow-[0_0_25px_rgba(99,102,241,0.12)]
                  ${errors.message ? 'border-red-400' : ''}
                `}
              />

              {errors.message && (
                <p className="text-red-400 text-xs mt-2">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-12
                rounded-xl
                flex items-center justify-center gap-2
                bg-linear-to-r
                from-pink-500
                via-purple-500
                to-indigo-500
                text-white
                font-semibold
                shadow-[0_0_25px_rgba(168,85,247,0.2)]
                hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
                hover:scale-[1.01]
                active:scale-[0.98]
                transition-all
                duration-300
              "
            >
              {loading && (
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              )}

              {loading ? '送信中...' : 'メッセージを送信'}
            </Button>

            <p className="text-center text-[11px] text-white/25 tracking-wide">
              お問い合わせ内容を確認のうえ、返信いたします。
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
