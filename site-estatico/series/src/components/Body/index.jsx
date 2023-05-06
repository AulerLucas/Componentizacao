import './style.css'
import DarkSouls from "../../assets/dark-souls.png"
import ResidentEvil from "../../assets/resident-evil.webp"
import GodOfWar from "../../assets/god-of-war.webp"

function Body() {
    return (
        <>
            <section>
                <div>
                    <h2>Meus jogos</h2>
                    <p>Meus jogos favoritos</p>
                    <ul class="games-list">
                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/directory/game/Dark%20Souls">
                                <img src={DarkSouls} alt="Imagem do jogo Dark Souls" />
                            </a>
                        </li>

                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/directory/game/Resident%20Evil">
                                <img src={ResidentEvil} alt="Imagem do jogo Resident Evil" />
                            </a>
                        </li>

                        <li>
                            <a
                                target="_blank"
                                href="https://www.twitch.tv/directory/game/God%20of%20War">
                                <img src={GodOfWar} alt="Imagem do jogo God of War" />
                            </a>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default Body