import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import img2 from "../src/assets/nft1.webp";
import img1 from "../src/assets/nft2.webp";
import img3 from "../src/assets/nft3.webp";
import image from "../src/assets/ArtBloc.jpg";
import Link from "next/link";

function Home() {
  return(
    <div className={styles.container}>
      <div className={styles.main}>
        <main className={styles.hero}>
          <div className={styles.section}>
            <h2>Mint, Buy & Trade Fractional NFTs</h2>
            <span>
              Mint NFT as a proof for your digital artwork in simple steps and sell it in form of fractions directly on the platform to earn from it. Token Holders earn a profit by holding the token for a period of time
            </span>
            <div className={styles.buttons}>
              <button className={styles.btn}>
                <Link href={"/create"}>Create Listing</Link>
              </button>
              <button className={styles.btn2}>
                {" "}
                <Link href={"/marketplace"}>Marketplace</Link> 
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <Image className={styles.image} src={image} />
          </div>
        </main>
        <h2>Platform Features</h2>

        <div className={styles.collection}>
          <div className={styles.feature}>
            All assets and artwork are stored on decentralized storage like IPFS{" "}
          </div>
          <div className={styles.feature}>
            Own a art piece, NFT just for fractions of the cost{" "}
          </div>
          <div className={styles.feature}>
            Earn a wholesome profit from holding tokens for a short period of time
          </div>
          <div className={styles.feature}>
            Mint Digital Proof as NFT for your Artwork for free in under 60 secs on ArtBloc
          </div>
          <div className={styles.feature}>
            Control the Sale of NFT and tokens for your artwork
          </div>
          <div className={styles.feature}>
            Buy tokens/fractions of the NFTs and NFTs at the same platform
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;