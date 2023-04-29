import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, AppState } from '~/root/utils/store';

// @dev Global dispatch instance
export const useAppDispatch = () => useDispatch<AppDispatch>();

// @dev Global selector instance
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
