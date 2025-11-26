import React, { useState } from 'react';
import './billing.css';

const Billing = () => {
  const [formData, setFormData] = useState({
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    zip: '',
    city: '',
    country: 'United States',
    state: '',
    email: '',
    useForShipping: true,
  });

  const [errors, setErrors] = useState({});

  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  
  const validate = () => {
    const newErrors = {};

    if (!formData.cardNumber.trim())
      newErrors.cardNumber = "Card number is required";

    if (!formData.month) newErrors.month = "Month required";
    if (!formData.year) newErrors.year = "Year required";

    if (!formData.cvv) newErrors.cvv = "CVV required";
    else if (formData.cvv.length !== 3)
      newErrors.cvv = "CVV must be 3 digits";

    if (!formData.firstName.trim())
      newErrors.firstName = "First name required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last name required";

    if (!formData.address1.trim())
      newErrors.address1 = "Address required";

    if (!formData.zip.trim())
      newErrors.zip = "Zip code required";

    if (!formData.city.trim())
      newErrors.city = "City required";

    if (!formData.state.trim())
      newErrors.state = "State required";

    if (!formData.email.trim())
      newErrors.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";

    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Billing Form Submitted Successfully!");
      console.log("Billing Data:", formData);

      
      setFormData({
        cardNumber: '',
        month: '',
        year: '',
        cvv: '',
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        zip: '',
        city: '',
        country: 'United States',
        state: '',
        email: '',
        useForShipping: true,
      });
    }
  };

  return (
    <form className="billing-form" onSubmit={handleSubmit}>

      <h3>Billing Info</h3>

      
      <div>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card #"
          value={formData.cardNumber}
          onChange={handleChange}
        />
        {errors.cardNumber && <p className="error">{errors.cardNumber}</p>}
      </div>

      
      <div className="row">
        <div>
          <select name="month" value={formData.month} onChange={handleChange}>
          <option value="">Month</option>
          {[...Array(12).keys()].map(m => (
            <option key={m+1} value={m+1}>{m+1}</option>
          ))}
        </select>
       
      
        {errors.month && <p className="error">{errors.month}</p>}
        </div>

        <select name="year" value={formData.year} onChange={handleChange}>
          <option value="">Year</option>
          {[2024, 2025, 2026, 2027, 2028, 2029].map(y => (
            <option key={y} value={y}>{y}</option>

          ))}
        </select>
        {errors.year && <p className="error">{errors.year}</p>}

        <input
          type="text"
          name="cvv"
          placeholder="CVV"
          value={formData.cvv}
          onChange={handleChange}
        />
        {errors.cvv && <p className="error">{errors.cvv}</p>}
      </div>

      
      <div className="row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>

      
      <div>
        <input
          type="text"
          name="address1"
          placeholder="Address 1"
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && <p className="error">{errors.address1}</p>}
      </div>

      
      <div>
        <input
          type="text"
          name="address2"
          placeholder="Address 2 (optional)"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>

      
      <div className="row">
        <input
          type="text"
          name="zip"
          placeholder="Zip"
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <p className="error">{errors.zip}</p>}

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}
      </div>

      
      <div className="row">
        <input
          type="text"
          name="country"
          value="United States"
          readOnly
        />

        <select name="state" value={formData.state} onChange={handleChange}>
          <option value="">State</option>
          <option value="CA">Kerala</option>
          <option value="NY">New York</option>
          <option value="TX">Texas</option>
        </select>
        {errors.state && <p className="error">{errors.state}</p>}
      </div>

      
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email (required)"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            name="useForShipping"
            checked={formData.useForShipping}
            onChange={handleChange}
          />
          Use above info for shipping
        </label>
      </div>

    
      <button className="continue-btn">Continue</button>
    </form>
  );
};

export default Billing;
