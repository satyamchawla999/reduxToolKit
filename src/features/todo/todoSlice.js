import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user: [
        {
            userId:"1",
            name : "Satyam",
            img : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png",
            tasks: []
        },{
            userId:"2",
            name : "Vinod",
            img : "https://i0.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1",
            tasks: []
        },{
            userId:"3",
            name : "Deepak",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFlyQit9lFadv2SATpdZHchZGghM8P5myTnBizww&s",
            tasks: []
        },{
            userId:"4",
            name : "Chetan",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-lix6faKOqLCPjJpa4HRGBXLT4VZPLQ7hEKdSKfFTP0MbM48lhuV0edy23zP0ArtOIiZpBUgJrU&usqp=CAU&ec=48600112",
            tasks: []
        },{
            userId:"5",
            name : "Bhavdeep",
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBMGTYUUqpfp8wa5NYqsOaHpJPF5vd-6xa8N6DDD9kkBYmJ-HonMrjaKxuwVoDYjWQ06MAqqSUIE&usqp=CAU&ec=48600112",
            tasks: []
        }
    ]
};

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
            state.tasks.push({id: Date.now(), text: action.payload});
        },

        addTask: (state,action) => {
            console.log("action",action.payload);
            for(let u of state.user) {
                if(u.name === action.payload.name){

                    if(u.tasks.length !== 0) {
                        const foundItem = u.tasks.find(
                            (task) => task.description === action.payload.description && task.deadline === action.payload.deadline
                        );

                        if(foundItem === true) {
                            console.log("task not assigned");
                            return;
                        }
                    }
                    
                    action.payload["image"] = u.img
                    u.tasks.push(action.payload);
                }
            }
        },

        deleteTodo: (state,action)=> {
            state.tasks = state.tasks.filter((task)=> task.id !== action.payload)
        },
        addData: (state,action) => {
            state.data.push({id: Date.now(), info: action.payload})
        }
    },
});

console.log(todoSlice.caseReducers)

export const {addTodo,deleteTodo,addData,addTask} =todoSlice.actions;

export default todoSlice.reducer;