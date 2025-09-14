// import { useState } from "react";
import { useState } from "react";
import initialArtist from "../data/artist_data";

export default function Counter() {
  const [artists, setArtists] = useState(initialArtist);

  // delet er jonno Function banacci (evabeo funcction banano jay)
  const deleteArtist = (id) => {
    console.log(id);
    //
  };

  // add er jonno Function banacci
  const addSumith = () => {
    const sumith = { id: 4, name: "sumith" };
    const newArrey = [...artists, sumith];
    setArtists(newArrey);
  };
  // const [count, setCount] = useState(0);

  // function incriment() {
  // setCount((prevCoutn) => prevCoutn + 1);
  // setCount((prevCoutn) => prevCoutn + 1);
  // setCount((prevCoutn) => prevCoutn + 1);
  // setCount(count + 1);
  // setCount(count + 1);
  // }

  return (
    <div>
      <div>
        <button onClick={addSumith}>Add Sumith the boss</button>
      </div>
      <ul>
        {artists.map((artists) => (
          <li key={artists.id}>
            {artists.name}{" "}
            <button onClick={() => deleteArtist(artists.id)}>Delete</button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
