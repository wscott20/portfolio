'use client';
import styles from "@/page.module.css";
import { useState } from "react";
function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
  ev.preventDefault();
  let formData = new FormData(ev.target as HTMLFormElement);
  formData.append("access_key", "109c5646-cdaa-4bc2-b126-c624c4dca9ec");
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  }).then((res) => res.json()).then((json) => {
    if (json.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  }).catch((error) => {
    alert("An error occurred while sending the message.");
  });
}
export default function Contact() {
  return (
    <div className="page">
      <main className={styles.main}>
        <form onSubmit={onSubmit}>
          <div className="firstname">
            <label htmlFor="firstname">First Name:</label>
            <br />
            <input type="text" id="firstname" name="firstname" />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name:</label>
            <br />
            <input type="text" id="lastname" name="lastname" />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
          </div>
          <div className="message">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" rows={4} cols={50} />
          </div>
          <button type="submit" id="send">Send</button>
        </form>
      </main>
    </div>
  );
}
