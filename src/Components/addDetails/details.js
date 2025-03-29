import React, { useState } from 'react';
import './details.css';
import arrowIcon2 from './right2.png';

export const Details = ({ selectedTime }) => {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',

  });


  // handling input changes
  const handleChange2 = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormFilled) return;

    const finalData = {
      ...formData,
      selectedTime  // added the selected time from first step 
    };

    // displaying the data from step 1 and step 2 on the screen
    alert(JSON.stringify(finalData, null, 2));

  };

  // checking if all required fields are filled
  const isFormFilled = ['firstName', 'lastName', 'email', 'phoneNumber'].every(
    (field) => formData[field]
  );

  return (
    <div className="heroarea-2">
      <p className="add-details-title">Add Your Personal Details</p>

      <div className="input-details">
        <input
          className="input-field"
          type="text"
          placeholder="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange2}
        />
        <input
          className="input-field"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange2}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange2}
        />
        <input
          className="input-field"
          type="tel"
          placeholder="Phone number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange2}
        />
      </div>

      <div className="checkbox-area">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange2}
        />
        <label className="content-checkbox">
          By clicking the button above, you acknowledge, consent and agree to the following:
          a) Our Privacy Policy and consent to receive notices and other communications electronically;
          b) We take your privacy seriously. You are providing express written consent for to share your information with up to four (4) of its and for, parties calling on behalf of, or authorized third parties on their behalf to contact you (including through automated means; e.g. autodialing, text and pre-recorded messaging) about legal services or other Mass Tort related offers via telephone, mobile device (including SMS and MMS) and/or email, even if your telephone number is currently listed on any state, federal, local or corporate Do Not Call list;
          c) Consent to be contacted is not required in order to purchase goods or services from or the that contact you. You may choose to speak with an individual service provider by dialing (888) 888-8888.
        </label>
      </div>



      <button className={`submit-btn ${isFormFilled ? 'enabled' : 'disabled'}`} onClick={handleSubmit} disabled={!isFormFilled}>
        SUBMIT YOUR DETAILS <img src={arrowIcon2} width={18} height={18} alt="arrow icon" />
      </button>
    </div>
  );
};
