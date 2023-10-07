import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={"/vercel.svg"}
        width={500}
        height={300}
        alt="emni"
        style={{ backgroundColor: "white", padding: "2rem" }}
      />
      <Link href={"/products"} className="navigateBTN">
        Go To Product Page
      </Link>
      <Link href={"/addNewProduct"} className="navigateBTN">
        Add New Product
      </Link>
      <Link href={"/users"} className="navigateBTN">
        Go To User Page
      </Link>
    </main>
  );
}
