import React, { FormEvent, useState } from 'react';
import TextField from '@mui/material/TextField';
import { sendForm } from 'emailjs-com';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Stack } from '@mui/material';
import {app} from "../../lib/firebase"
import {getDatabase, ref, set} from "firebase/database"

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
const db = getDatabase(app);
const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
  
    const handleSubmit = (e:FormEvent) => {
      e.preventDefault();
        console.log("formdata : ",name,email,subject,phone,comment);
        set(ref(db, 'users/' + name), {
            username: name,
            email: email,
            subject:subject,
            phone:phone,
            comment:comment
          });
    };
  
    return (
      <div style={{ background: '#5F709E', padding: '30px' }}>
      <Stack>
        <Stack padding={"36px 16px"}>
            <p className="text-4xl text-center p-4 font-bold" style={{fontFamily: 'Conthrax Sb'}}>
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
            <Button type="submit" variant="contained"    sx={{
                
                fontSize:"24px",
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
                }}>
                        Submit
                        
                    </Button>
          </FormContainer>
        </form>
      </Stack>
      </div>
    );
  };

export default ContactForm

