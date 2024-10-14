/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import {storeData} from "../../assets/data/dummyData"

export const ProductSlice = createSlice({
    name: "products",
    initialState: {
        filteredProduct: JSON.parse(sessionStorage.getItem("filterdData")) || storeData,
        singleProduct: JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
        error: false,
    },
    reducers: {
        filteredProducts(state, action){
            try {
                const filter = storeData.filter((product)=>product.type === action.payload);
                state.filteredProduct = filter;
                state.error = false;
                const saveState = JSON.stringify(filter);
                sessionStorage.setItem("filterdData", saveState)
            } catch (error) {
                return error;
            }
        },
        singleProduct(state, action){
            try {
                const oneProduct = storeData.filter((product)=> product.id === action.payload);
                state.singleProduct = oneProduct;
                const saveState = JSON.stringify(oneProduct)
                sessionStorage.setItem("oneProduct", saveState);
            } catch (error) {
                return error
            }
        },
        filterGender(state, action){
            try {
                const gender = state.filteredProduct.filter(
                    (product) => product.gender === action.payload
                );
                state.error = false;
                state.filteredProduct = gender;
                const oneGenderType = gender.length > 0;
                if(oneGenderType){
                    state.error = false;
                    const saveState = JSON.stringify(gender);
                    sessionStorage.setItem("filterdData", saveState);
                }else {
                    state.error = true;
                    state.filteredProduct = [];

                }
            } catch (error) {
                return error;
            }
        },
        sortByPrice(state){
            try {
                const price = state.filteredProduct.sort((a, b) =>
                  a.price > b.price ? -1 : 1
                );
                state.filteredProduct = price;
                let count = price.length;
                if (count > 1) {
                  const noError = false;
                  state.error = noError;
                  if (!noError) {
                    state.filteredProduct = price;
                    const saveState = JSON.stringify(price);
                    sessionStorage.setItem("filterdData", saveState);
                  }
                } else {
                  state.error = true;
                  state.filteredProduct = [];
                }
              } catch (err) {
                return err;
              }
        },
        filterByColor(state, action){
            try {
                const color = state.filteredProduct.filter( (product) => 
                    product.color.includes(action.payload)
                );
                state.error = false;
                state.filteredProduct = color;
                if(color.length <= 0){
                    state.error = true;
                    state.filteredProduct = [];
                }else {
                    state.error = false;
                    state.filteredProduct = color;
                    const saveState = JSON.stringify(color);
                    sessionStorage.setItem("filterdData", saveState);
                }
            } catch (error) {
                return error;
            }
        },
        filterBySize(state, action){
            try {
                const size = state.filteredProduct.filter( (product) => 
                    product.size.includes(action.payload)
                );
                state.error = false;
                state.filteredProduct = size;
                if(size.length <= 0){
                    state.error = true;
                    state.filteredProduct = [];
                }else {
                    state.error = false;
                    state.filteredProduct = size;
                    const saveState = JSON.stringify(size);
                    sessionStorage.setItem("filterdData", saveState);
                }
            } catch (error) {
                return error;
            }
        }   
    }

})

export const {filteredProducts, singleProduct, filterGender, sortByPrice, filterByColor, filterBySize } = ProductSlice.actions;
export default ProductSlice.reducer;