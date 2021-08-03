import React from 'react';
import styles from './Footer.module.scss';
import {contacts} from "../../fixtures/data";
import Logo from '../../assets/big_logo.svg';
import Twitter from '../../assets/twitter.svg';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Youtube from '../../assets/youtube.svg';
import Location from '../../assets/location.svg';
import Phone from '../../assets/phone.svg';
import Letter from '../../assets/letter.svg';
import Agency from '../../assets/EAIC.svg';

const Footer = () => {
    const contactItems = contacts.map((item, index) => {
        return (
                <li>
                    <div className={styles.contacts_cart}>
                        <h4>Representative office</h4>
                        <div className={styles.contacts_details}>
                            <div className={styles.contacts_item}>
                                <img src={Location} alt="location"/>
                                <div>
                                    <p>{item.city}</p>
                                    <p>{item.street}</p>
                                </div>
                            </div>
                            <div className={styles.contacts_item}>
                                <img src={Phone} alt="phone"/>
                                <div>
                                    <p>{item.phone}</p>
                                </div>
                            </div>
                            <div className={styles.contacts_item}>
                                <img src={Letter} alt="letter"/>
                                <div>
                                    <p>{item.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            )
    })
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_top}>
                    <div className={styles.footer_logo}>
                        <div className={styles.footer_image}>
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div className={styles.footer_socials}>
                            <img src={Twitter} alt="twitter"/>
                            <img src={Facebook} alt="facebook"/>
                            <img src={Instagram} alt="instagram"/>
                            <img src={Youtube} alt="youtube"/>
                        </div>
                    </div>
                    <div className={styles.footer_contacts}>
                        <ul>
                            {contactItems}
                        </ul>
                    </div>
                </div>
                <div className={styles.footer_bottom}>
                    <div>
                        <div className={styles.footer_sign}>
                            <img src={Agency} alt="agency"/>
                        </div>
                            <div className={styles.footer_agency}>
                                <p>European Agency of Inspecting and Certification OU</p>
                                <p>Notifed Body 2702</p>
                            </div>
                    </div>
                    <div className={styles.footer_developers}>
                        <p>Разработка сайта: <span>Webbynavia</span></p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;