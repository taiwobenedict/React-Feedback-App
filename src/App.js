import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStat from "./components/FeedbackStat";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AboutPageLink from "./components/AboutPageLink";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="container">
              <FeedbackForm />
              <FeedbackStat />
              <FeedbackList />
              <AboutPageLink/>
            </div>
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>


    </>
  );
}

export default App;
