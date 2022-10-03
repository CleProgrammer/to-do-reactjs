import './SectionTasks.css'

export default function SectionTasks({tasks}) {
    const a = (cl) => document.querySelector(cl)

    const taskCheck = (e) => {
        if(e.target.className === 'disabled') {
            a(`#${e.target.id}`).style.background = 'blue'
            a(`.task-name.${e.target.id}`).style.textDecoration = 'line-through'
            e.target.className = 'able'
        } else if(e.target.className === 'able') {
            a(`#${e.target.id}`).style.background = 'white'
            a(`.task-name.${e.target.id}`).style.textDecoration = 'none'
            e.target.className = 'disabled'
        }
    }

  return (
    <div className='section-tasks'>
        {tasks.map((item) =>
            <div key={item.id} className='task-to-do' style={{marginBottom: '15px'}}>
                <div className='check-task' onClick={taskCheck} style={{cursor: 'pointer'}}>
                    <div key={item.id} className={`${item.status}`} id={`${item.id}`}>☺</div>
                </div>
                <div key={item.id} className={`task-name ${item.id}`}>{item.task}</div>
            </div>
        )}
    </div>
  )
}

