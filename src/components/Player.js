function Player(props) {
  const playerHobbies = props.hobbies.length 
  ? props.hobbies.map(hobbie => { return <li>{hobbie}</li> })
  : <p>No hobbies</p>

  console.log(props.hobbies)
  return (
    <div>
      <h3>{props.firstName} #{props.jerseyNumber}</h3>
      <ul>{playerHobbies}</ul>
    </div>
  )
}

export default Player;