'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const ContactSuccess = ({ onReset }: { onReset: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="text-center py-10 space-y-6"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="text-green-400 text-4xl"
      >
        ✓
      </motion.div>

      <div className="space-y-2">
        <p className="text-white text-lg font-medium">送信完了しました</p>
        <p className="text-white/60 text-sm">
          ご連絡ありがとうございます。
          <br />
          内容を確認し、後ほどご連絡いたします。
        </p>
      </div>

      <Button
        variant="outline"
        onClick={onReset}
        className="border-white/20 text-white hover:bg-white/10"
      >
        もう一度送る
      </Button>
    </motion.div>
  );
};
