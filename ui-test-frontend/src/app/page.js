import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Body } from "./Components/Body/Body";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div class="max-centered">
      <Body/>
      <Footer/>
      </div>
    </main>
  );
}
