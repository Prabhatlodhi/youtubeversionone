import { OFFSET_LIVE_CHAT } from "../Utils/Constant";
import { createSlice } from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages : []
    },
    reducers : {
        addMessage : (state, action)=>{ 
            state.messages.splice(OFFSET_LIVE_CHAT,1)
            state.messages.unshift(action.payload)
        },
    },
});

export const { addMessage } = chatSlice.actions
export default chatSlice.reducer;
