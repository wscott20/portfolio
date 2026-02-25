'use client';
import styles from "@/page.module.css";
import { useState } from "react";
async function SendContactData(data: {firstname: string, lastname: string, email: string, message: string}) {
  try {
    let req = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    alert('There was an error sending your message. Please try again later.');
  }
}
export default function Contact() {
  let [firstname,setFirstname] = useState('');
  let [lastname,setLastname] = useState('');
  let [email,setEmail] = useState('');
  let [message,setMessage] = useState('');
  return (
    <div className="page">
      <main className={styles.main}>
        <form onSubmit={e=>{
          e.preventDefault();
          SendContactData({firstname, lastname, email, message}).then(()=>alert('Message sent!')).catch(()=>{});
          setFirstname('');
          setLastname('');
          setEmail('');
          setMessage('');
        }}>
          <div className="firstname">
            <label htmlFor="firstname">First Name:</label>
            <br />
            <input type="text" id="firstname" name="firstname" value={firstname} onChange={e=>setFirstname(e.target.value)} />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name:</label>
            <br />
            <input type="text" id="lastname" name="lastname" value={lastname} onChange={e=>setLastname(e.target.value)} />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="message">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" name="message" rows={4} cols={50} value={message} onChange={e=>setMessage(e.target.value)} />
          </div>
          <button type="submit" id="send">Send</button>
        </form>
      </main>
    </div>
  );
}
