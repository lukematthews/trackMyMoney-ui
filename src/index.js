import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import App from "./App";
import Home from "./routes/Home";
import Navbar from "./Navbar";
import { ComingUp } from "./routes/ComingUp";
import { LabelListRoute } from "./routes/LabelListRoute";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import store from "./redux/store";
import { Provider } from "react-redux";
import { UploadPage } from "./upload/UploadPage";
import LabelAnalysisPage from "./labelAnalysis/components/LabelAnalysisPage";
import ReduxInitialState from "./redux/ReduxInitialState";
import { LabelDialog } from "./labels/components/LabelDialog";
import { HelloKaren } from "./routes/HelloKaren";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReduxInitialState></ReduxInitialState>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar></Navbar>
          <MDBContainer fluid style={{ paddingTop: "100px" }}>
            <MDBRow>
              <Routes>
                <Route path="/*" element={<Home />} key="home"></Route>
                <Route
                  path="/coming-up"
                  element={<ComingUp />}
                  key="labelConfig"
                ></Route>
                <Route
                  path="/label-list"
                  element={<LabelListRoute />}
                  key="labelList"
                ></Route>
                <Route
                  path="/labels/create"
                  element={<LabelDialog />}
                  key="labelAdd"
                ></Route>
                <Route
                  path="/labels/*"
                  element={<LabelDialog />}
                  key="labelEdit"
                ></Route>
                <Route
                  path="/analysis/*"
                  element={<LabelAnalysisPage />}
                  key="labelEdit"
                ></Route>
                <Route
                  path="/upload"
                  element={<UploadPage></UploadPage>}
                  key="upload"
                ></Route>
                <Route
                  path="/isaf-flags"
                  element={
                    <HelloKaren
                      ref={document.querySelector("canvas")}
                    ></HelloKaren>
                  }
                  key="hello"
                ></Route>
              </Routes>
              <App />
            </MDBRow>
          </MDBContainer>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);
