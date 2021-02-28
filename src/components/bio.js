import '../App.css';

function Bio() {
  return (
    <div class="container mt-2 mb-5 justify-content-center">
        <div class="row mb-3">
            <div class="typewriter col justify-content-center">
                <h1>About me</h1>
            </div>
        </div>
        <div class="row animate__animated animate__fadeInUp animate__delay-2s mb-5">
            <div class="col">
                <h5>I'm currently enrolled in a Full Stack Web Development Bootcamp Course at the University of
                Birmingham. I like to lift heavy awkward things when competing in amateur strongman. I play and
                coach field hockey for my local team.
                </h5>
            </div>
        </div>
        <div class="row text-center animate__animated animate__fadeIn animate__delay-4s mb-5">
            <div class="col-lg-4">
                <img src="https://pbs.twimg.com/profile_images/1201829092544385024/zmDvz1Kc.jpg" alt=""
                class="rounded-circle about-img mb-2" />
                <h2>Current Role</h2>
                <p>I currently work in marketing, where I produced the design and layout for the website, and this was
                produced by an external agency</p>
            </div>
            <div class="col-lg-4">
                <img src="data:image/png;base64,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"
                alt="" class="rounded-circle about-img mb-2" />
                <h2>SEO</h2>
                <p>My primary function within my current role is to implement organic SEO strategies, curently having
            increased web traffic by 50% since joining the company</p>
            </div>
            <div class="col-lg-4">
                <img src="https://www.mckinsey.com/~/media/McKinsey/McKinsey%20Quarterly/The%20Five%20Fifty/Soft-Skills-1536x1536.png"
                alt="" class="rounded-circle about-img mb-2" />
                <h2>Other Skills</h2>
                <p>I've also produced 3d model videos, graphics, copywrite, produced product printing artwork and
                product packaging, as well as day to day maintenance of the website
                </p>
            </div>
        </div>
        <div class="row mt-1 animate__animated animate__fadeIn animate__delay-4s">
            <div class="col text-center">
                <p>
                    <a class="btn btn-secondary px-5" href="https://www.sti-emea.com/" target="blank" role="button">View
                    the website here</a>
                </p>
            </div>
        </div>
    </div>
  );
}

export default Bio;

