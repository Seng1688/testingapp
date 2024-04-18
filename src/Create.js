import React, { useState } from "react";
import Mousetrap from "mousetrap"; // Importing mousetrap library
import { useEffect } from "react"; // Importing useEffect hook from React
import { TextField } from "@material-ui/core"; // Importing TextField component from Material-UI
import { Card, CardContent, Typography, CardHeader } from "@material-ui/core";
import "./styles.css"; // Import your CSS file for styling
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Button from '@mui/material/Button';

const Create = () => {
  const [textFieldValue, setTextFieldValue] = useState(""); // State to manage the value of the text field
  const [isTrigger, setIsTrigger] = useState(false); // State to manage the value of the text field

  useEffect(() => {
    const mousetrap = new Mousetrap(); // Creating a new Mousetrap instance
    const textAreaElem = document.querySelector("#standard-basic");
    const save = async e => {
      e.preventDefault(); // Preventing the default behavior of the event
      setTextFieldValue("aaa"); // Update the state with the new value
    };

    Mousetrap(textAreaElem).bind("a b", save); // Binding the Mousetrap instance to 'ctrl+s' key and the save function

    // Returning a cleanup function to unbind the Mousetrap when the component unmounts
    return () => {
      mousetrap.unbind("ctrl+b"); // Unbinding the Mousetrap instance
    };
  }, []); // Include textFieldValue in the dependency array to ensure that save function always has the latest value

  // Function to handle changes in the text field value
  const handleChange = event => {
    //check if mousetrap event is trigger

    setTextFieldValue(event.target.value); // Update the state with the new value
  };
  return (
    // Render a div containing a Material-UI TextField component
    <div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        value={textFieldValue} // Set the value of the text field to the state value
        onChange={handleChange} // Handle changes in the text field value
      />
      <div >
        <Card className="card"  >
          <CardHeader className="cards-header" title="Card-Header" />

          <div className="cards-container">
          <CardContent className="card1" >
            <Typography variant="h5" component="h2">
              Card 1
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              v
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            </Typography>
          </CardContent>
          <CardContent className="card2">
            <Typography variant="h5" component="h2">
              Card 2
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
          </div>
          <div className="cards-container">
          <CardContent className="card1" >
            <Typography variant="h5" component="h2">
              Card 1
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              v
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.

            </Typography>
          </CardContent>
          <CardContent className="card2">
            <Typography variant="h5" component="h2">
              Card 2
            </Typography>
            <Typography color="textSecondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </CardContent>
          </div>

        </Card>
      </div>

      <Accordion>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Accordion Actions
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>

      </Accordion>

    </div>
    
  );
};
export default Create;
