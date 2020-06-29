import { combineReducers } from "redux";
import products from "./products";
import itemEditing from "./item-editing";

const appReducers = combineReducers({
    products,
    itemEditing
});

export default appReducers;
