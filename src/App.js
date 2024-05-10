import React from "react";
import "./App.css";
function App() {
  return (
    <div className="con">
      <form className="contact-form" method="POST">
        <label>Name</label>
        <input placeholder="Enter name..."></input>
        <label>Email</label>
        <input placeholder="Enter email..."></input>
        <label>Enter Message</label>
        <input placeholder="Enter message..."></input>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default App;
