import './ContactUs.css';

function ContactUs() {
  return (
    <div className="ContactUs">
        <form action= "a.php">

            <label htmlFor="name">Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Your Phone No.."/>

            <label htmlFor="phone">Email</label>
            <input type="text" id="email" name="email" placeholder="Your Email Id.."/>

            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" placeholder="Write Subject.." />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }}></textarea>

            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default ContactUs;
