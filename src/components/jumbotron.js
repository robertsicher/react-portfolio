import '../App.css';

function Jumbotron() {
  return (
    <div class="jumbotron pt-4 pb-4 shadow-sm" id="jumbotron">
        <div class="container">
            <h1 class="display-4">George Robertshaw</h1>
            <h3>Welcome to my portfolio page</h3>
            <p>On this website you will learn more about me, find some of the projects I have created or been involved in,
            and find the best ways to contact me</p>
            <p><a class="btn mt-1 btn-dark btn-lg mr-3" href="https://github.com/robertsicher" target="blank"
                role="button">Skip
                the fluff and view my github profile »</a> 
                <a class="btn mt-1 btn-dark btn-lg"
                href="../public/cv-library-general-cv-template.docx" download role="button">Download my CV »</a></p>
        </div>
    </div>
  );
}

export default Jumbotron;
