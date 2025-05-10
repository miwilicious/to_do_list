## basic-react-todolist

#### Project Overview
This project is a simple to-do list application built with React and TypeScript. It provides a user-friendly interface to add, display, toggle completion, and remove to-do items. The state of the to-do list is persisted in the browser's local storage, so the list remains available even after refreshing the page.

 #### Technologies Used
- React & TypeScript: The project leverages React’s component-based architecture and hooks (such as useState) for managing state, along with TypeScript for type safety.
- Bootstrap: Styling is enhanced with Bootstrap classes to ensure a responsive, clean layout.
- SCSS/CSS: Custom styling is applied through CSS and SCSS files to add a unique look (for example, custom classes like pink-card and bg-pink).
- Local Storage API: The app uses the browser’s local storage to save the list of to-dos, allowing data persistence across sessions.
- Inline SVGs: Decorative SVG icons are embedded within the components to improve the visual appeal.
 
 ### Components and Their Responsibilities

#### 1. App Component
Serves as the main container and entry point of the application.
Sets up the layout with a header that includes decorative SVG icons and a welcoming title.
Embeds the AppToDoList component inside a styled container.


#### 2. AppToDoList Component
Manages the overall state of the to-do list using React’s useState hook.
Initializes state by reading from local storage and writes back to local storage whenever the state changes.
Implements three core functions:
addToList: Creates a new to-do item with a unique ID (using the current timestamp) and adds it to the list.
removeToDo: Filters out a to-do item based on its unique ID.
toggleToDo: Switches the completion status of a to-do item.
Passes these functions as props to child components for adding and displaying to-dos.

#### 3. AddToList Component

Renders a form with an input field and a save button.
Uses a local state to capture the text entered by the user.
When the form is submitted, it calls the addToDo function (received via props) with the entered text, then clears the input field.

#### 4. ShowList Component

Receives the current list of to-do items and functions for removing and toggling items as props.
Displays a message when there are no items to show.
Iterates over the list of to-dos and renders each item within a styled list.
Each item shows its text and includes two SVG icons:
One icon toggles the completion status (with a different SVG displayed for completed vs. active items).
Another icon removes the to-do item from the list.

### Data Flow and State Management

#### State Initialization:
The AppToDoList component initializes its state by parsing a JSON string stored in local storage. If no data exists, it defaults to an empty array.

#### Adding a To-Do:
When a user enters text in the AddToList component and submits the form, the addToList function is triggered. This function creates a new to-do using the current timestamp as a unique ID and updates the state.

#### Toggling and Removing:
The ShowList component displays the to-do items and provides interactive elements to toggle the done status or remove items. Both actions trigger state updates in AppToDoList, which in turn updates local storage to maintain persistence.

### Styling and Layout

#### Bootstrap Integration:
The project uses Bootstrap classes for a responsive and modern layout, such as containers, flexbox utilities, and card components.

#### Custom Styles:
Custom CSS/SCSS files (e.g., App.css, AddToList.scss, and Showlist.scss) further style components with specific classes like pink-card and bg-pink, adding a unique aesthetic.

#### Inline SVG Icons:
SVGs are used for decorative purposes (in the header) and as interactive icons (for toggling and removing items). Their inline implementation allows for easy customization of attributes such as size and fill color.


## demo


### funtionality of list

![image](./learn-react/public/demo/1.PNG)
![image](./learn-react/public/demo/2.PNG)
![image](./learn-react/public/demo/3.PNG)
![image](./learn-react/public/demo/4.PNG)




## Installation
 
### 1. Clone this repository
```
https://github.com/miwilicious/basic-react-todolist
```
 
### 2. Navigate to the project folder
```
cd react_list_projekt
```
 
### 3. Install dependencies
```
npm install
```
 
### 4. Run the application
```
npm run dev
```
The application will be available at local: http://localhost:5173/