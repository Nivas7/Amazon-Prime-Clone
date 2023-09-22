/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './dropdownmenu.css';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ drop }) => {


  return (
    <AnimatePresence>
    <div className="dropdown-menu-container">
    <motion.ul 
      initial={{opacity:0, y: "-50%"}}
      animate={{opacity:1, y:"0%"}}
      exit={{opacity:0, y:"-50%", transition:{duration:".35"}}}
      transition={{type:"spring", stiffness: "100", duration:".75"}}
    className="drop-menu">
    {drop.map((dropItems) => (
      <li>{dropItems}</li>
    ))}
  </motion.ul>
</div>
    </AnimatePresence>
  );
}
 
export default DropdownMenu;