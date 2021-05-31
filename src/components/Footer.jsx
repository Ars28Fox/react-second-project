function Footer() {
    return <footer className="page-footer purple lighten-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Copyright Text
                <a className="grey-text text-lighten-4 right" href="https://github.com/Ars28Fox/react-second-project" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
        </div>
    </footer>
}

export { Footer }