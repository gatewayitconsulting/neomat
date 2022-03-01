import React from "react";
import { cx } from '@emotion/css';

// core components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

// icons
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import SubjectIcon from '@mui/icons-material/Subject';

// images
import newbalanceLogo from "../../../assets/imgs/newbalance.svg";
import syllogisteksLogo from "../../../assets/imgs/syllogisteks.ico";
import gatewayitconsultingLogo from "../../../assets/imgs/gitc.svg";

// styles
import {
    textCenter
} from "../../../assets/styles/neomat";

export default function ExperienceSection() {
    return (
        <div className={cx(textCenter)}>
            <Typography variant="h3" component="h2" style={{ marginTop: "1em", textAlign: "left", marginLeft: ".5em" }} id="experience">Experience</Typography>
            <Grid container spacing={1} style={{ textAlign: "left", marginTop: "1em", marginBottom: "2em", paddingLeft: "2em", paddingRight: "2em" }}>
                <Grid item xs={12}>
                    <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                        <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">March, 2021 - Current</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={newbalanceLogo} style={{ width: "50px", marginRight: ".5em" }} alt="New Balance logo" />
                        <Typography variant="h4" component="h3" style={{ display: "inline" }}>New Balance</Typography>
                    </div>
                    <Typography variant="h5" component="h3" style={{ display: "inline" }}>Software Engineer</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em", marginTop: ".25em" }}>- Currently working</Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "3em" }}>
                    <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                        <RadioButtonUncheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">March, 2018 - March, 2021</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={syllogisteksLogo} style={{ width: "20px", marginRight: ".5em" }} alt="SyllogisTeks logo" />
                        <Typography variant="h4" component="h3" style={{ display: "inline" }}>SyllogisTeks</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "1em" }}>
                        <SubjectIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">March, 2020 - March, 2021</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: ".25em" }}>
                        <img src={newbalanceLogo} style={{ width: "25px", marginRight: ".5em" }} alt="New Balance small logo" />
                        <Typography variant="h5" component="h3" style={{ display: "inline" }}>UI Developer at New Balance</Typography>
                    </div>
                    <Typography variant="body1" style={{ marginTop: ".5em", marginBottom: ".5em" }}>
                        <i>Technologies used replaced with "various technologies" to maintain client privacy.</i>
                    </Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed several external facing website sections using various technologies for flagship transitioning releases of US, CA, AU, NZ, BE, AT, NL, DE, FR, and UK websites.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed Salesforce Commerce Cloud component for internal facing business user CMS to automate work processes using various technologies.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Translated complex, multi-layer Photoshop and inVision creatives into pixel perfect, responsive, ADA compliant external facing web pages, daily, for US and CA websites using various technologies.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed and ensured that code was ADA compliant and translated properly, to match French language laws, from US external facing website to CA external facing website, adjusting designs when necessary to retain design integrity.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Used Photoshop to export optimized web safe images from complex and multi-layered creatives.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Trained team members how to use various systems and how to write accurate and DRY code that upheld ADA compliance.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Code reviewed team members code daily.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Held cross team meetings to demo and present web page projects with product owners and designers, at times Internationally.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Wrote organizational documentation for systems as discovered through development and usage.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Agile experience – bi-weekly sprints, weekly grooming sessions, used Kanban/sprint boards to communicate workflow among primary team and other teams related to projects. Participated in daily standups with stakeholders, product owners, project managers, designers, and other developers, often Internationally to communicate workflows.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Worked with multiple projects and complex daily timelines to produce deliverables on time.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Used version control system to collaborate on projects.</Typography>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "1em" }}>
                        <SubjectIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">March, 2018 - March, 2020</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: ".25em" }}>
                        <img src={syllogisteksLogo} style={{ width: "15px", marginRight: ".5em" }} alt="SyllogisTeks small logo" />
                        <Typography variant="h5" component="h3" style={{ display: "inline" }}>Web Developer</Typography>
                    </div>
                    <Typography variant="body1" style={{ marginTop: ".25em", marginBottom: ".25em" }}><i>Clients include internal and PohlmanUSA.</i></Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Audited and optimized external facing application for ADA AA compliance using HTML, CSS, Bootstrap, JavaScript, and AngularJS.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed external facing website using JavaScript, Angular 8, Bootstrap 4, SASS, CSS3, and HTML5.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed front-end for external facing application using JavaScript, AngularJS, Bootstrap 4, SASS, CSS3, and HTML5.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Built GET REST method API and consumed API using C# and TypeScript.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Designed and developed front-end for internal facing statistical dashboard using JavaScript, Angular 7, Bootstrap 4, SASS, CSS3, and HTML5.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Took mocks from designer and developed JavaScript, AngularJS, Bootstrap 4, HTML5, CSS3, responsive web pages.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed SASS implementation for external facing application to be optimized for multiple brands.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Supported external facing WordPress website utilizing PHP.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Supported projects with Git, SVN, and TortoiseHg.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed optimization tasks using Gulp, Batch files, and Vagrant.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Created a variety of websites using Responsive Design.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Consumed RESTful Web Services / API’s.</Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: "3em" }}>
                    <div style={{ display: "flex", alignItems: "center", borderTop: "1px solid #FFF", paddingTop: "1em" }}>
                        <RadioButtonCheckedIcon style={{ marginRight: ".25em", boxShadow: "0px 13px 27px -5px #000, 0px 8px 16px -8px #222" }} />
                        <Typography variant="body1">2018 - Current</Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={gatewayitconsultingLogo} style={{ width: "30px", marginRight: ".5em" }} alt="Gateway IT Consulting logo" />
                        <Typography variant="h4" component="h3" style={{ display: "inline" }}>Gateway IT Consulting</Typography>
                    </div>
                    <Typography variant="body1" style={{ marginTop: ".25em", marginBottom: ".25em" }}><i>Clients include internal and Our Lady's Inn.</i></Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Project managed from a technical perspective, successful virtual marathon for response to COVID business impact.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Prototyped in inVision and developed TypeScript, Angular 11, Material Design, SASS, HTML5, external facing, data driven dashboard.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Designed and developed JavaScript, Angular 7, Bootstrap 4, SASS, HTML5, JSON-using external facing, responsive application.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Prototyped in Sketch and developed JavaScript, AngularJS, PHP, SASS, CSS3, HTML5 external facing, responsive website using custom wrote SASS library.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed application using WordPress, JavaScript, CSS3, HTML5, PHP, SQL, and Google Analytics.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed information reports of user data from Google Analytics for organizations to optimize social media outreach and used 3rd party form integration tools to increase website traffic and profit generation from virtual events.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Supported several WordPress websites using JavaScript, CSS3, HTML5, PHP, SQL, and Google Analytics.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed custom made CSS3/SASS library to be used as an alternative for clients to Bootstrap.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Supported projects with Git and GitHub.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Developed optimization tasks using Gulp, NPM, and Batch files.</Typography>
                    <Typography variant="body1" style={{ marginLeft: "1em" }}>- Used Photoshop to create and optimize multi-layered graphics for applications and brands.</Typography>
                </Grid>
            </Grid>
        </div>
    );
}