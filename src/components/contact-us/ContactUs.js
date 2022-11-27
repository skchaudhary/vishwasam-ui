import './ContactUs.css';

function ContactUs() {
  return (
    <div className="ContactUs">
        <form action= "a.php">

            <label for="name">Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" placeholder="Your Phone No.."/>

            <label for="phone">Email</label>
            <input type="text" id="email" name="email" placeholder="Your Email Id.."/>

            <label for="subject">Subject</label>
            <input id="subject" name="subject" placeholder="Write Subject.." />

            <label for="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." style="height:200px"></textarea>

            <input type="submit" value="Submit"/>
        </form>
    </div>
  );
}

export default ContactUs;
