import { Box, Button, Grommet, Heading } from "grommet";
import { Menu } from "grommet-icons";
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navigation from "./../components/Navigation";
import { theme } from "./../theme";
import { APP_TITLE } from "../constants";

const MainLayout: React.SFC = (props: any) => {
  const [ showSidebar, setShowSidebar ] = useState(false);
  const { children } = props;

  return (
    <Grommet theme={theme} full={true} themeMode="dark">
      <Box fill>
        <Navigation>
          <Heading level="3" margin="none">
            {APP_TITLE}
          </Heading>
          <Button icon={<Menu />} onClick={() => setShowSidebar(!showSidebar)} />
        </Navigation>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
          <Box flex>
            {children}
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default MainLayout;
