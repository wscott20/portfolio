import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page">
      <main className={styles.main}>
        <div id='me'>
          <Image 
            src='/profile-pic.jpeg'
            alt='Profile picture'
            className="pfp"
            width={400}
            height={400}
          />
          <div id="text">
            <h2>Will Scott</h2>
            <h3 style={{color: 'hsl(202, 100%, 55%)'}}>A bit about me</h3>
            <p>
              Early stage developer hoping to learn and grow in the field of computer programming.
              I'm exploring a variety of technologies and languages, building small projects along the way to learn how things work and discover what excites me most.
              I hope to keep learning and soon find a field where I can contribute professionally.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
