import { createSlice } from '@reduxjs/toolkit';
import { AppState } from '~/root/utils/store';

export interface ITalent {
    talent: Array<any>
};

const initialState: ITalent = {
    talent: []
};

export const talentSlice = createSlice({
    name: 'talent',
    initialState,
    reducers: {
        addTalent: (state, action) => {
            state.talent.push(action.payload);
        },
        removeTalent: (state, action) => {
            let store = state?.talent;
            let { id } = action.payload;
            // @dev Devuelve el estado actual sin el nft enviado
            let array = store.filter((item) => item.id !== parseInt(id));
            // @dev Guardo el nuevo estado sin el nft que envio para eliminar el carrito
            state.talent = array;
        },
        clearArray: (state) => {
            state.talent = [];
        }
    }
});

export const { addTalent } = talentSlice.actions;

export const { removeTalent } = talentSlice.actions;

export const { clearArray } = talentSlice.actions;

export default talentSlice.reducer;

export const selectTalent = (state: AppState) => state.talentsSlice.talent;
