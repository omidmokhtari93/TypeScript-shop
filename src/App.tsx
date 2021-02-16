import React, { ReactElement } from "react";
import { ConnectedRouter } from "connected-react-router";
import "./App.css";
import AppContainer from "./screens/AppContainer";
import browserHistory from "./services/browserHistory";

function App(): ReactElement {
    return (
        <ConnectedRouter history={browserHistory}>
            <AppContainer />
        </ConnectedRouter>
    );
}

export default App;
