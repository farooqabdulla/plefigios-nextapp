// components/SlidingHeader.js
"use client"
import { motion } from "framer-motion";
import React from "react";

const Slidingleft = () => {
  return (
    <motion.div
      initial={{ x: '-100vw' }}  // Start off-screen to the left
      animate={{ x: 0 }}         // Animate to original position
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}  // Spring animation
      className="text-[3vw] font-bold text-white"
    >
      Sliding Header
    </motion.div>
  );
};

export default Slidingleft;
