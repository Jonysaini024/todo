import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "../auth/AuthContext";
import { formatDate } from "../helper";

const TaskContext = createContext();


export const TaskProvider=({children})=>{
    const {setMessage, user} = useContext(AuthContext);
    const [allTasks, setAllTasks] = useState(null);
    const [latestTask, setLatestTask] = useState(null);
    const [recentTasks, setRecentTasks] = useState(null);
    const [isCreated, setIsCreated] = useState(false);


    //create task
    const saveTask = async(formData)=>{
        const config = {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(formData)
        }
        const response = await fetch(`http://localhost:5000/tasks`, config);
        if(response.status === 201){
            setMessage("Task created successfully");
            setIsCreated(true);
        }else{
            setMessage("Something went wrong");
        }
    }


    // get all tasks
    const getAllTasks = async()=>{
        const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, {method:"GET"});
        if(response.ok){
            const taskList = await response.json();
            setAllTasks(taskList);
            let latest = taskList[taskList.length - 1]
            setLatestTask(latest);
            let recent = taskList.slice(-3);
            setRecentTasks(recent);
        }else{
            console.log("something went wrong");
        }
    }

    //update Task

    const updateTask=async(formData)=>{
        const config = {
            method: "PATCH",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        }
        const response = await fetch(`http://localhost:5000/tasks/${formData.id}
        `, config);
        if(response.ok){
            setMessage("Task updated Successfully");
        }else{
            setMessage("something went wrong, please try again");
        }
    }

    //delete task
    const deleteTask = async (id) => {
        const response = fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
        if (response.ok){
            setMessage("task delete successfully");
            getAllTasks();
        }
        else {
            setMessage("something went wrong ");
        }
    }


    useEffect(()=>{
        if(user){
            getAllTasks();
        }        
    }, [user]);


    return (
    <TaskContext.Provider value={{
        saveTask,
        allTasks,
        latestTask,
        recentTasks,
        isCreated,
            updateTask,
        deleteTask
    }}>
        {children}
    </TaskContext.Provider>
    )
}

export default TaskContext;









// import { createContext, useContext, useEffect } from "react";
// import AuthContext from "../auth/AuthContext";

// const TaskContext = createContext();


// export const TaskProvider=({children})=>{
//     const { setMessage } = useContext(AuthContext);
//     conts[getALLTask, setAllTasks] = useContext(null);
//     conts [latestTask,setLatestTask]

//     const saveTask = async(formData)=>{
//         const config = {
//             method: "POST",
//             headers: {
//                 "Content-Type":"application/json"
//             },
//             body: JSON.stringify(formData)
//         }
//         const response = await fetch(`http://localhost:5000/tasks`, config);
//         if(response.status === 201){
//             setMessage("Task created successfully");

//         }else{
//             setMessage("Something went wrong");
//         }
//     }
//     // get all task 
//     const getALLTask = async () => {
//         const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, { method: "GET" });
//         if (response.ok) {
//             const TaskList = await response.json();
//             setAllTasks(taskList);
//             let latest = taskList[taskList.length - 1]
//             setLatestTask(latest);
//             let recent = taskList.slice(-3);
//             setRecentTasks(recent);
//         }
//         else {
//             console.log("something went wrong");
//         }
//     }

//     useEffect(() => {
//         if (user) {
//             getALLTask();
//         }
//     }, [user]);

//     return (
//     <TaskContext.Provider value={{
//         saveTask
//     }}>
//         {children}
//     </TaskContext.Provider>
//     )
// }

// export default TaskContext;