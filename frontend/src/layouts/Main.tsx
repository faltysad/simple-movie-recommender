import { Box, Grommet, Heading } from "grommet";
import React from "react";
import { APP_TITLE } from "../constants";
import Navigation from "./../components/Navigation";
import { theme } from "./../theme";
import { useHistory } from "react-router-dom";

const MainLayout: React.SFC = (props: any) => {
  const { children } = props;
  const history = useHistory();

  return (
    <Grommet theme={theme} full={true} themeMode="dark">
      <Box fill>
        <Navigation>
          <Heading level="3" margin="none" onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
            {APP_TITLE}
          </Heading>
        </Navigation>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box flex>
            {children}
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default MainLayout;
