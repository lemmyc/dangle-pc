import React from 'react'
import { FaShoppingCart, FaSearch } from 'react-icons/fa'
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
                    <FaSearch  className={styles.searchBtn}/>
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
                            <FaShoppingCart className={styles.shoppingCart} />
                        </li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar