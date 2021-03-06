import Link from "next/link";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

const NavBarDrawer = ({ pages, ...otherProps }) => (
  <Drawer {...otherProps}>
    <List disablePadding>
      <Link href="/" passHref>
        <Box paddingY={2} clone>
          <ListItem
            button
            component="a"
            sx={{
              paddingY: 2,
              "&, &:hover": {
                bgcolor: "primary.main",
                color: "primary.contrastText",
              },
            }}
          >
            {/* eslint-disable-next-line */}
            <img src="/static/logo.svg" alt="Logo" style={{ height: 80 }} />
          </ListItem>
        </Box>
      </Link>
      {pages.map(({ href, label }) => (
        <Link key={href} href={href} passHref>
          <ListItem button component="a" divider>
            <ListItemText primary={label} />
          </ListItem>
        </Link>
      ))}
    </List>
  </Drawer>
);

export default NavBarDrawer;
