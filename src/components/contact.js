import '../App.css';


function Contact() {
  return (
    <section class="section" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="section-title">
                        <h2>Get In Touch</h2>
                        <p>Contact me to find out more information about projects I've created</p>
                    </div>
                </div>
            </div>
            <div class="row flex-row-reverse">
                <div class="col-md-7 col-lg-8 m-15px-tb">
                    <div class="contact-form">
                        <form action="MAILTO:g.robertshaw@hotmail.co.uk?subject=Github Portfolio Contact" method="post"
                            enctype="text/plain" class="contactform contact_form" id="contact_form">
                            <div class="returnmessage valid-feedback p-15px-b"
                                data-success="Your message has been received, We will contact you soon."></div>
                            <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input id="name" type="text" placeholder="Full Name" class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input id="email" type="text" name="email" placeholder="Email Address"
                                            class="form-control"/>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <input id="subject" type="text" placeholder="Subject" class="form-control"
                                            name="subject"/>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <textarea id="message" name="message" placeholder="Message" class="form-control"
                                            rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="send">
                                        <button type="submit" id="send_message" class="px-btn theme"
                                            href="#"><span>Contact me</span> <i class="arrow"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-5 col-lg-4 m-15px-tb">
                    <div class="contact-name">
                        <h5>Email</h5>
                        <p>g.robertshaw@hotmail.co.uk</p>
                    </div>
                    <div class="contact-name">
                        <h5>George Robertshaw</h5>
                        <p>Worcestershire, UK</p>
                    </div>
                    <div class="contact-name">
                        <h5>Here's a Phone Number</h5>
                        <p>07552396688</p>
                    </div>
                    <div class="social-share nav">
                        <a class="email" href="mailto:g.robertshaw@hotmail.co.uk">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <a class="linkedin" href="https://www.linkedin.com/in/george-robertshaw-b73b39181/">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-5">

        </div>
    </section>
  );
}

export default Contact;
