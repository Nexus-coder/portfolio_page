function Project() {
    return (
        <div class="section-blue">
            <section id="projects">
                <h2>Projects I'm proud of</h2>
                <article>
                    <div class="text">
                        <h4>Latest Project</h4>
                        <h3>Clone Imdb</h3>
                        <p class="blackbox">This is a react project created using vite. The bare bones of the project is that it is a imdb clone please enjoy. Just clone the repo and run npm run dev 
                        .Check out the repo<a href="https://github.com/Nexus-coder/imdb"> here.</a>
                        Visit the site <a href="https://imdb-foni.vercel.app/">here.</a>
                        </p>
                        <h4>Technologies used include:</h4>
                        <ul>
                            <li>React</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SVG</li>
                        </ul>
                    </div>
                    <img src="/imdb.png"
                        alt="Screenshot Imdb" />
                </article>
            </section>
        </div>
    )
}

export default Project;