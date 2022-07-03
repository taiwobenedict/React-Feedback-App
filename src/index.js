import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import { FeedbackProvider } from "./context/FeedbackContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <StrictMode>
      <BrowserRouter>
        <FeedbackProvider>
          <App />
        </FeedbackProvider>
      </BrowserRouter>
    </StrictMode>
  </>
);
