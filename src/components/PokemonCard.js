import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, sprite, hp}) {

  const [isClicked, setIsClicked] = useState(false)

  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">

          {
          isClicked ? (
            <img src={sprite.back} alt="oh no!" />
            ) :
            <img src={sprite.front} alt="oh no!" />
            }
           
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

//hello