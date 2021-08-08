import { useState } from "react";
import "./GifForm.css";
const GifForm = ({ handleSearch }) => {
  const [form, setForm] = useState({ name: "" });
  const reset = () => {
    setForm({
      name: "",
    });
  };

  const handleChange = (e) => {
    setForm({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.name.value) {
      handleSearch(null);
    } else {
      handleSearch(form);
    }

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="gif-search-input"
          type="text"
          name="name"
          value={form.name}
          placeholder="Search gif..."
          onChange={handleChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default GifForm;
