import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { ExpandMore } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import SettingIcon from "./SettingsIcon";
import BellNotificationIcon from "./BellNotificationIcon";

const useStyles = makeStyles(theme => ({
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    backgroundColor: theme.palette.background.default,
    zIndex: theme.zIndex.drawer + 1,
    [theme.breakpoints.up("sm")]: {
      // width: `calc(100% - ${drawerWidth}px)`
      // marginLeft: drawerWidth
    }
    // grow: {
    //   flexGrow: 1
    // }
  },
  appBarShift: {
    //marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  userDetail: {
    display: "flex",
    alignItems: "center"
  },
  userPanel: {
    marginLeft: "3rem",
    padding: ".5rem 0",
    justifyContent: "center"
  }
}));

export default function Header({ handleDrawerToggle }) {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar
        className={clsx(classes.appBar, {
          [classes.appBarShift]: true
        })}
        color="primary"
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            className={classes.title}
            color="primary"
            variant="h6"
            noWrap
          >
            Svelte Taxi
          </Typography>

          <Box style={{ marginLeft: "auto" }}>
            <IconButton>
              <BellNotificationIcon isSignedIn={true} notificationCount="8" />
            </IconButton>
          </Box>
          <Box style={{ marginLeft: "2rem" }}>
            <IconButton>
              <SettingIcon isSignedIn={true} />
            </IconButton>
          </Box>
          <Box
            display={{ xs: "none", sm: "block" }}
            className={classes.userPanel}
          >
            <Box className={classes.userDetail}>
              <Typography component="p" color="primary">
                John Smith
              </Typography>
              <IconButton style={{ alignSelf: "flex-end" }} color="primary">
                <ExpandMore />
              </IconButton>
            </Box>
            <Typography component="p" color="primary">
              johnsmith@yahoo.com
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
