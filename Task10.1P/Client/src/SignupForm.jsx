
import React from 'react';
import './SignupForm.css'

const SignupForm = () => {
  return (
    <div className="container">
      <p>
        <b>SIGN UP FOR OUR DAILY INSIDER &nbsp;</b>
      </p>
      <form>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your mail"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
