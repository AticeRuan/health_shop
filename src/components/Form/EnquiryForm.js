import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import Field from './Fields'

const EnquiryForm = () => {
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  //  const handleOnClick=(e)=>{
  //   e.preventDefault();
  //   setName("")
  //   setSubject("")
  //   setEmail("")
  //   setPhone("")
  //   setMessage("")
  //  }

  return (
    <>
      <form
        target="_blank"
        action="https://formsubmit.co/booking.healthlounge@gmail.com"
        method="POST"
      >
        <Grid
          container
          sx={{
            px: { xs: 5, sm: 10, md: 10, lg: 10, xl: 30 },
            py: { xs: 5, sm: 5, md: 20 },
          }}
        >
          <Grid item xs={12}>
            <Field
              label="Your Name"
              required
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="May I please know your name?"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              label="Phone Number"
              required
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              name="tel"
              placeholder="Your phone number for future contact"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              label="Email"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Your email for future contact"
            />
          </Grid>
          <Grid item xs={12}>
            <Field
              label="Subject"
              required
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Let me know what your inquiry is about"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Message"
              margin="normal"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              multiline={true}
              fullWidth
              minRows={10}
              placeholder="Give us some more details if you can"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: { xs: 2, sm: 2, md: 5 } }}
            >
              Send Meassage
            </Button>
          </Grid>

          <input
            type="hidden"
            name="_subject"
            value={`New enquiry from ${name}`}
          ></input>
          <input
            type="hidden"
            name="_autoresponse"
            value={`Dear ${name},Thanks for contacting Health Lounge Papamoa regarding "${subject}". Please bare with me, I will get back to you as soon as possible. Regards, Wendy`}
          ></input>

          {/* <input type="hidden" name="_url" value="https://yourdomain.co/contact.html"></input> */}
        </Grid>
      </form>
    </>
  )
}

export default EnquiryForm
