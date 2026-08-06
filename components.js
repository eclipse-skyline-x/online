const templateCSS = `
<style>
    /* Shared Header & Footer CSS */
    header {
        background-color: rgb(26, 26, 26);
        padding: 20px 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid var(--accent-blue);
        position: sticky;
        top: 0;
        z-index: 100;
    }

    .logo {
        display: flex;
        align-items: center;
        text-decoration: none;
    }

    .logo img {
        max-height: 60px;
        width: auto;
        max-width: 100%;
        object-fit: contain;
    }

    nav a {
        color: var(--text-main);
        text-decoration: none;
        margin-left: 30px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 0.9em;
        transition: color 0.3s ease;
    }

    nav a:hover, nav a.active {
        color: var(--accent-blue);
    }

    footer {
        background-color: var(--bg-secondary);
        text-align: center;
        padding: 30px;
        margin-top: 50px;
        border-top: 1px solid #222;
        color: var(--text-muted);
        font-size: 0.9em;
    }

    /* Responsive Design for Header/Footer */
    @media (max-width: 768px) {
        header {
            flex-direction: column;
            gap: 15px;
        }
        .logo img {
            max-height: 50px;
        }
        nav a {
            margin: 0 10px;
        }
    }
</style>
`;

class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = templateCSS + `
        <header>
            <a href="index.html" class="logo">
                <img src="assets/transparent-logo.png" alt="Skyline-X Logo">
            </a>
            <nav>
                <a href="index.html#about">About</a>
                <a href="index.html#join">Join Us</a>
                <a href="media-hall.html">Media Hall</a>
                <a href="index.html#discord">Discord</a>
            </nav>
        </header>
        `;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>&copy; 2026 Skyline-X Street Racing. All rights reserved.</p>
            <p>Not affiliated with Rockstar Games. Or ECRP</p>
            <img style="width: 170px; height: auto;" src="assets/transparent-logo.png"> 
        </footer>
        `;
    }
}

// Define the custom elements
customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);