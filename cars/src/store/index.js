import { configureStore } from "@reduxjs/toolkit";
import { changeSearchTerm, addCar, removeCar, carSliceReducer} from "./slices/carSlice";
import { changeName, changeCost, formReducer } from "./slices/formSlice";

const store = configureStore({
    reducer: {
        form : formReducer,
        cars : carSliceReducer
    }
});

export { store, changeSearchTerm, addCar, removeCar, changeCost, changeName}