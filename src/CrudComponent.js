import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const CrudComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
        title: newItem,
        completed: false,
      });
      setData([...data, response.data]);
      setNewItem('');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.patch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        completed: true,
      });
      setData(data.map(item => (item.id === id ? response.data : item)));
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className='App'>
      <h1 className='App-header'>CRUD Operations</h1>
      <ul style={{textAlign:"justify"}}>
        {data.map(item => (
          <li key={item.id}>
            {item.title} - Completed: {item.completed ? 'Yes' : 'No'}
            <button onClick={() => handleUpdate(item.id)} style={{backgroundColor:"green"}}>Completed</button>
            <button onClick={() => handleDelete(item.id)} style={{backgroundColor:"red"}}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleCreate}>Add Item</button>
      </div>
    </div>
  );
};

export default CrudComponent;
