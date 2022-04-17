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
                <div className={styles.searchBar}>
                    <input type="text" className={styles.searchFieldControl} placeholder='Nhập sản phẩm cần tìm kiếm' />
                    <Image src="/images/magglass.png" className={styles.searchIcon} alt="" width="32" height="32"  />
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                        <li className={styles.listItem}>Khuyến mãi</li>
                        <li className={styles.listItem}>Đơn hàng</li>
                        <li className={styles.listItem}>Đăng nhập</li>
                        <li className={styles.listItem}>Xây dựng cấu hình</li>
                        <li className={styles.listItem}>
                            Giỏ hàng
                        </li>
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <Image src="/images/cart.png" alt="" width="32" height="32"/>
                    <span className={styles.itemCounter}>2</span>
                </div>
            </div>
        </div>
    )
}
export default Navbar