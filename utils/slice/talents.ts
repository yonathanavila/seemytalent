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
            const index = state.talent.findIndex((talent) => talent.id === action.payload.id);
            if (index !== -1) {
                state.talent.splice(index, 1);
            }
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
