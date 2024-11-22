**Developer: Sinethemba Gwabeni**


**DineDash App 🍽️**


**Overview**

The DineDash App is a modern restaurant menu management system designed to simplify the process of managing, browsing, and interacting with restaurant menus. The app enables restaurant staff to efficiently manage menu items, while customers can browse categorized dishes, view prices, and make informed dining decisions.

This project was built using React Native to provide a responsive and user-friendly experience across both iOS and Android platforms.

**Features**

**🌟 Key Features**

Home Screen:

Displays the average price of dishes for each course (Starters, Mains, Desserts).
Serves as a welcome screen to navigate other features.

Menu Screen:

Allows users to browse dishes categorized into Starters, Mains, and Desserts.
Filtering options for menu items based on courses.
Visual representation of dishes using images and descriptions.

Add Menu Item Screen (Admin/Chef Role):

Lets staff members add new dishes to the menu by filling out details like name, description, course, and price.
Allows staff with the "chef" role to remove dishes from the menu.

Role-Based Access:

Different functionality is accessible based on user roles (e.g., Chef/Admin roles can add or remove menu items).

Responsive Filtering:

Menu items are dynamically filtered based on the selected category (Starters, Mains, Desserts, or All).

Reusable Context API:

Centralized state management using React Context API for menu items and user roles.
Technical Details

**🛠️ Tech Stack**

React Native: Frontend framework for building cross-platform mobile apps.

JavaScript: Primary programming language used for app development.

Context API: State management solution to share and manage data across components.

**🎨 Design**

Clean and modern UI/UX with intuitive navigation.

Cards for menu items with dish images, names, descriptions, and pricing for a polished user experience.

Consistent color palette featuring blue (#4A90E2), white, and yellow to maintain a vibrant yet professional look.

How It Works

Home Screen:

Users are welcomed to the app and can view the average price of menu items categorized by course.

Navigation button leads to the menu browsing screen.

Menu Screen:

Displays all menu items or filtered items by course using buttons (e.g., "Starters," "Mains," "Desserts," or "All").

Menu items include a dish name, description, price, and image.

Add Menu Item Screen (Admin/Chef Only):

Admins/Chefs can add a new dish by entering its name, description, course, and price.

Dishes are added dynamically and immediately reflected in the menu.

Remove Menu Item:

Chefs/Admins can remove dishes by clicking a "Remove" button visible only to authorized users.


**Future Enhancements**

Add Order Management: Allow users to add menu items to a cart and place orders.

Implement Authentication: Secure role-based access with login functionality.

Introduce Real-Time Updates: Use a backend system to sync menu changes in real-time.

Enhance Styling: Add animations and more custom-designed UI components for a better user experience.
