import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import List from "./components/listAndKey";
import ThemeToggle from "./components/Toggle";
import UseEffect from "./components/UseEffect";
import UseReff from "./components/UseRef";
import Usememo from "./components/Usememo";
import Reactmemo from "./components/Reactmemo";


const App = () => {
  return(
    <div>
    <BrowserRouter>
    {/* navigation */}
    <nav style={{marginBottom:"20px"}}>
        <Link to="/">List</Link> | {" "}
        <Link to="/form">Feedback Form</Link> | {" "}
        <Link to="/effect">UseEffect</Link> | {" "}
        <Link to="/toggle">Theme Toggle</Link>
    </nav>
    <Routes>
       <Route path="/" element={<List />} />
       <Route path="/form" element={<FeedbackForm />} />
       <Route path="/effect" element={<UseEffect />} />
       <Route path="/toggle" element={<ThemeToggle />} />
    </Routes>
    </BrowserRouter>

    {/* <UseReff/>
    <Usememo /> */}
    <Reactmemo />

     </div>
  )
}
export default App;