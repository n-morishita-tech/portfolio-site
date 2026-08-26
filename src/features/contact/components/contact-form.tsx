'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { useContactForm } from '../hooks/use-contact-form';
import { ContactSuccess } from './contact-success';

export const ContactForm = () => {
  const { form, errors, loading, sent, handleChange, handleSubmit, reset } =
    useContactForm();

  return (
    <>
      {/* 🌌 Background */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse -top-40 -left-40" />
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse -bottom-40 -right-40" />
      </div>

      {/* ✨ Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <Card className="border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-xl tracking-tight">
              Contact
            </CardTitle>
            <p className="text-sm text-white/60">お問い合わせはこちらから</p>
          </CardHeader>

          <CardContent>
            {sent ? (
              <ContactSuccess onReset={reset} />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* 名前 */}
                <div>
                  <label className="text-sm text-white/70">お名前</label>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="山田 太郎"
                    className={`mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40
                                focus-visible:ring-2 focus-visible:ring-blue-400/60
                                focus-visible:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                                ${errors.name ? 'border-red-400' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                {/* メール */}
                <div>
                  <label className="text-sm text-white/70">
                    メールアドレス
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@email.com"
                    className={`mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40
                                focus-visible:ring-2 focus-visible:ring-blue-400/60
                                focus-visible:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                                ${errors.email ? 'border-red-400' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                {/* メッセージ */}
                <div>
                  <label className="text-sm text-white/70">メッセージ</label>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="お問い合わせ内容をご記入ください"
                    className={`mt-1 bg-white/5 border-white/10 text-white placeholder:text-white/40
                                focus-visible:ring-2 focus-visible:ring-blue-400/60
                                focus-visible:shadow-[0_0_20px_rgba(59,130,246,0.3)]
                                ${errors.message ? 'border-red-400' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* ボタン */}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 active:scale-95 transition"
                >
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  )}
                  {loading ? '送信中...' : '送信する'}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </>
  );
};
