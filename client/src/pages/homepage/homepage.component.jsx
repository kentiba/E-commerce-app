import React, { Profiler } from "react";
import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Profiler
        id="directory"
        onRender={(
          id, // the "id" prop of the Profiler tree that has just committed
          phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
          actualDuration // time spent rendering the committed update
        ) => {
          console.log(id, phase, actualDuration);
        }}
      >
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default Homepage;
