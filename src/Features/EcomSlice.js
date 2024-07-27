import { createSlice, nanoid } from "@reduxjs/toolkit";
import Products from '../Products.json';



export const initialState = {
   filterData : [],
   products: Products,
   Cart: [],
   DetailProd: [],
   ShowCart: false,
   Count : 0,
   prices : 0,
   Quant : 1,
   show : false,

}

export const EcommSlice = createSlice({
   name: 'ecommerce',
   initialState,
   reducers: {
      GetProdDetail: (state, action) => {
         const prods = {
            id: nanoid(),
            pBrand: action.payload.brand,
            pName: action.payload.names,
            pPrice: action.payload.price,
            pImg: action.payload.img,
            pRate: action.payload.pRate,
            pSimg: action.payload.Simg
         }
         state.DetailProd.push(prods)
           
   
      },
      GetCartProds: (state, action) => {
         const cartProds = {
            id: nanoid(),
            names: action.payload.names,
            brand: action.payload.brand,
            price: action.payload.price,
            img: action.payload.img
         }
         state.Cart.push(cartProds)
         state.Count += 1
         state.prices +=   cartProds.price 
         
      },
      toggleShoppingCart: (state, action) => {
         state.ShowCart = true
      },
      HideCart: (state, action) => {
         state.ShowCart = false
      },
      Removethis : (state,action) => {
         state.Cart = state.Cart.filter((eachProd) => eachProd.id !== action.payload.id)
         state.Count -= 1
         state.prices -= action.payload.price
      },
      changequnt : (state,action) => {
          state.Quant = action.payload
            
      },
      filterProducts : (state,action) => {
         state.filterData = state.products.filter((prod) => prod.type === action.payload)
         state.show = true
      },
      AllProds : (state,action) => {
         state.show = false
      }
  
   }
})

export const { GetProdDetail, GetCartProds, toggleShoppingCart, HideCart,Removethis,changequnt,filterProducts,AllProds} = EcommSlice.actions

export default EcommSlice.reducer