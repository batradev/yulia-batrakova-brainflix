This is the frontend for the BrainFlix project developed during the BrainStation bootcamp

**Created by**: Yulia Batrakova

## Overview

BrainFlix is a video streaming platform prototype developed with React. It simulates a real-world application, allowing users to view videos, upload new content, and interact with video details.

## Features

- **Responsive Design**: Fully responsive interface matching the provided mockups.
- **Dynamic Routing**: Multi-page application using React Router DOM.
- **API Integration**: Fetches video data from a custom backend API.
- **Video Upload**: Users can upload new videos through a form.
- **Like Functionality**: Users can like videos to interact and show appreciation for the content.
- **Comment Management**: Users can add and delete comments on videos.
- **State Management**: Utilizes React Hooks for managing state and lifecycle methods.
- **Styling**: Styled with SASS and follows BEM methodology for class naming.

## Technologies Used

- React
- React Router DOM
- Axios
- Flexbox
- SASS
- JavaScript
- HTML 

## Installation and Setup

1. **Clone the Repository**

```bash
git clone git@github.com:batradev/yulia-batrakova-brainflix.git
```

2. **Navigate to the Project Directory**

```bash
cd yulia-batrakova-brainflix
```

3. **Install Dependencies**

```bash
npm install
```

4. **Start the Application**

```bash
npm start
```
The application will run at http://localhost:3000.

## Prerequisites
Ensure the BrainFlix Backend server is running.
Node.js and npm should be installed on your machine.

## API Configuration
The frontend communicates with the backend API running at http://localhost:8080. If your backend server is running on a different port or URL, update the API base URL accordingly in your frontend code.