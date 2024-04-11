import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, RootState, store } from "./store";

/**
 * @param Custom hook to access the dispatch function of the Redux store.
 *
 * @returns The dispatch function of the Redux store.
 */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
/**
 * @param Custom hook to access the selected state from the Redux store.
 *
 * @returns The selected state from the Redux store.
 */
export const useAppSelector = useSelector.withTypes<RootState>();
/**
 * @param Custom hook to access the Redux store directly.
 *
 * @returns The Redux store object.
 */

export const useAppStore = useStore.withTypes<typeof store>();
