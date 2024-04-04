function Navbar(){
    return (
        <nav>
        <ul>
            <li>
                <h1>
                    <a href=""><span class="fas fa-code" aria-hidden="true"></span> Andrew Kimani</a>
                </h1>
            </li>
            <li><a href="">Projects</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li>
                <a href="https://www.linkedin.com/in/andrew-kimani-89a022276" target="_blank">
                    <span class="fab fa-linkedin" aria-hidden="true"></span>
                    <span class="sr-only">LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="https://github.com/Nexus-coder" target="_blank">
                    <span class="fab fa-github-square" aria-hidden="true"></span>
                    <span class="sr-only">Github</span>
                </a>
            </li>
            <li>
                <a href="" target="_blank" class="button">Resume</a>
            </li>
        </ul>
    </nav>
    )
}

export default Navbar;