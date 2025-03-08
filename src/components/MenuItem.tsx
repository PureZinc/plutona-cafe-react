import { useState } from "react";

type MenuItem = {
    name: string;
    image: string;
    description: string;
    price: number;
    featured: boolean;
}


const allMenuItems: MenuItem[] = [
    {
        name: "Earthling Joe",
        image: "nebula-latte",
        description: "Our typical, down-to-Earth cup of coffee, sourced from the finest continents of Africa & Asia. Choice of roast and sweetening.",
        price: 3.25,
        featured: false
    },
    {
        name: "Quantum Espresso",
        image: "nebula-latte",
        description: "Espresso made with a blended superposition of dark-roasted beans, existing in multiple flavor states simultaneously until observed.",
        price: 4.50,
        featured: true
    },
    {
        name: "Nebula Latte",
        image: "nebula-latte",
        description: "Swirling clouds of steamed milk with colorful galaxy-inspired syrups of your choice in a rich espresso universe.",
        price: 5.75,
        featured: true
    },
    {
        name: "Android's Dream",
        image: "nebula-latte",
        description: "Matcha green tea infused with lavender and silver pearls, the perfect fuel for synthetic beings.",
        price: 6.25,
        featured: true
    },
    {
        name: "Nuclear Blend",
        image: "nebula-latte",
        description: "Medium-roast coffee with an extra kick of caffeine, vitamins, and enough nuclear energy to fuel an android's supercomputer brain.",
        price: 4.25,
        featured: false
    },
    {
        name: "Absolute Zero Brew",
        image: "nebula-latte",
        description: "Coffee beans of any roast, brewed in slower H2O molecules just before Earth rotates one time around it's axis.",
        price: 4.25,
        featured: false
    }
]

const convert = (price: number) => price.toFixed(2);
const getImgURL = (image: string) => `../assets/menu/${image}.jpg`;
    

type MenuPopupProps = {
    item: MenuItem;
    onClose: () => void;
};

const MenuPopup: React.FC<MenuPopupProps> = ({ item, onClose }) => {
    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup-container" onClick={(e) => e.stopPropagation()}>
                <span className="popup-close" onClick={onClose}>&times;</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="popup-timer" id="popupTimer"></div>
                <button className="cta-button" onClick={onClose}>
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

const MenuList: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
    
    return (
        <>
            <div className="menu-grid">
                {allMenuItems.map((item) => (
                    <MenuItemElement key={item.name} item={item} onItemClick={setSelectedItem} />
                ))}
            </div>
            {selectedItem && <MenuPopup item={selectedItem} onClose={() => setSelectedItem(null)} />}
        </>
    );
};

export default MenuList
export {
    MenuItemElement,
    allMenuItems
}

