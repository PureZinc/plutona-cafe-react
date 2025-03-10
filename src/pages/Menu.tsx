import MenuList, { FilterTypes } from "../components/MenuItem";
import { useState } from "react";

function MenuPage() {
    const [filter, setFilter] = useState<FilterTypes | null>(null);

    const toggleFilter = () => {
        setFilter(!filter ? "featured" : null);
    }

    return (
        <section id="menu" className="full-menu">
            <div className="section-header">
                <h2 className="uppercase">view our full menu</h2>
                <p>With beans harvested from the finest sources on planet Earth!</p>
            </div>

            <div className="menu-filter-items container">
                <button onClick={toggleFilter} className="cta-button">
                    { !!filter ? "All" : "Featured"}
                </button>
            </div>

            <MenuList filter={filter} />

            <div className="section-header">
                <h2 className="uppercase">Still Unsure?</h2>
                <p>Take our coffee test to learn more!</p>
            </div>

            <div className="quiz-container">
                <div id="menu-quiz"></div>
                <div id="quiz-correct"></div>
            </div>
        </section>
    )
}

export default MenuPage