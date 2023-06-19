import { useSelector, useDispatch } from "react-redux";
import "../Assets/Styles/displaySection.css"

const DisplaySection = () => {
    const users = useSelector((state) => state.todo.user);
    console.log("hello", users)


    return (
        <div className="displaySection">
            <div className="headerContainer">
                {users.map((user) => (
                    <div>
                        {user.tasks.length != 0 && <div>{user.name}-{user.tasks.length}</div>}
                    </div>
                ))}
            </div>

            <div className="taskContainer">
                <div className="taskItem">

                {users.map((user) => (
                    <div>
                        {user.tasks.length !== 0 && <div>
                            {user.tasks.map((task) => (
                                <div className="task">
                                    <div><img src={task.image}/></div>
                                    
                                    Name : {task.name} <br/>
                                    Task : {task.description} <br/>
                                    Date : {task.deadline}
                                    
                                </div>
                            ))}
                        </div>}
                    </div>
                ))}
                    
           
            


                </div>
            </div>
            
                
            
        </div>
    );
}

export default DisplaySection;