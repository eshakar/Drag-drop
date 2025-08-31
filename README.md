# Drag-and-Drop Website Builder Prototype

A prototype implementation of **Websites.co.in's drag-and-drop website builder**, transforming the existing **form-based builder** into an intuitive **drag-and-drop interface**.  
Users can drag elements (Text, Image, Button) into a predefined **template structure** (Header, Body, Footer) and customize their properties via a **form-based properties panel**, combining flexibility with the original form-driven workflow.

---

## 🚀 Features

- **Sidebar Toolbox**  
  - Draggable elements (Text, Image, Button) using `react-dnd`.  
  - Built with `shadcn/ui` components for a polished look.

- **Canvas (Template Layout)**  
  - Predefined **three-section template** (Header, Body, Footer).  
  - Each section acts as a **drop zone** with visual feedback (green highlight on drag-over).  
  - Undo/Redo buttons powered by Redux state history.

- **Properties Panel**  
  - Edit element properties (Text content, Font size, Colors, Image URL, Width, etc.).  
  - Updates managed by **Redux** for real-time rendering.

- **State Management**  
  - `Redux Toolkit` handles elements, properties, section IDs, and undo/redo history.  

- **Styling & UI**  
  - **Tailwind CSS** for utility-first responsive design.  
  - **shadcn/ui** components (`Button`, `Card`, `Input`, `Label`, `Select`) for modern accessibility.  

---

## 🛠️ Tech Stack

- **Vite** – Fast build tool  
- **React** – Component-based UI  
- **Redux Toolkit** – State management (with undo/redo support)  
- **react-dnd** – Drag-and-drop functionality  
- **Tailwind CSS** – Styling framework  
- **shadcn/ui** – Accessible UI components  
- **tailwind-merge** – Utility to prevent conflicting Tailwind classes  

---

## 📂 Project Structure



drag-drop-builder/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   └── label.jsx
│   │   ├── Canvas.jsx
│   │   ├── Element.jsx
│   │   ├── PropertiesPanel.jsx
│   │   └── Sidebar.jsx
│   ├── store/
│   │   ├── canvasSlice.js
│   │   └── store.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
├── jsconfig.json
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md

````

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drag-drop-builder
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. Open in your browser:

   ```
   http://localhost:5173
   ```

---

## 🎮 Usage

* **Drag & Drop**
  Drag elements (Text, Image, Button) from the sidebar and drop them into the Header, Body, or Footer.

* **Customize Elements**
  Click an element → Open **Properties Panel** → Update properties like text content, font size, color, or image URL.

* **Undo/Redo**
  Use the buttons in the Canvas toolbar to revert or restore changes.

* **Responsive Design**

  * **Mobile**: Layout stacks vertically.
  * **Desktop**: Layout is horizontal for efficient editing.

---

## 🌱 Future Enhancements

* Grid system (`react-grid-layout`) for **precise element positioning**
* Support for **dynamic templates** (add/remove sections)
* Extended **properties** (padding, margin, alignment, animations)
* Export canvas state as **JSON** for backend integration
* Form validation (e.g., valid image URLs)
* Support for **new element types** (Video, Forms, Galleries, etc.)

---

## ⚠️ Known Limitations

* Template fixed to **3 sections (Header, Body, Footer)**
* Limited property customization (basic text, colors, image width)
* Undo/redo **does not persist across sessions**
* Mobile usability could be enhanced with **collapsible panels** and **touch-friendly drag**

---

## 🚢 Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to Vercel**

   ```bash
   [vercel](https://drag-drop-dun-zeta.vercel.app/)
   ```

---

## 📝 Notes

* Built with **scalability** in mind using modular components and Redux for centralized state.
* Optimized to serve as a **proof-of-concept** for Websites.co.in's drag-and-drop builder.
* All earlier issues (imports, Vite cache, etc.) resolved → stable application.

---

