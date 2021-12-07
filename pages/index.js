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
                <title>RUPT - Stories that’ll help you understand the blockchain.</title>
                <meta name="description" content="In 5 minutes, learn about what’s new in blockchain, web 3, crypto, NFTs, dApps, GameFi, and how they are changing the world." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <Link href={"/"}><Image src="/rupt-medium.png" alt="Rupt Logo" width={128} height={31} /></Link>
                    <div onClick={toggleClass}><Image src={src} alt="Rupt Logo" width={dimension[0]} height={dimension[1]} /></div>
                </header>
                <div className={styles.intro}>
                    <Image src="/purple-semi-circle.png" alt="Rupt Logo" width={400} height={150} />
                    <div>
                        <h2>Stories That’ll Help You Understand</h2>
                        <p>In 5 minutes, learn about what’s new in blockchain, web 3, crypto, NFTs, dApps, GameFi, and how they are changing the world.</p>
                    </div>
                </div>
                <div id="form" className={styles.grid}>
                    <div href="https://nextjs.org/docs" className={styles.card}>
                        <div id="mc_embed_signup">
                            <form action="https://werupt.us5.list-manage.com/subscribe/post?u=9931b68204c3b60a1e832fc12&amp;id=1e1de041b0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className={`validate ${styles.subscribeForm}`} target="_blank" noValidate>
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <input type="text" defaultValue="" name="FNAME" id="mce-FNAME" placeholder="First Name" className="required"/>
                                    </div>
                                    <div className="mc-field-group">
                                        <input type="hidden" defaultValue="" name="LNAME" id="mce-LNAME" placeholder="Last Name" />
                                    </div>
                                    <div className="mc-field-group">
                                        <input type="email" defaultValue="" name="EMAIL" placeholder="Email Address" className="required email" id="mce-EMAIL" />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{display:'none'}}></div>
                                        <div className="response" id="mce-success-response" style={{display:'none'}}></div>
                                    </div>
                                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                        <input type="text" name="b_9931b68204c3b60a1e832fc12_1e1de041b0" tabIndex="-1" defaultValue="" />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" placeholder="Get in!" defaultValue="Get in!" name="subscribe" id="mc-embedded-subscribe" className={styles.formButton} />
                                    </div>
                                </div>
                            </form>
                            <Script id="jQuery" src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js' />
                            <Script id="mailchimp" src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js' />
                            <Script id="mailchimpMore" strategy="lazyOnload">
                                {`(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);`}
                            </Script>
                        </div>
                    </div>
                </div>
                <div className={styles.spamText}>
                    <p>No spam. Unsubscribe anytime.</p>
                </div>
                <div className={styles.gridLarge}>
                    <div href="https://nextjs.org/docs" className={styles.card}>
                        <div className={styles.info}>
                            <h2>ABOUT US</h2>
                            <p>Cryptocurrencies are beautiful, but they’re just one of the hundreds of the blockchain’s use cases.</p>
                            <p>Rupt is bridging the knowledge and access gap by providing information about decentralization, the blockchain, DeFi, dApps, NFTs, Web 3, regulations, global players, and all other attendant technologies.</p>
                            <p>Come for the love of knowledge and stay for the endless opportunities.</p>
                        </div>
                    </div>
                </div>
            </main>
            <main className={styles.subMain}>
                <div className={styles.gridLarge}>
                    <div href="https://nextjs.org/docs" className={styles.card}>
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
                        <Link href={"/privacy"}><a className={styles.privacy} target="_blank">Privacy Policy</a></Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
