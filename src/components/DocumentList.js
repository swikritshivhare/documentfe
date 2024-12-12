import { Card, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

import "./CreateDoc.css";

function DocumentList() {
  const [docList, setDocList] = useState([]);
  useEffect(() => {
    getAllDocList();
  }, []);
  const getAllDocList = () => {
    axios.get("http://localhost:4000/api/documents").then((response) => {
      console.log(response);
      if (response && response.status === 200) {
        setDocList(response.data);
      }
    });
  };
  const approve = () => {
    axios.post("http://localhost:4000/api/documents",{}).then((response) => {
        console.log(response);
        if (response && response.status === 200) {
          setDocList(response.data);
        }
      });
  }
  return (
    <>
      <Typography>Document Lists</Typography>
      <Card className="container">
        <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Document Title</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {docList.map((list) => (
                  <TableRow
                    // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      {list.title}
                    </TableCell>
                    <TableCell>{list.status}</TableCell>
                    <TableCell>
                        <Button>Approve</Button>
                        <Button>Reject</Button>

                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </CardContent>
      </Card>
    </>
  );
}

export default DocumentList;
