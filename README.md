# React Props and Components Practice

This repository contains a React project that demonstrates the use of props and components to build reusable UI elements. It includes solutions to three exercises that showcase creating components with props and combining them in the `App.js` file.

## Exercises Overview

### Exercise 1: ColorBlock Component
**Task**: Create a `ColorBlock` component that accepts a prop called `colors` and displays a square (50x50 pixels) with the specified background color. If no color is provided, the square defaults to gray.

- **Implementation**:
  - Inline CSS is used to set the background color.
  - Example usage:
    ```jsx
    <ColorBlock colors="pink" />
    <ColorBlock /> // Defaults to gray
    ```

---

### Exercise 2: ActionButton Component
**Task**: Create an `ActionButton` component that accepts two props:
1. `label` - Text displayed on the button.
2. `onAction` - A function that executes when the button is clicked.

- **Implementation**:
  - The `onAction` prop is connected to the button's `onClick` event handler.
  - Example usage:
    ```jsx
    <ActionButton label="Click me" onAction={() => alert("Button clicked!")} />
    ```

---

### Exercise 3: ImageWithCaption Component
**Task**: Create an `ImageWithCaption` component that accepts two props:
1. `src` - URL of the image.
2. `caption` - Text displayed as a caption below the image.

If the `src` prop is not provided, the text "Image not available" is displayed instead.

- **Implementation**:
  - Conditional rendering is used to check for the presence of `src`.
  - Example usage:
    ```jsx
    <ImageWithCaption src="https://via.placeholder.com/150" caption="Sample Image" />
    <ImageWithCaption /> // Displays "Image not available"
    ```

---

## Project Structure

```plaintext
React-Props-and-Components-Practice/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── components/
│   │   ├── ActionButton.jsx
│   │   ├── ColorBlock.jsx
│   │   ├── ImageWithCaption.jsx
│   ├── App.js
│   ├── index.css
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
```

- **Components**:
  - `ColorBlock.jsx`: Displays a colored square.
  - `ActionButton.jsx`: A customizable button with a click event.
  - `ImageWithCaption.jsx`: Displays an image with an optional caption.

- **Integration**: All components are combined and rendered in `App.js`.

---

## How to Run

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

---

## Demo

The project displays:
1. A `ColorBlock` component with and without a provided color.
2. An `ActionButton` that triggers an alert when clicked.
3. An `ImageWithCaption` component displaying an image with a caption and a fallback message when no image is provided.

---

## Notes

- This project is designed to practice React fundamentals, focusing on props and reusable components.
- The css isn't the main focuse of the tasks that's why it's lacking of design.


Have a great day ♡

![CuteCat](https://github.com/user-attachments/assets/80f4cce6-c461-4bed-beae-01321935bd39)


