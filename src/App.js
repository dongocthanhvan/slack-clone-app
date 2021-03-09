import React from 'react';
import { SideBar } from "./components/SideBar/SideBar.component";
import Messages from "./components/Messages/Messages.component"
import './App.css';
import { Grid } from 'semantic-ui-react';
console.warn = () => {};
function App() {
  return (
    <Grid columns="equal">
      <SideBar />
      <Grid.Column className="messagepanel">
        <Messages />
      </Grid.Column>
    </Grid>

  );
}
export default App;
