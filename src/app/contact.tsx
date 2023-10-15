import React, { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

type ContactFormProps = {
  onClose: () => void; // onClose prop is a function that closes the form
};

const FormContainer = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background:rgba(86, 99, 143, 0.9);
  padding: 20px 1px;
  max-width: 700px;
  width: 100%;
  border-radius: 8px;
  display: flex; /* Add this to make the children flex items */
  flex-direction: column; /* Stack child elements vertically */
  justify-content: center; /* Center child elements horizontally */
  align-items: center; /* Center child elements vertically */
`;

const Input = styled('input')`
  background-color: rgba(255, 255, 255, 0.1);
  backdropFilter: "blur(5px)";
  color: white;
  border: 2px solid white;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 6px;
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

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

 
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      await axios.post('https://formspree.io/f/moqodkrd', {
        name,
        email,
        subject,
        phone,
        comment,
        recaptchaValue,
      });

      console.log('Form data sent successfully to Formspree');
    } catch (error) {
      console.error('Error sending form data to Formspree:', error);
    }

    setName('');
    setEmail('');
    setSubject('');
    setPhone('');
    setComment('');
    setIsChecked(false);
    setRecaptchaValue('');
    onClose(); // Close the form when submission is successful
  };

  return (
    <div style={{ background: '#5F709E', padding: '10px' }}>
      <Stack>
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <CloseButton onClick={onClose} variant="outlined" sx={{ color: 'white' }}>
              X
            </CloseButton>
            <Stack padding={"0px 0px"}>
              <p className="text-4xl text-center p-4 font-bold" style={{ fontSize: '25px', fontFamily: 'Conthrax Sb' }}>
                CONTACT US FOR MORE INFORMATION
              </p>
            </Stack>
            <Input
              style={{ marginBottom: '12px', width: '100%', height: '30px' }}
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              style={{ marginBottom: '12px', width: '100%', height: '30px' }}
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              style={{ marginBottom: '12px', width: '100%' }}
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              style={{ marginBottom: '12px', width: '100%', height: '30px' }}
              type="text"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <TextArea
              style={{ marginBottom: '12px', width: '100%' }}
              placeholder="Comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={5}
            />
            <div style={{ marginBottom: '12px', width: '100%', height: '30px' }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <label
                htmlFor="checkbox"
                style={{
                  marginLeft: '8px',
                  color: 'white',
                  padding: '4px 8px',
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
                fontSize: "14px",
                
                textAlign: 'center',
                fontWeight: 70,
                color: "#fff",
                "&.MuiButton-root": {
                  background: 'linear-gradient(197deg, #297FFF 0%, #97ADFD 100%)',
                  borderRadius: '20px',
                  '&:hover': {
                    color: '#2B2B2B',
                  },
                  '&:focus': {
                    color: '#7f95e5',
                  },
                },
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
