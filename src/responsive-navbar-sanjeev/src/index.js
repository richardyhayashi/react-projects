import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import "./app.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Showcase />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
