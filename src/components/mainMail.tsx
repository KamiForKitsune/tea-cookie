'use client'
import React, { useEffect, useState } from 'react';
import styles from '../styles/mailStyle.module.css';
import Image from 'next/image';
const InvitationCard: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleEnvelopeClick = () => {
            setIsOpen(prevState => !prevState);
        };

        const envelope = document.querySelector(`.${styles.envelope}`);
        if (envelope) {
            envelope.addEventListener('click', handleEnvelopeClick);
        }

        // Cleanup event listener on component unmount
        return () => {
            if (envelope) {
                envelope.removeEventListener('click', handleEnvelopeClick);
            }
        };
    }, [styles.envelope]);

    return (
        <div className={styles.body}>
            <div className={`${styles.envelope} ${isOpen ? styles.envelopeOpen : ''}`}>
                <div className={styles.card}>
                    <h2 className='mb-4'>Té y Galletas</h2>
                    <p className='text-xs'>Nos encantaría que nos deleites con tu dulce presencia</p>
                    <p className='text-xs'>
                        Fecha: 13/07(Dia sujeto a cambios)
                        <br />
                        Hora: 17:00
                        <br />
                        Lugar: En mi casita
                        <br />
                        <div className='flex flex-row justify-center'>
                            <Image src='/cookie.png' alt="cookie" width={50} height={50} />
                            <Image src='/tea.png' alt="cookie" width={50} height={50} />
                        </div>
                        Estara muuuu weno 
                        <br/>
                        Con mucho cariño: K
                    </p>
                </div>
                <div className={`${styles.flapOutside} ${styles.flapContainer}`}>
                    <div className={styles.flap}>
                        <div className={styles.lining}></div>
                    </div>
                </div>
                <div className={`${styles.flapInside} ${styles.flapContainer}`}>
                    <div className={styles.flap}></div>
                </div>
                <svg
                    version="1.1"
                    className={styles.string}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 400 400"
                    enableBackground="new 0 0 400 400"
                    xmlSpace="preserve"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M0,202.768l247.674,0.566c0,0,17.438,0.373,26.027-0.333c3.292-0.086,10.681-2.608,12.901-6.277
                c9.421-15.545,10.722-22.938,14.738-32.724c14.667-35.75,37.693-52.331,50-41.333c13.166,11.766-4.703,35.756-15.667,48.333
                c-12.222,14.018-23.661,18.463-38,24.667c-12.307,5.325-44.737,16.634-59.435,25.867c-16.134,10.137-19.231,9.467-49.832,39.508"
                    />
                    <path
                        fill="none"
                        stroke="#fff"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        d="M600,201.587l-276.18,0.127c0,0-33.438-0.151-39.313-3.339c-6.144-3.333-38.832-67.707-59.101-70.055
                c-16.598-1.923-16.888,14.444-13.663,23.347c3.156,8.713,11.264,20.667,31.125,32.889c9.736,5.991,23.593,10.774,34.574,14.636
                c1.523,0.536,6.154,2.708,9.058,3.568c50.508,14.908,73.965,32.449,87.632,40.116"
                    />
                </svg>
            </div>
            <p className={styles.textclick}>Ha llegado carta, presionala</p>
            <h6 className='text-xs'>Creditos a: Dianas Universe(Codepen, de ahi lo saque)</h6>
        </div>
    );
};

export default InvitationCard;
