import Card from "../card/Card";
import "./card-list.styles.css";

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map(monster => {
            // destructuring
            return <Card monster={monster} />
        })}
    </div>
);

export default CardList;