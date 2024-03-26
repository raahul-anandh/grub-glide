import { useState, useEffect } from "react";

function DetailsForm(props) {
  const [formData, setFormData] = useState({
    name: props.name,
    email: props.email,
    phone: props.phone,
    password: props.password,
    repassword: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(
      {
        name: `${props.name}`,
        email: `${props.email}`,
        phone: `${props.phone}`,
        password: `${props.password}`,
        repassword: '',
      }
    )
  }, [props.name, props.email, props.phone, props.password])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
    setErrors(errors => ({
      ...errors,
      [name]: undefined
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    if (formData.name.length < 3) {
      validationErrors.name = 'Name must have at least 3 characters';
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email address';
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number should consist of 10 digits';
    }

    if (formData.password.length < 6) {
      validationErrors.password = 'Password must be at least 6 characters long';
    }

    if (formData.password !== formData.repassword) {
      validationErrors.repassword = 'Passwords do not match';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, proceed with form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className={props.className}>
      <h2>{props.header}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} required />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" name="repassword" value={formData.repassword} onChange={handleChange} required />
          {errors.repassword && <p className="error">{errors.repassword}</p>}
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default DetailsForm;
