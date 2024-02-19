import Header from "./components/Header/Header";
import Faq from "./components/Faq/Faq";
import questions from './components/Faq/questions'
function App() {
  return (
    <div className="container">
      <Header />
      <Faq questionsObj={questions}/>
    </div>
  );
}

export default App;
