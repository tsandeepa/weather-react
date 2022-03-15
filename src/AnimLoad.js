import { motion } from "framer-motion";

const AnimLoad = () => {


  
    const variants = {
        initial: { opacity: 0 , scale:0.2},
        visible: i => ({
            opacity:1, 
            scale:1,
            transition: {
                delay: i * 0.1,
            }
        }),
        hover:{ scale: 1.06},
        tap:{scale: 0.9},
    }

    
    
    const elems = ['','','','','','','','','','']
    return ( 

        
        <div>
            <h3>Anim Test</h3>

            

            {
                elems.map((elem,i)=>(
                    <motion.div
                        custom={i}
                        initial="initial"
                        animate="visible"
                        whileHover="hover"
                        variants={variants}
                    >
                                    <label htmlFor="">Test label </label>    
                    </motion.div>
                ))
            }
                
        </div>
     );
}
 
export default AnimLoad;