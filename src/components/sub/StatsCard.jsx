const { useInView, motion } = require("framer-motion");
const { useRef } = require("react");

export const StatCard = ({ title, value, subtext, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col items-center justify-center rounded-lg gap-1  "
    >
      <span className="text-gray-400 text-center">{icon}</span>
      <h3 className="text-sm font-medium text-gray-400 text-center">{title}</h3>
      <p className="text-xl font-bold text-yellow-500 text-center ">{value}</p>
      <p className="text-sm text-gray-400 text-center">{subtext}</p>
    </motion.div>
  );
};
