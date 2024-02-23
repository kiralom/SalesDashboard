import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import CampaignIcon from "@mui/icons-material/Campaign";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GroupsIcon from "@mui/icons-material/Groups";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";

export default function AccordionExpandIcon() {
  return (
    <div id="companyResourceContainer">
      <Box sx={{ minWidth: 500 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<EmojiEventsIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Top Sales Performers</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Congratulations top performers!</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<CampaignIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Marketing Materials</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Advertising and content for clients</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<GroupsIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Industry Groups</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Rub elbows at industry events with your industry peers!
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<LocalAirportIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Travel Policy and Reimbursement</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Save your receipts!</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
