import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState={
    value:0,
    loading:false,
    recipes:[],
    recipeLoader:false
}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state) =>{
            state.value +=1;
        },
        decrement:(state) =>{
            state.value -=1;
        },
        incrementByAmount:(state,action) =>{
            state.value +=action.payload;
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,(state)=>{
            //console.log("async operation pending");
            state.loading=true
        }).addCase(incrementAsync.fulfilled,(state,action)=>{
               state.loading=false;
            state.value+=action.payload;
         
        }).addCase(fetchRecipes.pending,(state,action)=>{
           state.recipeLoader=true;
        }).addCase(fetchRecipes.fulfilled,(state,action)=>{
            state.recipeLoader=false;
            state.recipes=action.payload;
        })
    }

});


export const incrementAsync=createAsyncThunk(
    'counter/incrementAsync', 
    async(amount)=>{
        await new Promise((resolve)=> setTimeout(resolve,1000))
        return amount; //return amount after 1 sec
    })
export const fetchRecipes=createAsyncThunk(
    'counter/fetchRecipes',async()=>{
        const recipes=await fetch('https://dummyjson.com/recipes');
        const recipesJSON=await recipes.json();
        return recipesJSON.recipes;
    }
)

export const {increment,decrement,incrementByAmount} =counterSlice.actions;
export default counterSlice.reducer;