import React, { useState, useEffect } from 'react'

import './index.css'
import SectionTasks from './SectionTasks'

export default function Grid() {
    const a = (cl) => document.querySelector(cl)

    const [saveTasks, setSaveTasks] = useState([])
    const [backupTasks, setBackupTasks] = useState([])

    const addTask = () => {
        let items = []
        setBackupTasks( items )
        saveTasks.push(
            {task: `${a('.add-phrase').value}`,
            id: `numtask${saveTasks.length + 1}`,
            status: 'disabled'
        })
        
        a('.add-phrase').value = ''
        a('.add-phrase').focus()
        
        setSaveTasks( saveTasks )

    }

  return (
    <div className='container'>
        <div className='tasks-title'>
            <h1>Lista de Tarefas</h1>
        </div>
        <div>
            <div className='add-task'>
                <button onClick={addTask}>+</button>
                <input type="text" className='add-phrase' placeholder='Adicione uma tarefa' autoFocus></input>
            </div>
        </div>
        <SectionTasks tasks={saveTasks} />
    </div>
  )
}
