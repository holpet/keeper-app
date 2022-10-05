import React from "react";
import { motion } from "framer-motion";

const SlideAnim = ({ isAdded, i, id, children }) => {
  const anim = {
    hidden: { x: 50, y: 0, opacity: 0.8, backgroundColor: "#fff" },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      backgroundColor: "#fff",
      transition: { type: "spring", duration: 0.8, ease: "easeOut" },
    },
  };
  const animAdded = {
    hidden: { x: 0, y: -100, opacity: 0.8, backgroundColor: "#f5d442" },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      backgroundColor: "#fff",
      transition: { type: "spring", duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={i === 0 && isAdded ? animAdded : anim}
      key={id}
      animate="show"
      initial="hidden"
    >
      {children}
    </motion.div>
  );
};

export default SlideAnim;
