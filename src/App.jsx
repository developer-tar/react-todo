import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './Components/List'
import Add from './Components/Add'
function App() {
  const initialData =[{
    "id": 1,
    "task": "Give dog a bath",
    "complete": true
  }, {
    "id": 2,
    "task": "Do laundry",
    "complete": true
  }, {
    "id": 3,
    "task": "Vacuum floor",
    "complete": false
  }, {
    "id": 4,
    "task": "Feed cat",
    "complete": true
  }, {
    "id": 5,
    "task": "Change light bulbs",
    "complete": false
  }, {
    "id": 6,
    "task": "Go to Store",
    "complete": true
  }, {
    "id": 7,
    "task": "Fill gas tank",
    "complete": true
  }, {
    "id": 8,
    "task": "Change linens",
    "complete": false
  }, {
    "id": 9,
    "task": "Rake leaves",
    "complete": true
  }, {
    "id": 10,
    "task": "Bake Cookies",
    "complete": false
  }, {
    "id": 11,
    "task": "Take nap",
    "complete": true
  }, {
    "id": 12,
    "task": "Read book",
    "complete": true
  }, {
    "id": 13,
    "task": "Exercise",
    "complete": false
  }, {
    "id": 14,
    "task": "Give dog a bath",
    "complete": false
  }, {
    "id": 15,
    "task": "Do laundry",
    "complete": false
  }, {
    "id": 16,
    "task": "Vacuum floor",
    "complete": false
  }, {
    "id": 17,
    "task": "Feed cat",
    "complete": true
  }, {
    "id": 18,
    "task": "Change light bulbs",
    "complete": false
  }, {
    "id": 19,
    "task": "Go to Store",
    "complete": false
  }, {
    "id": 20,
    "task": "Fill gas tank",
    "complete": false
  }];

  const[data,setData] =useState(() =>{
    const savedData = localStorage.getItem('data');
    return savedData ?JSON.parse(savedData) : initialData;
  });
  const [updateData,setUpdateData] = useState('');

  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">To-Do List</h1>
        <Add data={data} setData={setData} updateData={updateData}/>
        <List data={data}  setData={setData} setUpdateData={setUpdateData}/>
      </div>

    </>
  )
}

export default App
