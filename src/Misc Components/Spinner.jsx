import React from 'react'
import { motion } from 'framer-motion'
import { BounceLoader } from 'react-spinners'

export default function Spinner({ loading }) {
    return (
        <>
            <motion.div className='spinner-container' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0.8 }}>

                <BounceLoader height={60} width={60} loading={loading} color="#01011c" />

            </motion.div>
        </>
    )
}
