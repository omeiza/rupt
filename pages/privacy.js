import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script';

export default function Home() {
    const [isDark, setDark] = useState(false);
    const [src, setSrc] = useState('/light.png');
    const [dimension, setDimension] = useState([24, 24]);

    const toggleClass = () => {
        setDark(!isDark);
        if (isDark) {
            setSrc('/light.png');
            setDimension([24, 24]);
        } else {
            setSrc('/vector.png');
            setDimension([17, 26]);
        }

    };

    return (
        <div className={isDark ? 'darkContainer' : 'container'}>
            <Head>
                <title>RUPT - Privacy Policy</title>
                <meta name="description" content="In 5 minutes, learn about what’s new in blockchain, web 3, crypto, NFTs, dApps, GameFi, and how they are changing the world." />
                <link href="/rupt-medium-chopped.png" rel="icon" type="image/png" />
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <Link href={"/"}><Image src="/rupt-medium.png" alt="Rupt Logo" width={128} height={31} /></Link>
                    <div onClick={toggleClass}><Image src={src} alt="Rupt Logo" width={dimension[0]} height={dimension[1]} /></div>
                </header>
                <div className={styles.gridLarge}>
                    <div className={styles.card}>
                        <div className={styles.info}>
                            <h2>PRIVACY POLICY</h2>
                            <p>This privacy notice explains how your ‘Personal Data’ is being processed at Rupt. ‘Personal Data’ means any information relating to an identified or identifiable natural person (‘data subject’). An identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier, or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that natural person.</p>
                            <p>You may enjoy our platform without sharing your Personal Data with us. However, if you subscribe or sign up for any of our services, we believe you should know what data we collect from you, how we process it, and your rights as a data subject.</p>
                            <h3>Definition</h3>
                            <p><strong>‘Platform’</strong> means web application.</p>
                            <p><strong>‘Device’</strong> means any gadget that can access the Platform.</p>
                            <p><strong>‘Personal Data’</strong> is any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
                            <p><strong>‘Cookies’</strong> means data sent by our Platform and stored on your device/browser to save your preferences and ensure a familiar smoother experience during your next visit.</p>
                            <p><strong>‘Services’</strong> means various forms of products and services available to you on the Platform.</p>
                            <p><strong>‘Service Provider’</strong> means any individual or legal person that provides services on the Platform. This includes third-party providers that deliver services necessary to ensure the Platform works properly.</p>
                            <p><strong>‘Usage Data’</strong> means data used to determine how you access and use the site.</p>
                            <p><strong>‘You’</strong> means you as a visitor on the Rupt Platform.</p>
                            <h3>What Information Do We Collect From You?</h3>
                            <h4>A. Personal Data</h4>
                            <p>It is always your choice to share any Personal Data with us:</p>
                            <ol>
                                <li>Where You voluntarily subscribe or sign up to any of our service offerings, we may ask for certain Personal Data such as full name, email address, phone number, or usage data to enable you to access the products and services you subscribed to and ensure your experience on the Platform is smooth.</li>
                                <li>By accessing the Platform, voluntarily providing us with the requested personal information, You consent to the collection and use of the information in accordance with this Privacy Policy. Your consent can be withdrawn at any time by sending a data erasure request to <Link href={"mailto:contact@werupt.com"}><a target="_blank">contact@werupt.com</a></Link>.</li>
                                <li>Where You do not consent to the collection and processing of your Personal Data, do not disclose that data to Us.</li>
                                <li>You can use certain parts of the Platform without sharing your Personal Data with Us.</li>
                            </ol>
                            <h4>B. Analytics Data</h4>
                            <p>We may collect certain data to help us determine how well the Platform is working and how we can improve your experience. These include:</p>
                            <ol>
                                <li><strong>IP Addresses</strong>: This is a unique identifier that recognises the device and local network you work from.</li>
                                <li><strong>Web Beacons</strong>: These help us know your preferences and store them to enable you to have a better-tailored experience the next time you visit.</li>
                                <li><strong>Usage Data</strong>: This is automatic data that takes note of how You use the site. They include duration, type of operating system, screen resolution, etc.</li>
                            </ol>
                            <h3>Why Do We Collect this Information from You?</h3>
                            <ol>
                                <li>To give you access to the products and services to which you subscribed.</li>
                                <li>To improve your experience on the Platform by reviewing your Usage Data.</li>
                                <li>To personalise your experience and allow us to deliver the type of content and product offerings that interest you the most.</li>
                                <li>To manage surveys, contests, or other promotional activities or events created, promoted, developed, sponsored or managed by Rupt or its partners.</li>
                                <li>To conduct security investigations and risk assessments.</li>
                                <li>To comply with legal obligations.</li>
                                <li>To enforce our terms and policies</li>
                            </ol>
                            <h3>Who Might We Share Your Information With?</h3>
                            <p>We will not share your information unless it is required to fulfil a contractual obligation, provide a product or service, or improve your customer experience. We may share your information with third-party companies necessary to ensure the Platform works. These include:</p>
                            <ul>
                                <li>Mailchimp</li>
                                <li>HotJAR</li>
                                <li>Google Analytics</li>
                            </ul>
                            <h3>What Do We Do With Your Information?</h3>
                            <p>The Platform might use your information to:</p>
                            <ol>
                                <li>Send You offers, products, and services</li>
                                <li>Perform a contract or legal obligation</li>
                                <li>Deliver products and services You subscribed to</li>
                                <li>Manage your requests</li>
                                <li>Contact and follow up with You</li>
                                <li>Improve the technology of the Platform and ensure a smoother experience for You</li>
                            </ol>
                            <h3>How Long Do We Keep Your Information?</h3>
                            <p>Your Personal Data is stored for the period which is reasonably required to carry out the intended purpose. We may retain your Personal Data as necessary to enable us to comply with legal obligations such as tax, audits, etc.</p>
                            <h3>How Do We Protect Your Information?</h3>
                            <p>We carry out routine security and vulnerability tests on our platform to ensure it is safe for your use and your personal information is secure.</p>
                            <p>We use certain  Secure Sockets Layer (SSL) software, which encrypts the information You supply.</p>
                            <h3>How Can You Access The Information We Hold?</h3>
                            <p>You can access your Personal Data by sending an access request to <Link href={"mailto:contact@werupt.com"}><a target="_blank">contact@werupt.com</a></Link>.</p>
                            <h3>Your Rights</h3>
                            <p>As the data subject, You have a bundle of rights available to you, including the:</p>
                            <ul>
                                <li>Right to access your Personal Data</li>
                                <li>Right to be forgotten/erasure of your Personal Data</li>
                                <li>Right to withdraw consent</li>
                                <li>Right to object to the processing of your Personal Data</li>
                                <li>Right to portability of your Personal Data</li>
                            </ul>
                            <h3>Changes To The Privacy Notice</h3>
                            <p>Rupt may update the Privacy Notice at any time. When this is done, You will receive a notice of the update by email and the updates made. Where You object to the changes made, You may unsubscribe. Where You continue to use the Platform, it will be construed as your consent to the updated Privacy Notice.</p>
                        </div>
                    </div>
                </div>
            </main>
            <main className={styles.subMain}>
                <div className={styles.gridLarge}>
                    <div className={styles.card}>
                        <h3>Get the Rupt Weekly Letter directly in your inbox.</h3>
                        <a className={styles.likeButton} href="#form">Join</a>
                    </div>
                </div>
            </main>

            <footer className={styles.footer}>
                <div className={styles.grid}>
                    <Image src="/rupt-medium.png" alt="Rupt Logo" width={128} height={31} />
                    <div className={styles.footerLinks}>
                        <ul className={styles.social}>
                            <li><Link href={"https://t.me/joinchat/k3S-XhcEAiQ0MGJk"}><a target="_blank"><Image src="/telegram.png" alt="Rupt Logo" width={32} height={32} /></a></Link></li>
                            <li><Link href={"https://twitter.com/RuptHQ"}><a target="_blank"><Image src="/twitter.png" alt="Rupt Logo" width={32} height={32} /></a></Link></li>
                            <li><Link href={"https://web.facebook.com/RuptHQ"}><a target="_blank"><Image src="/facebook.png" alt="Rupt Logo" width={32} height={32} /></a></Link></li>
                            <li><Link href={"https://www.instagram.com/rupthq/"}><a target="_blank"><Image src="/instagram.png" alt="Rupt Logo" width={32} height={32} /></a></Link></li>
                        </ul>
                        <Link href={"/privacy"} passHref><a className={styles.privacy} target="_blank">Privacy Policy</a></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}