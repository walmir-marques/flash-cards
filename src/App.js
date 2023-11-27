import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "Qual é o nome da Raposa de Nove Caudas selada dentro de Naruto?",
    answer: "Kurama",
  },
  {
    id: 2,
    question: "Qual é o nome da espada de caça-demônios de Tanjiro Kamado?",
    answer: "Lâmina Nichirin",
  },
  {
    id: 3,
    question:
      "Qual é o nome da irmã mais nova de Tanjiro, que se transforma em demônio?",
    answer: "Nezuko Kamado",
  },
  {
    id: 4,
    question:
      "Quem é o mentor e professor na Tokyo Metropolitan Jujutsu Technical High School?? (Jujutsu Kaisen)",
    answer: "Satoru Gojo",
  },
  {
    id: 5,
    question:
      "Qual é o pseudônimo usado por Light Yagami quando ele adquire o Death Note??",
    answer: "Kira",
  },
  {
    id: 6,
    question:
      "Qual é o nome dos dois irmãos no centro do anime Fullmetal Alchemist?",
    answer: "Edward e Alphonse Elric",
  },
  {
    id: 7,
    question:
      "Quem é o Alquimista de Fogo com a capacidade de controlar o fogo??",
    answer: "Roy Mustang",
  },
  {
    id: 8,
    question: "Nome dos três amigos que acompanham Gon em sua jornada? ",
    answer: "Killua Zoldyck, Leorio Paradinight e Kurapika",
  },
  {
    id: 9,
    question: "Qual é o poder misterioso que Gon descobre durante a série?",
    answer: "Nen",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <>
      <h1 className="title">Anime Quiz</h1>
      <div className="flashcards">
        {questions.map((question) => (
          <div
            key={question.id}
            className={question.id === selectedId ? "selected" : ""}
            onClick={() => handleClick(question.id)}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
