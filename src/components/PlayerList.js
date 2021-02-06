import Player from './Player';

function PlayerList(props) {
  console.log("props", props)
  console.log("props.players", props.players)
  const allPlayers = props.players.map((player) => {
  return (
    <Player firstName={player.firstName} jerseyNumber={player.jerseyNumber} hobbies={player.hobbies}/>
  );
})

return (<div>{allPlayers}</div>)
};

export default PlayerList;