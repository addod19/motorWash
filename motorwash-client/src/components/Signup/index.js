import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../../redux/actions/signupActions';

const Signup = ({ signupUser, authenticated: loggedIn }) => {

  const [signupData, setSignupData] = useState({
    cname: 'Addo',
    email: '',
    password: '',
    password_confirmation: '',
    address1: '',
    address2: '',
    mobile: '',
    location: '',
  });

  const { cname, email, password, password_confirmation, address1, address2, mobile, location } = signupData;

  const handleChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value }, console.log(e.target.value));

  const handleSubmit = async evt => {
    evt.preventDefault();
    signupUser(signupData);
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
          onChange={handleChange}
        />
      </div>
      {/* <div className="password-confirmation-wrap">
        <label>Password Confirmation</label>
        <input type="password"
          placeholder="Password Confirmation"
          value={password} name="password_confimation"
          onChange={handleChange}
        />
      </div> */}
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
          Submit
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = state => ({
  authenticated: state.auth,
});

export default connect(mapStateToProps, { signupUser })(Signup);