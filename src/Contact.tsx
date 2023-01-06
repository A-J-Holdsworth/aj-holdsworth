import { Button, Grid, TextField } from '@mui/material';
import './Contact.scss';
import SendIcon from '@mui/icons-material/Send'

const Contact = () => {

    return (
        <div className='contact'>
            <h1>Contact Me</h1>

            <p>
                Please feel free to contact me directly by calling me on <a href="tel:07968814135">07969071786</a> or by emailing me at <a href='mail:andrew.holdsworth@blueyonder.co.uk'>andrew.holdsworth@blueyonder.co.uk</a>
            </p>

            <h1>Request a Callback</h1>

            <form>
                <Grid container rowSpacing={2} spacing={2}>
                    <Grid xs={4} item>
                        <TextField className='name' label="Name" variant='outlined' required />
                    </Grid>
                    <Grid xs={4} item>
                        <TextField className='email' label="Email" variant='outlined' required />
                    </Grid>
                    <Grid xs={4} item>
                        <TextField className='phone' label="Phone Number" variant='outlined' required />
                    </Grid>
                    <Grid xs={12} item>
                        <TextField className='query' label="Please describe the issue or service you require" variant='outlined' multiline rows={4} required />
                    </Grid>
                    <Grid xs={12} item>
                        <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}

export default Contact;