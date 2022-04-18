import React from 'react'
import styles from "../styles/Featured.module.css"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa"
import Image from 'next/image'
function Featured() {
  const images = [
    "/images/featured.png",
    "/images/featured1.png",
    "/images/featured2.png",
  ]
  
  return (
    <div className={styles.container}>
      <FaAngleLeft className={`${styles.leftArrow} ${styles.arrow}`} layout='fill'/>
      <div className={styles.wrapper}>
        
        {images.map((item, index)=>(
          <div className={styles.imgContainer}  key={index}>
            <Image src={item} alt="" layout='fill' />
          </div>
        ))}
      </div>
      <FaAngleRight className={`${styles.rightArrow} ${styles.arrow}`} layout='fill'/>
    </div>
  )
}

export default Featured