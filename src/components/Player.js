function Player(props) {
  const playerHobbies = props.hobbies.map(hobbie => {
    return <li>{hobbie}</li>
  });
  console.log(props.hobbies)
  return (
    <div>
      <h3>{props.firstName} || {props.jerseyNumber}</h3>
      <ul>{playerHobbies}</ul>
        
    </div>
  )
}

export default Player;