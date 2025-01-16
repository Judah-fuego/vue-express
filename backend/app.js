// Import the express module
const express=require('express');
// Create an instance of the express application
const app=express();
// Specify a port number for the server
const PORT = process.env.PORT || 3000;

const players = [{name: 'Judah', age: 18, position: 'Midfield', teamId: 1}];
//Player model
class Player {
  constructor(name, age, position, teamId){
    this.name = name;
    this.age = age;
    this.position = position;
    this.teamId = teamId;  
  }
};

app.post('/players', async (req, res) => {
  try {
    const playerData = req.body;
    
    const newPlayer = new Player(playerData.name, playerData.age, playerData.position, playerData.teamId);

    players.push(newPlayer); 

    console.log('New player created:', newPlayer);    res.status(201).json({ message: 'Player created' });
  } catch (err) {
    console.error('Error creating player:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/players', async (req, res) => {
  try {
    const playersCopy = [...players];
    res.json(playersCopy);
  } catch (err) {
    console.error('Error reading players:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/players/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const index = players.findIndex(player => player.id === id);
    if (index !== -1) {
      players.splice(index, 1);
      res.json({ message: 'Player deleted' });
    } else {
      res.status(404).json({ error: 'Player not found' });
    }
  } catch (err) {
    console.error('Error deleting player:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});