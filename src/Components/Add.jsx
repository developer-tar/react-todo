import React, { useState,useEffect } from "react";
function Add({data,setData,updateData}) {
    const [name,setName] = useState('')
    const[id,setId] = useState(null);
    const handleSubmitButton =() =>{
        if(id){
            const updatedData = data.map((item)=>   item.id === id ? { ...item, task: name } : item)    
            setData(updatedData)

        } //update case
        else{
            const newItem ={
                "id": data.length+1,
                "task": name,
                "complete": true
              }
            
                setData([newItem,...data])
        }
        setName(''); // Clear input
    }
    useEffect(() =>{
        const {id,task} = updateData;
        setId(id)
        setName(task)
        
    },[updateData])

    return (
        <>
            <div className="flex items-center space-x-2 mb-4">
                <input

                    type="text"
                    className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Add a new task..."
                    id="new-task"
                    value={name}
                    onChange={(e) =>setName(e.target.value)}

                />
                <button
                    
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    id="add-task" onClick={handleSubmitButton}>
                    
                    Add
                </button>
            </div>
        </>)
}
export default Add;