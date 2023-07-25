import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/women-draw.svg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>CONTACT ME</h1>
        <form
          method="POST"
          action="https://getform.io/f/c7e6203a-0544-450e-a76e-e6591e89c193"
        >
          <input type="email" placeholder="Email" name="email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
