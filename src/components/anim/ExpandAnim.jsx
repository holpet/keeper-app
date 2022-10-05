import React, { useEffect, useState } from "react";
import { motion, useAnimation, AnimateSharedLayout } from "framer-motion";

//TODO: Finish animation
const ExpandAnim = ({ onAction, children }) => {
  const controls = useAnimation();
  const [noDisplay, setNoDisplay] = useState(!onAction);

  useEffect(() => {
    if (onAction) {
      controls.start({
        //   x: "100%",
        //   backgroundColor: "#f00",
        x: 0,
        transition: { type: "spring", duration: 3, ease: "easeOut" },
      });
    }
  }, [onAction]);

  return (
    <AnimateSharedLayout>
      <motion.div layout animate={controls} initial={{ x: 100 }}>
        {children}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default ExpandAnim;
