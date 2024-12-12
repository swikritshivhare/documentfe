import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { CardActions, Typography } from "@mui/material";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./CreateDoc.css";

function CreateDocument() {
  const [documentDetails, setDocumentDetails] = useState({
    title: "",
    content: "",
    status: "pending",
  });
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleInput = (inputValue) => {
    setDocumentDetails({
      ...documentDetails,
      title: inputValue.target.value,
    });
  };
  const handleContent = (inputValue) => {
    setDocumentDetails({
      ...documentDetails,
      content: inputValue.target.value,
    });
  };
  const onSubmit = () => {
    if(!(documentDetails.title && documentDetails.content)){
        return
    }
    let payload = {
      ...documentDetails,
    };
    axios
      .post("http://localhost:4000/api/documents", payload)
      .then(function (response) {
        console.log(response);
        if (response && response.status == 201) {
          setOpen(true);
          setDocumentDetails({title:'',content:''})
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
  return (
    <div className="container"> 
      <Typography>Create Document</Typography>
      <Card className="card">
        <CardContent>
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            onChange={handleInput}
            required="true"
            value={documentDetails.title}
          />
          <TextField
            id="content"
            label="Content"
            style={{ width: "1000px" }}
            multiline
            maxRows={10}
            variant="standard"
            value={documentDetails.content}
            onChange={handleContent}
            required="true"
          />
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            disabled={!(documentDetails.title && documentDetails.content)}
            onClick={() => {
              onSubmit();
            }}
          >
            Submit
          </Button>
          <Button
            variant="contained"
            onClick={() => {
                setDocumentDetails({title:'',content:''})
            }}
          >
            Cancel
          </Button>
        </CardActions>
      </Card>
      {open ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Document Create Sucessfully"
          action={action}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CreateDocument;
