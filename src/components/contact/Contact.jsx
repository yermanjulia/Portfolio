import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/connectimg.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>CONTACT ME</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply soon.</span>}
        </form>
      </div>
    </div>
  );
}
