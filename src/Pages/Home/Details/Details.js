import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Details.css';
import phoneImg from './image/phone.png';
import { Fade } from 'react-reveal';



const Details = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <section id='details' className='details-body '>
            <div className="container py-5">
                <Fade bottom duration={2000} distance="100px">   <h2 className='text-light fw-bold m-0 mt-5 p-0'>SEE WHY CUSTOMERS LOVE THE OUR MOBILES</h2>
                    <h6 className='text-secondary  my-4'>DESIGNED TO PERFECTION</h6> </Fade>
                <div className="row mt-5">
                    <div className="col-12 col-md-7 col-lg-5 mb-5">
                        <Fade left duration={2000} distance="50px">  <div>
                            <img src={phoneImg} className='details-img img-fluid' alt="Phone " />
                        </div></Fade>
                    </div>


                    <div className="col-12 col-md-5 col-lg-7">
                        <Fade right duration={2000} distance="50px">   <div>
                            <Accordion className="accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        General settings
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                                        Aliquam eget maximus est, id dignissim quam.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                                        varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                                        laoreet.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                        Advanced settings
                                    </Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        Filtering has been entirely disabled for whole web server
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel6bh-content"
                                    id="panel6bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel7bh-content"
                                    id="panel7bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel8bh-content"
                                    id="panel8bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel9bh-content"
                                    id="panel9bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion className="accordion" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel10bh-content"
                                    id="panel10bh-header"
                                >
                                    <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                                    <Typography sx={{ color: 'text.secondary' }}>
                                        You are currently not an owner
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                                        amet egestas eros, vitae egestas augue. Duis vel est augue.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div></Fade>
                    </div>
                </div>

            </div>
        </section>
    );

};

export default Details;