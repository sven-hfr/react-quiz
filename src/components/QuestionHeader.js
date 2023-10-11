import "./QuestionHeader.css"

const QuestionHeader = (props) => {
    return (
        <div className="question-header__container">
            <h2 className="question-current__details">
                Frage #{ props.currentQuestion }
            </h2>
            <h1 className="question-question__details">
                {props.question}
            </h1>
        </div>
    );
};

export default QuestionHeader;