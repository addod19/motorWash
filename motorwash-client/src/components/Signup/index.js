import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [clientData, setClientData] = useState({
    cname: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    mobile: '',
    location: '',
  });

  const { cname, email, password, address1, address2, mobile, location } = clientData;

  const makeAPICall = async (clientData) => {
    
  }

  const handleChange = (e) => setClientData({ ...clientData, [e.target.name]: e.target.value });

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log("evt fired");
    // const clientRequest = await makeAPICall();
    // console.log(clientRequest);
    // console.log("after api call");
    const apiConfig = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(clientData),
    };

    try {
      const url = "http://127.0.0.1:3000";
      const res = await axios.post(`${url}/users`, clientData, apiConfig);
      console.log(res.data);
      if (res) setClientData(res.data);
      localStorage.setItem('clients', res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className="cname-wrap">
        <label>Client Name</label>
        <input type="text"
          placeholder="cname"
          value={cname} name="cname"
          autoComplete="on" onChange={handleChange}
        />
      </div>
      <div className="email-wrap">
        <label>Email</label>
        <input type="email"
          placeholder="email"
          value={email} name="email"
          autoComplete="on"
          onChange={handleChange}
        />
      </div>
      <div className="password-wrap">
        <label>Password</label>
        <input type="password"
          placeholder="Password"
          value={password} name="password"
          onChange={handleChange} autoComplete="on"
        />
      </div>
      <div className="address1-wrap">
        <label>Address 1</label>
        <input type="text"
          placeholder="Address1"
          value={address1} name="address1"
          autoComplete="on" onChange={handleChange}
        />
      </div>
      <div className="address2-wrap">
        <label>Address 2</label>
        <input type="text"
          placeholder="Address2"
          value={address2} name="address2"
          autoComplete="on" onChange={handleChange}
        />
      </div>
      <div className="mobile-wrap">
        <label>Mobile</label>
        <input type="text"
          placeholder="Mobile"
          value={mobile} name="mobile"
          autoComplete="on" onChange={handleChange}
        />
      </div>
      <div className="location-wrap">
        <label>Location</label>
        <input type="text"
          placeholder="Location"
          value={location} name="location"
          autoComplete="on" onChange={handleChange}
        />
      </div>
      <div className="submitBtn-wrap">
        <button type="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default Signup;