import "./AnswerItem.css"

const AnswerItem = (props) => {
    return (
        <div className="answer-item__container">
            <button
                onClick={props.onClick}
                className="answer-button__details"
            >
                {props.answer}
            </button>
        </div>
    );
};

export default AnswerItem;