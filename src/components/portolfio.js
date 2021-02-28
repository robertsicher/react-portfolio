  
import PortfolioCard from "./portfoliocard";

const portfolioList = [
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Best of the Rest',
    description: 'The App lets you search for the 10 best restauarants in the a city, then filter them with your choice of cuisines. And then shows you the location on a map s you can get directions to the restaurant.',
    deployed: 'https://genius-pending.github.io/BestOfTheRest/',
    repo: 'https://github.com/genius-pending/BestOfTheRest',
  },
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Weather Dashboard',
    description: 'The Weather Dashboard allows you to search for cities and find out the weather, as well as the forecast and UV levels. This is then stored in the search history so it can be returned later.',
    deployed: 'https://robertsicher.github.io/Homework_06_Weather-Dashboard/',
    repo: 'https://github.com/robertsicher/Homework_06_Weather-Dashboard',
  },
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Day Planner',
    description: 'The Day Planner allows you to schedule events for specific hours of the day, with a visual clock, and colouring coding to show which hour slot of the day you are in that adapts dependent upon the time ',
    deployed: 'https://robertsicher.github.io/Homework_05_Day_Planner_Jquery/',
    repo: 'https://github.com/robertsicher/Homework_05_Day_Planner_Jquery',
  },
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Javascript Quiz',
    description: 'Utilising Javascript in order to make a quiz, with a countdown timer as well as highscore board',
    deployed: 'https://robertsicher.github.io/Homework_04_Javascript_Quiz/',
    repo: 'https://github.com/robertsicher/Homework_04_Javascript_Quiz',
  },
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Template Engine',
    description: 'A project for a manager create a team with links to employees',
    deployed: 'https://robertsicher.github.io/template_engine/',
    repo: 'https://github.com/robertsicher/template_engine',
  },
  {
    image: 'Best_of_the_rest_img.PNG',
    title: 'Readme Generator',
    description: 'A nodejs app to help create a high quality readme',
    deployed: 'https://github.com/robertsicher/Read_me_generator',
    repo: 'https://github.com/robertsicher/Read_me_generator',
  }
]

const Portfolio = () => {
  return (
    <section className="container">
        <div className="row">
      {portfolioList.map((project) => (
        <PortfolioCard key={project.title} data={project}/>
      ))}
      </div>
      <div className="py-5">
      </div>
    </section>

  )
}

export default Portfolio;