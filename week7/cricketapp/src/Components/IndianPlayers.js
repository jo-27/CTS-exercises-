export const IndianPlayers = () => {
const IndianTeam = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];
const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const OddPlayers = () => {
  const [first, , third, , fifth] = IndianTeam;
  return (
    <div>
      <h1>Odd Team Players</h1>
      <ul>
        <li>First : {first}</li>
        <li>Third : {third}</li>
        <li>Fifth : {fifth}</li>
      </ul>
    </div>
  );
};

const EvenPlayers = () => {
  const [, second, , fourth, , sixth] = IndianTeam;
  return (
    <div>
      <h1>Even Team Players</h1>
      <ul>
        <li>Second : {second}</li>
        <li>Fourth : {fourth}</li>
        <li>Sixth : {sixth}</li>
      </ul>
    </div>
  );
};
  const MergedIndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  const mergedList = MergedIndianPlayers.map((player, index) => (
    <li key={index}>Mr. {player}</li>
  ));

  return (
    <div>
        <h1>List of odd players:</h1>
      <OddPlayers />
      <hr />
      <h1>List of even players:</h1>
      <EvenPlayers />
      <hr />
      <h1>List of Indian Players Merged:</h1>
      <ul>{mergedList}</ul>
    </div>
  );
};

export default IndianPlayers;