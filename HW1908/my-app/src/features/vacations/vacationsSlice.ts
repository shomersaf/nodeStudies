import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface IVacations {
  vacations: Array<{
    destination: string
    likes: number
    whoIs?: string | undefined
    src?: string
 
  }>
}

export const initialState: IVacations = {
  vacations: [
    {
      destination: "Kazabanga",
      likes: 5,
      whoIs: "Avi Pesakh",
      src: "https://stihi.ru/pics/2023/05/27/2850.jpg",
    
    },
    { destination: "Timbobungo",
     likes: 120,
     whoIs: "somebody",
     src: "https://proza.ru/pics/2021/06/30/908.jpg",
    },

    { destination: "Jinguang Tzebao",
     likes: 120,
     whoIs: "Tomer Rozental",
     src: "https://союзженскихсил.рф/upload/main/1d3/1d332dfa9564c17a63a5afebfd53940a.jpg",
     },
    { destination: "Afamaluyya",
     likes: 1,
     whoIs: "daddy, please, not me!",
     src: "https://funik.ru/wp-content/uploads/2021/06/ffd776952cc62fdc5269-1.jpg",
     }
  
  ],
}

export const vacationsSlice = createSlice({
  name: "vacations",
  initialState,
  reducers: {
    addLike: (state, action: PayloadAction<string>) => {
      const index = state.vacations.findIndex(
        (v) => v.destination.toLowerCase() === action.payload,
      )
      if (index !== -1) {
        state.vacations[index].likes++
      }
    },
  },
})

export const { addLike } = vacationsSlice.actions

export default vacationsSlice.reducer
