import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./Styling/index.css";
import "./Styling/mediaquery.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
const root = ReactDOM.createRoot(document.getElementById("root"));

function ErrorFallback({ error, resetErrorBoundary }) {
  const navigate = useNavigate();
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
      <button className="btn btn-warning m-2" onClick={()=>{navigate("/")}}>Go to Home</button>

    </div>
  );
}


root.render(
  <ErrorBoundary
  FallbackComponent={ErrorFallback}
  onError={(error, errorInfo) => {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }}
>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
