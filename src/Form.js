import React, { useState } from 'react';
import './form.css';

const Form = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: '', 
        email: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: ''});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name: '', 
        email: '',
        address: '',
        address2: '',
        city: '',
        province: '',
        postalCode: ''
        })
    };


    return (
        <form onSubmit={handleSubmit}>
              
      <div className="row">
        <div className="half-width">
          <label>Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder="Enter email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </div>
        <div className="half-width">
          <label>Name</label>
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </div>
      </div>

      <label>Address</label>
      <input 
        type="text" 
        name="address" 
        placeholder="1234 Main St" 
        value={formData.address} 
        onChange={handleChange} 
      />

      <label>Address 2</label>
      <input 
        type="text" 
        name="address2" 
        placeholder="Apartment, studio, or floor" 
        value={formData.address2} 
        onChange={handleChange} 
      />

      <div className="row">
        <div className="half-width">
          <label>City</label>
          <input 
            type="text" 
            name="city" 
            placeholder="City" 
            value={formData.city} 
            onChange={handleChange} 
          />
        </div>
        <div className="half-width">
          <label>Province</label>
          <select 
            name="province" 
            value={formData.province} 
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            <option value="Ontario">Ontario</option>
            <option value="Quebec">Quebec</option>
            <option value="British Columbia">British Columbia</option>
            {/* Add more provinces as needed */}
          </select>
        </div>
      </div>

      <label>Postal Code</label>
      <input 
        type="text" 
        name="postalCode" 
        placeholder="Postal Code" 
        value={formData.postalCode} 
        onChange={handleChange} 
      />

      <div className="checkbox-container">
        <input 
          type="checkbox" 
          name="terms" 
          checked={formData.terms} 
          onChange={handleChange} 
        />
        <label>Agree Terms & Condition?</label>
      </div>

      <button type="submit">Submit</button>
    </form>
    );
};


export default Form;