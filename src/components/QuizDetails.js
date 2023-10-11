import "./QuizDetails.css"

const QuizDetails = (props) => {
    return (
        <p className="quiz-details__container">
            Du hast {props.currentQuestion} von {props.maxQuestions} Frage(n) beantwortet.
        </p>
    );
};

export default QuizDetails;