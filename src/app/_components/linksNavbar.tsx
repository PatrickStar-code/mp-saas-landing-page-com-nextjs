import { motion } from "framer-motion";
import React from "react";

export default function LinksNavbar(links: { name: string; href: string }[]) {
  return (
    <>
      {links.map((item, index) => (
        <motion.a
          key={item.name}
          href={item.href}
          className="font-GeistMono text-[14px] hover:underline leading-[40px] font-normal hover:text-gray-600"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
        >
          {item.name}
        </motion.a>
      ))}
    </>
  );
}
