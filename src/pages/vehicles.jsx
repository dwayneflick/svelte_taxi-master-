import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container, Paper, TableRow, TableCell } from "@material-ui/core";
import DropDownButton from "../components/DropDownButton";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import DataTable from "../components/Tables";
import { vehicleData } from "../data/vehicledata";
import SectionHeader from "../components/SectionHeader";
import ControlledOpenSelect from "../components/Select";
import Pagination from "../components/Pagination";

const headingItems = [
  "Vehicle ID",
  "Plate Number",
  "Numbers Of Trip",
  "Drivers",
  "City",
  "Status",
  "Action"
];

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    background: "#f7f9fc"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(3)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "50%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

export default function Vehicles() {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={5}>
          <Grid item md={4}>
            <SectionHeader
              title="Vehicle Management"
              content="Manage All Registered Vehicle on the platform here"
            />
          </Grid>
          <Grid item md={8}>
            <Grid container>
              <Grid item md={3}>
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search???"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
              </Grid>
              <Grid item md={5}>
                <ControlledOpenSelect label={<span>Sorting: </span>} />
              </Grid>
              <Grid item md={4}>
                <Pagination />{" "}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Paper elevation={3}>
            <DataTable header={headingItems}>
              {vehicleData.map((row, key) => (
                <TableRow key={key}>
                  <TableCell component="th" scope="row">
                    {row.Plate}
                  </TableCell>
                  <TableCell align="right">{row.vehID}</TableCell>
                  <TableCell align="center">{row.trip}</TableCell>
                  <TableCell align="right">{row.driver}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                  <TableCell align="left">
                    <DropDownButton />
                  </TableCell>
                </TableRow>
              ))}
            </DataTable>
          </Paper>
        </Grid>
      </Container>
    </main>
  );
}
