import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Divider from '@material-ui/core/Divider';
import './Responsive.css';
import { NavLink } from 'react-router-dom';

function Responsive() {
    return (
        <div>
            <Modal
                open={true}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="error-box">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Sorry for the inconvenience..
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 10 }}>
                        Editor does not support screen widths smaller than <strong>600px</strong>.
                    </Typography>
                    <Divider sx={{
                        marginTop: '10px',
                        marginBottom: '10px',
                        color: 'white',
                    }} />
                    <Typography id="modal-modal-description" sx={{ mt: 10 }}>
                        Please move to a bigger screen size and develepment is meant to be done on pc/laptop so kindly use that, but we are surely working for you on that.
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{
                        marginBottom: '10px'
                    }}>
                        <strong>Thanks for the support! HAPPY HACKING :)   </strong>
                        <NavLink to='/' style={{ textDecoration: 'none', fontSize: '2rem' }}>
                            <div className="btn">
                                <span >
                                    Home
                                </span>
                            </div>
                        </NavLink>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Responsive