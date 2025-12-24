import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { Typography, Paper } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

const Education = () => {
  return (
    <div id="Eduction" className="ml-70 mt-20 px-6 md:px-20  text-blue-700">
      <h1 className="text-center text-5xl font-serif ">Education</h1>
      <hr className="my-8 w-40 mx-auto border-blue-500" />
      <div className="flex justify-center items-center">
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent
              sx={{ display: "flex", justifyContent: "flex-start" }}>
              <Paper elevation={3} className="p-6 " sx={{ maxWidth: 420 }}>
                <Typography variant="h6">
                  Bachelor of Computer Science
                </Typography>
                <Typography color="text.secondary">2021 – 2024</Typography>
                <Typography className="mt-2 text-sm">
                  MERN Stack, Web Development, real-world projects.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <SchoolIcon />
              </TimelineDot>
            </TimelineSeparator>

            <TimelineContent
              sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Paper elevation={3} className="p-6 " sx={{ maxWidth: 420 }}>
                <Typography variant="h6">Higher Secondary Education</Typography>
                <Typography color="text.secondary">2019 – 2021</Typography>
                <Typography className="mt-2 text-sm">
                  Science background with strong fundamentals.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Education;
