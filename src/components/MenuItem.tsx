import { useEffect, useState } from "react";
import popupStyles from "../styles/popup.module.css";

type FilterTypes = "featured" | "popular";

type MenuItem = {
    name: string;
    image: string;
    description: string;
    price: number;
    tags: FilterTypes[];
}

const allMenuItems: MenuItem[] = [
    {
        name: "Earthling Joe",
        image: "nebula-latte",
        description: "Our typical, down-to-Earth cup of coffee, sourced from the finest continents of Africa & Asia. Choice of roast and sweetening.",
        price: 3.25,
        tags: []
    },
    {
        name: "Quantum Espresso",
        image: "nebula-latte",
        description: "Espresso made with a blended superposition of dark-roasted beans, existing in multiple flavor states simultaneously until observed.",
        price: 4.50,
        tags: ["featured"]
    },
    {
        name: "Nebula Latte",
        image: "nebula-latte",
        description: "Swirling clouds of steamed milk with colorful galaxy-inspired syrups of your choice in a rich espresso universe.",
        price: 5.75,
        tags: ["featured"]
    },
    {
        name: "Android's Dream",
        image: "nebula-latte",
        description: "Matcha green tea infused with lavender and silver pearls, the perfect fuel for synthetic beings.",
        price: 6.25,
        tags: ["featured"]
    },
    {
        name: "Nuclear Blend",
        image: "nebula-latte",
        description: "Medium-roast coffee with an extra kick of caffeine, vitamins, and enough nuclear energy to fuel an android's supercomputer brain.",
        price: 4.25,
        tags: []
    },
    {
        name: "Absolute Zero Brew",
        image: "nebula-latte",
        description: "Coffee beans of any roast, brewed in slower H2O molecules just before Earth rotates one time around it's axis.",
        price: 4.25,
        tags: []
    }
]

const convert = (price: number) => price.toFixed(2);
const getImgURL = (image: string) => `../assets/menu/${image}.jpg`;
    

type MenuPopupProps = {
    item: MenuItem;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuPopup: React.FC<MenuPopupProps> = ({ item, isOpen, setIsOpen }) => {
    return (
        <div className={`${popupStyles.popupOverlay} ${isOpen ? popupStyles.popupOverlayActive : ""}`}>
            <div className={popupStyles.popupContainer} onClick={(e) => e.stopPropagation()}>
                <span className={popupStyles.popupClose} onClick={() => setIsOpen(false)}>&times;</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button className="cta-button">
                    Buy For ${convert(item.price)}
                </button>
            </div>
        </div>
    );
};

type MenuItemProps = {
    item: MenuItem;
    onItemClick: (item: MenuItem) => void;
};

const MenuItemElement: React.FC<MenuItemProps> = ({ item, onItemClick }) => {
    return (
        <div className="menu-item" onClick={() => onItemClick(item)}>
            <div className="menu-item-image">
                <img src={getImgURL(item.image)} alt={item.name} />
            </div>
            <div className="menu-item-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <span className="menu-item-price">${convert(item.price)}</span>
            </div>
        </div>
    )
};

interface MenuListProps {
    filter: FilterTypes | null;
}

const MenuList: React.FC<MenuListProps> = ({ filter }) => {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    const [popupOpen, setPopupOpen] = useState<boolean>(false);

    useEffect(() => {
        setPopupOpen(!!selectedItem);
    }, [selectedItem])
    
    return (
        <>
            <div className="menu-grid">
                {allMenuItems
                    .filter((item) => !filter || item.tags.includes(filter))
                    .map((item) => (
                        <MenuItemElement key={item.name} item={item} onItemClick={setSelectedItem} />
                    ))
                }
            </div>
            {selectedItem && <MenuPopup item={selectedItem} isOpen={popupOpen} setIsOpen={setPopupOpen} />}
        </>
    );
};

export default MenuList;
export {
    MenuItemElement,
    allMenuItems
}

