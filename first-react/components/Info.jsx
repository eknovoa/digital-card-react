export default function Info() {
  return (
    <div class="info-container">
      <img className="card-img" src="/images/profile.jpg" alt="" />
      <h1 className="name">Erin Novoa</h1>
      <p className="role">Frontend Developer</p>
      <a className="portfolio-link" href="https://eknovoa.github.io/erin-novoa-portfolio/" target="_blank">My Portfolio</a>
      <div class="info-btns">
        <a className="email-btn" href="mailto:erinnovoa@gmail.com" target="_blank"><i class="fa-solid fa-envelope"></i> Email</a>
        <a className="linkedin-btn" href="https://www.linkedin.com/in/eknovoa/" target="_blank"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>
  )
}