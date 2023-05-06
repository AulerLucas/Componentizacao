import './style.css'

function Footer() {
    return (
        <>
            <section>
                <div>
                    <h2>Minhas redes</h2>
                    <p>Me siga nas redes abaixo!</p>

                    <ul className="social-list">

                        <li>
                            <a
                                target="_blank"
                                href="https://www.github.com/seu-usuario">
                                <i className="fa-brands fa-github fa-2xl" style={{ color: "#000000" }} />
                            </a>
                        </li>

                        <li>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/seu-usuario">
                                <i className="fa-brands fa-linkedin fa-2xl" style={{ color: "#1f3251" }}></i>
                            </a>
                        </li>

                        <li>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/seu-usuario">
                                <i className="fa-brands fa-instagram fa-2xl" style={{ color: "#a53ff8" }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Footer