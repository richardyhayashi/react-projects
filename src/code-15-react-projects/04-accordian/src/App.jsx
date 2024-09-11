//import { useState } from "react";
import data from "./js/data";
import Question from "./components/Question";

function App() {
  //const [questions, setQuestions] = useState(data);
  const questions = data;

  return (
    <main>
      <div className="container">
        <h3>Question and anwers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
