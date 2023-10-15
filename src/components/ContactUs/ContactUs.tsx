import React, { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha'; 

type Props = {}

const FormContainer = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 0 auto;
`;
const Input = styled('input')`
  background-color: rgba(255, 255, 255, 0.1);
  backdropFilter: "blur(5px)";
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const TextArea = styled('textarea')`
  background-color: rgba(255, 255, 255, 0.1);
  backdropFilter: "blur(5px)";
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 16px;
  font-size: 16px;
`;

const MuiBaseInput ={
  "&.MuiInputBase-input": {
    color: "#fff !important",
  }
}

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isChecked, setIsChecked] = useState(false); // State for checkbox
  const [recaptchaValue, setRecaptchaValue] = useState(''); 

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("formdata: ", name, email, subject, phone, comment);

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      // Send form data to Formspree endpoint
      await axios.post('https://formspree.io/f/moqodkrd', {
        name,
        email,
        subject,
        phone,
        comment,
        recaptchaValue, 
      });

      // You can add a success message here or any other logic you need.
      console.log('Form data sent successfully to Formspree');
    } catch (error) {
      console.error('Error sending form data to Formspree:', error);
      // Handle error or display an error message to the user.
    }

    // Clear the form fields after submission
    setName('');
    setEmail('');
    setSubject('');
    setPhone('');
    setComment('');
    setIsChecked(false); // Reset the checkbox
    setRecaptchaValue(''); 
  };

  return (
    <div style={{ background: '#5F709E', padding: '30px' }}>
      <Stack>
        <Stack padding={"36px 16px"}>
          <p className="text-4xl text-center p-4 font-bold" style={{ fontFamily: 'Conthrax Sb' }}>
            CONTACT US FOR MORE INFORMATION
          </p>
        </Stack>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="text" 
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextArea
              placeholder="Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
             <label
  htmlFor="checkbox"
  style={{
    marginLeft: '8px',
    color: 'white', // Change the color to white
    padding: '4px 8px', // Add spacing around the label
  }}
>
  Please select for being our Value Added Resourcer (VAR)
</label>

            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ transform: 'scale(0.8)' }}>
                <ReCAPTCHA
                  sitekey="6LcjjOInAAAAAD2hpBs97kvMKO8QcDfZ-byl04i3"
                  onChange={(value) => setRecaptchaValue(value ?? '')}
                />
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: "24px",
                textAlign: 'center',
                fontWeight: 700,
                color: "#fff", // Change the color of the button text
                "&.MuiButton-root": {
                  background: 'linear-gradient(197deg, #297FFF 0%, #97ADFD 100%)',
                  borderRadius: '20px',
                  '&:hover': {
                    color: '#2B2B2B' // Change to desired hover color
                  },
                  '&:focus': {
                    color: '#7f95e5' // Change to desired focus color
                  }
                }
              }}
            >
              Submit
            </Button>
          </FormContainer>
        </form>
      </Stack>
    </div>
  );
};

export default ContactForm;
