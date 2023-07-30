import { Button, Grid, TextField } from "@mui/material";
import "./Contact.scss";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  useEffect(() => emailjs.init("YOUR-PUBLIC-KEY-HERE"), []);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const regexp = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

  const formIsValid = () => {
    return !!name && ((!!email && regexp.test(email)) || !!phone) && !!query;
  };

  const submit = () => {
    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          name,
          email,
          phone,
          query,
        },
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <p>
        Please feel free to contact me directly by calling me on{" "}
        <a href="tel:07968814135">07969071786</a> or by emailing me at{" "}
        <a href="mailto:solihullpchelp@outlook.com">
          solihullpchelp@outlook.com
        </a>
      </p>

      <h1>Request a Callback</h1>

      <form>
        <Grid container rowSpacing={2} spacing={2}>
          <Grid xs={4} item>
            <TextField
              className="name"
              label="Name"
              variant="outlined"
              required
              value={name}
              onChange={(v) => setName(v.target.value)}
            />
          </Grid>
          <Grid xs={4} item>
            <TextField
              className="email"
              label="Email"
              variant="outlined"
              required
              value={email}
              onChange={(v) => setEmail(v.target.value)}
            />
          </Grid>
          <Grid xs={4} item>
            <TextField
              className="phone"
              label="Phone Number"
              variant="outlined"
              required
              value={phone}
              onChange={(v) => setPhone(v.target.value)}
            />
          </Grid>
          <Grid xs={12} item>
            <TextField
              className="query"
              label="Please describe the issue or service you require"
              variant="outlined"
              multiline
              rows={4}
              required
              value={query}
              onChange={(v) => setQuery(v.target.value)}
            />
          </Grid>
          <Grid xs={12} item>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={submit}
              disabled={!formIsValid()}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Contact;
