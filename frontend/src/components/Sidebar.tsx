import { Box, Button, Collapsible, Layer, ResponsiveContext } from "grommet";
import { FormClose } from "grommet-icons";
import React from "react";
import { ISidebarProps } from "../types/SidebarTypes";

const Sidebar: React.SFC<ISidebarProps> = props => {
  const { showSidebar, setShowSidebar } = props;
  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          {!showSidebar || size !== "small" ? (
            <Collapsible direction="horizontal" open={showSidebar}>
              <Box
                flex
                width="medium"
                background="light-2"
                elevation="small"
                align="center"
                justify="center"
              >
                sidebar
              </Box>
            </Collapsible>
          ) : (
            <Layer>
              <Box background="light-2" tag="header" justify="end" align="center" direction="row">
                <Button icon={<FormClose />} onClick={() => setShowSidebar(false)} />
              </Box>
              <Box fill background="light-2" align="center" justify="center">
                sidebar
              </Box>
            </Layer>
          )}
        </>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default Sidebar;
