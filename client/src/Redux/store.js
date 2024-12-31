import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk'; // Correct import
import { cartReducer } from "./Reducers/Cart";
import { orderDetailReducer, orderListReducer, orderPaymentReducer, orderReducer } from './Reducers/Order';
import { productListReducer, productReducer } from './Reducers/Product';
import { userLoginReducer, userRegisterReducer } from './Reducers/User';
const persistConfig = {
    key: 'root',
    storage,
    version: 1
};

const rootReducer = combineReducers({
    productListReducer,
    productReducer,
    userLoginReducer,
    userRegisterReducer,
    cartReducer,
    
    orderReducer,
    orderDetailReducer,
    orderPaymentReducer,
    orderListReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    applyMiddleware(thunk) // Apply thunk middleware
);

export const persistor = persistStore(store);