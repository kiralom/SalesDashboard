import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Word of the Day
//       </Typography>
//       <Typography variant="h5" component="div">
//         be{bull}nev{bull}o{bull}lent
//       </Typography>
//       <Typography sx={{ mb: 1.5 }} color="text.secondary">
//         adjective
//       </Typography>
//       <Typography variant="body2">
//         well meaning and kindly.
//         <br />
//         {'"a benevolent smile"'}
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Learn More</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function OutlinedCard() {
//   return (
//     <Box sx={{ minWidth: 275 }}>
//       <Card variant="outlined">{card}</Card>
//     </Box>
//   );
// }

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import SchoolIcon from "@mui/icons-material/School";
import SummarizeIcon from "@mui/icons-material/Summarize";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function AccordionExpandIcon() {
  return (
    <div id="resourceContainer">
      <Box sx={{ minWidth: 500 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<SummarizeIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Sales Basics</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Always be closing...</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<SchoolIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Advanced Sales Training</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>White papers, thought leadership</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<WatchLaterIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Time Management Tools</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Time is your most precious resource!</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<HandshakeIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Contracts and Closing</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Doing business, make it official!</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      <br />

      <Divider orientation="vertical" flexItem />
    </div>
  );
}
