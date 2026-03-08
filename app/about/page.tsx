import styles from "@/page.module.css";
import Image from 'next/image';
export default function About() {
  return (
    <div className="page">
      <Image 
        src='/profile-pic.jpeg'
        alt='Profile picture'
        className="pfp"
        width={100}
        height={100}
        style={{
          float: 'left',
          position: 'relative',
          top: '1em',
          left: '2em'
        }}
      />
      <main className={styles.main}>
        <p>Welcome! I'm Will Scott. I'm interested in IT and computer programming and enjoy experimenting with various projects to see what I can build.
          Right now I'm focused on web development, robotics programming, and general software work, though I'm open to other fields.
          I aim to approach every job with openness, integrity, and humility.
          I also believe in being honest, patient, and willing to learn from mistakes as I develop my skills.</p>
        <br />
        <p>In my free time, I enjoy working on personal projects, playing around with code, cloning certain games, and experimenting with different mechanics.
          I also enjoy playing chess and having fellowship with my church community.
          I graduated from Central Piedmont Community College in 2025 with a certificate in Information Technology in Full Stack Programming. I'm currently based in Charlotte, NC.</p>
        <br />
        <p>Available for hire or freelance work. Let's build something great!</p>
      </main>
    </div>
  );
}