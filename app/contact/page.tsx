'use client';
import styles from "@/page.module.css";
import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { useEffect } from "react";
function onSubmit(data: any) {
  if (!data["h-captcha-response"]) {
    alert("Please complete the hCaptcha.");
    return;
  }
  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      access_key: '109c5646-cdaa-4bc2-b126-c624c4dca9ec'
    }),
  }).then((res) => res.json()).then((json) => {
    if (json.success) {
      alert("Message sent successfully!");
    } else {
      alert("Failed to send message.");
    }
  }).catch((error) => {
    alert("An error occurred while sending the message.\n" + error.message);
  });
}
export default function Contact() {
  let { register, handleSubmit, setValue } = useForm(),
  onHCaptchaChange = (token: string) => setValue("h-captcha-response", token);
  useEffect(() => {
    register('h-captcha-response')
  }, [register])
  return (
    <div className="page">
      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="firstname">
            <label htmlFor="firstname">First Name:</label>
            <br />
            <input type="text" id="firstname" {...register("firstname")} />
          </div>
          <div className="lastname">
            <label htmlFor="lastname">Last Name:</label>
            <br />
            <input type="text" id="lastname" {...register("lastname")} />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" {...register("email")} />
          </div>
          <div className="message">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea id="message" {...register("message")} rows={4} cols={50} />
          </div>
          <div style={{margin: '20px auto', width: 'fit-content'}}>
            <HCaptcha
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              reCaptchaCompat={false}
              onVerify={onHCaptchaChange}
            />
          </div>
          <button type="submit" id="send">Send</button>
        </form>
      </main>
    </div>
  );
}
