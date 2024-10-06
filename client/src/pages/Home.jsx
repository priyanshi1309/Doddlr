import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../config/motion';
import state from '../store';
import {CustomButton} from '../components'

const Home = () => {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro &&
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")} className="header">
                        <img src="./logo.png" alt="logo" className='w-8 h-8 object-contain' />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                MAKE <br className='xl:block hidden' />
                                IT YOURS.
                            </h1>
                        </motion.div>
                        <motion.div className='flex flex-col gap-5' {...headContentAnimation}>
                            <p className='max-w-md font-normal text-grey-600 text-base'>
                            Why blend in when you were born to stand out? 
                            <strong> Customize our products to match your vibe 
                            and let your creativity run wild.</strong> {" "}
                            Your unique masterpiece awaits
                            </p>
                            <CustomButton
                                type="filled"
                                title="Customize it"
                                handleClick={()=> state.intro = false}
                                customStyles="w-fit px-4 py-2.5 font-bold text-sm"  
                            />
                        </motion.div>
                    </motion.div>
                </motion.section>
            }
        </AnimatePresence>
    )
}
export default Home