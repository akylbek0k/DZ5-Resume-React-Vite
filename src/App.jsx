import React from "react";
import "./App.css";

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

function App() {
  return (
    <div className="paper">
      <header className="top">
        <div className="top-line"><span>PORTFOLIO / 2026</span><span>WEB DEVELOPER</span></div>
        <div className="hero-title"><span className="outline">RÉ</span><span>SUMÉ</span></div>

        <div className="hero-grid">
          <div className="meme-photo">
            <img src={img("meme_resume.png")} alt="Мем для профиля" />
            <div className="sticker">WHO<br />AM I?</div>
            <div className="tape">STUDENT<br />DEVELOPER</div>
          </div>

          <div className="intro">
            <div className="red-label">HELLO, I'M</div>
            <h1>Акылбек<br /><strong>Асанбеков</strong></h1>
            <p className="role">Студент · Web Developer</p>
            <p className="description">Начинающий разработчик, который изучает веб-технологии, программирование и создание современных интерфейсов.</p>
            <div className="mini-info">
              <div><b>LOCATION</b><br />Бишкек, Кыргызстан</div>
              <div><b>FOCUS</b><br />Frontend / Backend</div>
            </div>
          </div>
        </div>

        <div className="meme-strip">
          <div className="meme-card tilt-left"><img src={img("meme_blue_1.png")} alt="Мем" /><span>WHEN CODE<br />FINALLY WORKS</span></div>
          <div className="meme-card tilt-right"><img src={img("meme_blue_2.png")} alt="Мем" /><span>ME AFTER<br />FIXING CSS</span></div>
          <div className="meme-card tilt-left-small"><img src={img("meme_alien.png")} alt="Мем" /><span>DEBUGGING<br />AT 03:00</span></div>
        </div>
      </header>

      <main>
        <section className="section about">
          <div className="section-title"><span>01</span><h2>ABOUT<br /><em>ME</em></h2></div>
          <div className="section-content">
            <p className="big-text">Я изучаю программирование и веб-разработку и создаю учебные проекты, чтобы превращать идеи в работающие цифровые продукты.</p>
            <p>В процессе обучения работаю с HTML, CSS, JavaScript, Java, Python и базами данных. Интересуюсь архитектурой приложений, алгоритмами и современными веб-интерфейсами.</p>
          </div>
        </section>

        <section className="dark-section">
          <div className="section-title light"><span>02</span><h2>MY<br /><em>SKILLS</em></h2></div>
          <div className="skill-grid">
            <div className="skill-card featured"><strong>HTML</strong><span>01</span><p>Семантическая разметка<br />и структура страниц</p></div>
            <div className="skill-card"><strong>CSS</strong><span>02</span><p>Flexbox · Grid<br />адаптивная вёрстка</p></div>
            <div className="skill-card"><strong>JS</strong><span>03</span><p>DOM · Events<br />Fetch API</p></div>
            <div className="skill-card"><strong>JAVA</strong><span>04</span><p>ООП · Spring Boot<br />REST API</p></div>
            <div className="skill-card"><strong>PYTHON</strong><span>05</span><p>Основы анализа данных<br />и парсинга</p></div>
            <div className="skill-card"><strong>SQL</strong><span>06</span><p>PostgreSQL<br />работа с БД</p></div>
          </div>
          <div className="skills-meme"><img src={img("meme_alien.png")} alt="Мем" /><div><b>SKILL UNLOCKED:</b><span>survived another CSS bug</span></div></div>
        </section>

        <section className="section experience">
          <div className="section-title"><span>03</span><h2>SELECTED<br /><em>PROJECTS</em></h2></div>
          <div className="projects">
            <article className="project"><div className="project-number">01 / WEB</div><h3>Мини-POS</h3><p>Учебное приложение для управления товарами и расчёта стоимости покупок.</p><div className="tags"><span>JAVA</span><span>SPRING BOOT</span><span>POSTGRESQL</span></div></article>
            <article className="project"><div className="project-number">02 / PYTHON</div><h3>IT Vacancy Aggregator</h3><p>Парсер и обработчик информации о вакансиях для учебного проекта.</p><div className="tags"><span>PYTHON</span><span>PARSING</span></div></article>
            <article className="project"><div className="project-number">03 / FRONTEND</div><h3>Web Projects</h3><p>Серия практических сайтов для изучения HTML, CSS, JavaScript и адаптивной вёрстки.</p><div className="tags"><span>HTML</span><span>CSS</span><span>JAVASCRIPT</span></div></article>
          </div>
          <div className="meme-banner"><img src={img("meme_blue_1.png")} alt="Мем" /><div><small>REAL-LIFE EXPERIENCE</small><h3>«Работает? Не трогай.»</h3></div><img src={img("meme_blue_2.png")} alt="Мем" /></div>
        </section>

        <section className="split">
          <div className="education">
            <div className="section-title light"><span>04</span><h2>EDUCA<br /><em>TION</em></h2></div>
            <div className="edu-content"><p className="year">2025 — NOW</p><h3>INAI</h3><p>Кыргызско-Германский институт<br />прикладной информатики</p><p className="muted">Web-разработка / прикладной анализ данных</p></div>
          </div>
          <div className="languages">
            <div className="section-title"><span>05</span><h2>LANG<br /><em>UAGES</em></h2></div>
            <ul><li><b>Русский</b><span>Свободно</span></li><li><b>Кыргызский</b><span>Свободно</span></li><li><b>English</b><span>Intermediate</span></li><li><b>Deutsch</b><span>A1</span></li></ul>
          </div>
        </section>

        <section className="contact">
          <div><p className="red-label">LET'S CONNECT</p><h2>BUILD SOMETHING<br /><em>USEFUL.</em></h2></div>
          <div className="contact-data"><p><span>EMAIL</span> example@email.com</p><p><span>GITHUB</span> github.com/yourusername</p><p><span>CITY</span> Bishkek, Kyrgyzstan</p></div>
        </section>
      </main>

      <footer><span>AA / RESUME</span><span>© 2026</span><span>THANK YOU</span></footer>
    </div>
  );
}

export default App;
