import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function LogoNavbar() {
  return (
    <motion.div
      className="text-xl font-semibold text-gray-800 dark:text-white flex items-center gap-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <a
        href="#inicio"
        className="flex items-center gap-2 font-GeistMono text-bold text-[20px]  "
      >
        <Image src="/images/icon.svg" alt="Logo" width={24} height={24} />
        LivroSaaS
      </a>
    </motion.div>
  );
}
