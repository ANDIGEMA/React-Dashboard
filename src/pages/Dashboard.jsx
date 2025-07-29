import React, { useState } from 'react';

// Components
import Read from '../Component/Read';
import EditCars from "../Component/EditCars";
import CreateCars from "../Component/CreateCars";
import DeleteCars from "../Component/DeleteCars";

const Dashboard = () => {
  // const mockData = [
  //   { id: 1, name: "Player 1", position: "Forward" },
  //   { id: 2, name: "Player 2", position: "Midfielder" },
  // ];

  // const [players, setPlayers] = useState(mockData);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [showEditPlayer, setShowEditPlayer] = useState(false);
  const [showAddPlayer, setShowAddPlayer] = useState(false);
  const [showDeletePlayer, setShowDeletePlayer] = useState(false);
  const [playerToDelete, setPlayerToDelete] = useState(null);

  const handleDelete = (id) => {
    setPlayerToDelete(id);
    setShowDeletePlayer(true);
  };

  const deletePlayer = (id) => {
    const updatedPlayers = players.filter((player) => player.id !== id);
    setPlayers(updatedPlayers);
    setShowDeletePlayer(false);
  };

  const handleCancelDelete = () => {
    setShowDeletePlayer(false);
  };

  const handleEdit = (id) => {
    const player = players.find((player) => player.id === id);
    setCurrentPlayer(player);
    setShowEditPlayer(true);
  };

  const editPlayer = (updatedPlayer) => {
    const updatedPlayers = players.map((player) =>
      player.id === updatedPlayer.id ? updatedPlayer : player
    );
    setPlayers(updatedPlayers);
    setCurrentPlayer(null);
    setShowEditPlayer(false);
  };

  const handleCancelEdit = () => {
    setCurrentPlayer(null);
    setShowEditPlayer(false);
  };

  const handleAddPlayer = () => {
    setShowAddPlayer(true);
  };

  const addPlayer = (player) => {
    const newPlayer = {
      id: Math.floor(Math.random() * 1000),
      ...player,
    };
    const updatedPlayers = [...players, newPlayer];
    setPlayers(updatedPlayers);
    setShowAddPlayer(false);
  };

  const handleCancelAdd = () => {
    setShowAddPlayer(false);
  };

//  🧠  Logical Flow:
// If showDeletePlayer === true, show the <DeletePlayer /> component.

// Else if showEditPlayer === true, show the <EditPlayer /> component.

// Else if showAddPlayer === true, show the <AddPlayer /> component.

// Else (if none of the above are true), show the <PlayerList /> component.


// 📦 Each Component’s Role:
// <DeletePlayer />
// Used to confirm and handle deletion of a player.

// <EditPlayer />
// Opens a form to edit an existing player’s details.

// <AddPlayer />
// Opens a form to add a new player to the team.

// <PlayerList />
// Displays all players with buttons for edit/delete actions.
  return (
    <div className="App">
      <h1>Football Team</h1>
      {showDeletePlayer ? (
        <DeleteCars
          player={players.find((player) => player.id === playerToDelete)}
          deletePlayer={deletePlayer}
          onCancel={handleCancelDelete}
        />
      ) : showEditPlayer ? (
        <EditCars
          player={currentPlayer}
          editPlayer={editPlayer}
          onCancel={handleCancelEdit}
        />
      ) : showAddPlayer ? (
        <CreateCars addPlayer={addPlayer} onCancel={handleCancelAdd} />
      ) : (
        <Read
          players={players}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onAdd={handleAddPlayer}
        />
      )}
    </div>
  );
};

export default Dashboard;
