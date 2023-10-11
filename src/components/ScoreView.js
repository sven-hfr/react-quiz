import "./ScoreView.css"
import AnswerItem from "./AnswerItem";

const ScoreView = (props) => {
    return (
        <div>
            <p
                className="score-view__container"
            >
                Du hast {props.userScore} von {props.maxScore} möglichen Punkten erreicht.
            </p>
            <AnswerItem answer="Quiz neustarten" onClick={() => props.onRestart()} />
        </div>
    );
};

export default ScoreView;