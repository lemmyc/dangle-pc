import React from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
const Navbar = ()=>{
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/logo.png" className={styles.brandLogo} alt='' width="64" height="64"/>
                <span className={styles.brandName}>Đăng Lê PC</span>
            </div>
            <div className={styles.item}>
                <div className={styles.searchBar}></div>
            </div>
            <div className={styles.item}>
            <ul className={styles.list}>
                    <li className={styles.listItem}>Trang chủ</li>
                    <li className={styles.listItem}>Sản phẩm</li>
                    <li className={styles.listItem}>Build PC</li>
                    <li className={styles.listItem}>Liên hệ</li>
                    <li className={styles.listItem}>
                        Giỏ hàng
                        <Image src="/images/cart.png" className={styles.cartBtn} alt="" width="48" height="48" />
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar