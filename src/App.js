import "./index.css"

import QuestionHeader from "./components/QuestionHeader";
import AnswerItem from "./components/AnswerItem";
import QuizDetails from "./components/QuizDetails";
import ScoreView from "./components/ScoreView";
import { useState } from "react";

const questions = [
    {
        question: "Wie viele Beine hat ein Löwe?",
        answers: [
            "Ein Löwe hat 3 Beine.",
            "Ein Löwe hat 5 Beine.",
            "Ein Löwe hat 4 Beine.",
        ],
        correctAnswer: "Ein Löwe hat 4 Beine.",
        points: 2,
    },
    {
        question: "Was ist JavaScript?",
        answers: [
            "Ein Computerspiel.",
            "Ein Land.",
            "Ein Gebirge.",
            "Eine Programmiersprache.",
        ],
        correctAnswer: "Eine Programmiersprache.",
        points: 3,
    },
    {
        question: "Was ist Python?",
        answers: ["Ein Computerspiel.", "Eine Programmiersprache.", "Ein Gebirge."],
        correctAnswer: "Eine Programmiersprache.",
        points: 2,
    },
    {
        question: "Wann fiel die Berliner Mauer?",
        answers: ["1991", "1988", "1989", "2001", "1990"],
        correctAnswer: "1989",
        points: 5,
    },
    {
        question: "Wann wurde die BRD gegründet?",
        answers: ["1949", "1804", "1905", "1922", "1990"],
        correctAnswer: "1949",
        points: 7,
    }
];

let score = 0;
const maxScore = questions.reduce((acc, current) => acc + current.points, 0);

const App = () => {
    let [currentQuestion, setCurrentQuestion] = useState(0);

    const answerSubmitHandler = (userAnswer) => {
        if(userAnswer === questions[currentQuestion].correctAnswer) {
            score += questions[currentQuestion].points;
        }

        currentQuestion++; // +1
        setCurrentQuestion(currentQuestion);
    };

    const restartQuizHandler = () => {
        score = 0;
        setCurrentQuestion(0);
    };

    return (
        <div>
            {currentQuestion !== questions.length ? (<div>
                <QuestionHeader
                    currentQuestion={currentQuestion + 1}
                    question={questions[currentQuestion].question}
                />
                {questions[currentQuestion].answers.map((answer) => (
                    <AnswerItem
                        onClick={() => answerSubmitHandler(answer)}
                        answer={answer}
                    />
                ))}
                <QuizDetails
                    currentQuestion={currentQuestion}
                    maxQuestions={questions.length}
                />
            </div>) : (
                <ScoreView
                    onRestart={() => restartQuizHandler()}
                    userScore={score}
                    maxScore={maxScore}
                />
            )}
        </div>
    );
};

export default App;
