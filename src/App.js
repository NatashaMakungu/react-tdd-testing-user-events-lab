import React, { useState} from "react";

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', interests: [] });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({ ...formData, interests: [...formData.interests, value] });
    } else {
      setFormData({ ...formData, interests: formData.interests.filter(interest => interest !== value) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />
        
        <div>
          <input type="checkbox" id="interest1" name="interest" value="Interest 1" onChange={handleCheckboxChange} />
          <label htmlFor="interest1">Interest 1</label>
        </div>
        <div>
          <input type="checkbox" id="interest2" name="interest" value="Interest 2" onChange={handleCheckboxChange} />
          <label htmlFor="interest2">Interest 2</label>
        </div>
        <div>
          <input type="checkbox" id="interest3" name="interest" value="Interest 3" onChange={handleCheckboxChange} />
          <label htmlFor="interest3">Interest 3</label>
        </div>

        <button type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <p>Form submitted successfully! Name: {formData.name}, Email: {formData.email}, Interests: {formData.interests.join(', ')}</p>
      )}
    </main>
  );
}

export default App;
