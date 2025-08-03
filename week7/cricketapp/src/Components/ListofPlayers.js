export const ListofPlayers = () => {
    const players = [
  { name: 'Jack', score: 50 },
  { name: 'Michael', score: 70 },
  { name: 'John', score: 40 },
  { name: 'Ann', score: 61 },
  { name: 'Elisabeth', score: 61 },
  { name: 'Sachin', score: 95 },
  { name: 'Dhoni', score: 100 },
  { name: 'Virat', score: 84 },
  { name: 'Jadeja', score: 64 },
  { name: 'Raina', score: 75 },
  { name: 'Rohit', score: 80 }
];
  const allPlayersList = players.map((player, index) => (
    <li key={index}>Mr. {player.name} {player.score}</li>
  ));
  const playersBelow70 = players.filter(player => player.score <= 70);
  const playersBelow70List = playersBelow70.map((player, index) => (
    <li key={index}>Mr. {player.name} {player.score}</li>
  ));
  return (
    <div>
      <h1>List of Players</h1>
      <ul>{allPlayersList}</ul>
      <hr />
      <h1>List of Players having Scores Less than 70</h1>
      <ul>{playersBelow70List}</ul>
    </div>
  );
};

export default ListofPlayers;