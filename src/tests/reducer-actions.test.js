import { sortByReducer } from "../store/reducers/sortBy.reducer";
import { actionTypes } from "../assets/constants";

describe('sortBy reducer + actions', () => {
    const initState = { list: [], selected: null };
    const mockList = [{ code: "1", title: "year" }, { code: "2",  title: "title" }];

   it('sortByReducer should been called', () => {
        expect(sortByReducer(undefined, {})).toEqual(initState);
    });

    it('should add sortBy list', ()=>{
        const fetchAction = { type: actionTypes.FETCH_SORT_BY_LIST, payload: mockList };
        expect(sortByReducer(undefined, fetchAction)).toEqual({ list: mockList, selected: [...mockList][0] });
    });

    it('should set selected', ()=>{
        const prevState = { list: mockList, selected: [...mockList][0] };
        const selected = { code: "2",  title: "title" };
        const selectAction = { type: actionTypes.SELECT_SORTED_BY, payload: selected };

        expect(sortByReducer(prevState, selectAction)).toEqual({ list: mockList, selected: selected });
    })
});