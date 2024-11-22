import React, { createContext, useContext, useState } from 'react';

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Bruschetta', description: 'Grilled bread with fresh tomatoes, garlic, and olive oil.', price: 50, imageUrl: 'https://www.lifeasastrawberry.com/wp-content/uploads/2012/11/warm-bruschetta-1.jpg', course: 'Starters' },
    { id: 2, name: 'Greek Salad', description: 'Crispy greens, tomatoes, cucumbers, olives, and feta cheese.', price: 60, imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/greek-salad-index-642f292397bbf.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*', course: 'Starters' },
    { id: 3, name: 'Soup of the Day', description: 'A rich and creamy seasonal soup.', price: 45, imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/2/2016/08/25097.jpg?quality=90&crop=2px,151px,596px,542px&resize=556,505', course: 'Starters' },
    { id: 4, name: 'Grilled Steak', description: 'Juicy grilled steak served with a side of garlic butter.', price: 150, imageUrl: 'https://www.wholesomeyum.com/wp-content/uploads/2022/06/wholesomeyum-Grilled-Steak-16.jpg', course: 'Mains' },
    { id: 5, name: 'Margherita Pizza', description: 'Classic pizza with fresh mozzarella, tomatoes, and basil.', price: 120, imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2023/07/margherita-pizza-recipe.jpg', course: 'Mains' },
    { id: 6, name: 'Grilled Salmon', description: 'Fresh salmon fillet served with a lemon dill sauce.', price: 170, imageUrl: 'https://www.allrecipes.com/thmb/CfocX_0yH5_hFxtbFkzoWXrlycs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-12720-grilled-salmon-i-VAT-4x3-888cac0fb8a34f6fbde7bf836850cd1c.jpg', course: 'Mains' },
    { id: 7, name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with a molten center.', price: 80, imageUrl: 'https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg', course: 'Desserts' },
    { id: 8, name: 'Tiramisu', description: 'Classic Italian dessert with coffee and mascarpone.', price: 85, imageUrl: 'https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg', course: 'Desserts' },
    { id: 9, name: 'Cheesecake', description: 'Deliciously creamy cheesecake with a graham cracker crust.', price: 95, imageUrl: 'https://i.ytimg.com/vi/uP7cKoOly0k/maxresdefault.jpg', course: 'Desserts' }, 
  ]);

  const [filteredItems, setFilteredItems] = useState(menuItems); 
  const [role, setRole] = useState('');  // 'chef' or 'user'

  // Remove menu item from both menuItems and filteredItems
  const removeMenuItem = (id) => {
    setMenuItems((prevMenuItems) => {
      const updatedMenuItems = prevMenuItems.filter((item) => item.id !== id);
      return updatedMenuItems;
    });

    setFilteredItems((prevFilteredItems) => {
      const updatedFilteredItems = prevFilteredItems.filter((item) => item.id !== id);
      return updatedFilteredItems;
    });
  };

  return (
    <MenuContext.Provider value={{ menuItems, filteredItems, removeMenuItem, role, setRole, setFilteredItems }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => useContext(MenuContext);
