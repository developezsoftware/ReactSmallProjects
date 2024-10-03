import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'car',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        addCar(state, action){
            state.cars.push(
                {
                    name: action.payload.name,
                    cost: action.payload.cost,
                    id: nanoid()
                }
            );
        },
        removeCar(state, action){
            const updatedCars = state.cars.filter((car) => {
                return car.id !== action.payload;
            });
            state.cars = updatedCars;
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carSlice.actions;
export const carSliceReducer = carSlice.reducer;