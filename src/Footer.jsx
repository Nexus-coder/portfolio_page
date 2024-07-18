function Footer() {
    return (
        <footer>
            <h2>Andrew Kimani &middot; Engineer</h2>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/andrew-kimani-89a022276" target="_blank" rel="noreferrer">
                        <span className="fab fa-linkedin" aria-hidden="true"></span>
                        <span className="sr-only">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Nexus-coder" target="_blank" rel="noreferrer">
                        <span className="fab fa-github-square" aria-hidden="true"></span>
                        <span className="sr-only">Github</span>
                    </a>
                </li>
                <li>
                    <a href="mailto:muchiriandrew025@gmail.com">
                        <span className="fas fa-envelope" aria-hidden="true"></span>
                        <span className="sr-only">Email</span>
                    </a>
                </li>
            </ul>
            <p><small>&copy; 2024 Andrew Kimani. All rights reserved.</small></p>
        </footer>
    )
}

export default Footer;