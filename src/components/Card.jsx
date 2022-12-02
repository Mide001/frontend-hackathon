import React from "react";
import styles from "../css/Component.module.css";
import styles2 from "../../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import image from "../assets/nft-art1.png";


function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.image}>
                <Image className={styles.image} src={image} alt="nft image" width={300} height={220}></Image>
            </div>
            <div className={styles.card_content}>
                <h3>
                    <u>NFT title here</u>
                </h3>
                <h4>Price: {props.price}</h4>
                <Link href={`/nft/${props.id}`}>
                    <button className={`${styles2.btn} ${styles2.left}`}>NFT Details</button>
                </Link>
            </div>

        </div>
    );
}

export default Card;