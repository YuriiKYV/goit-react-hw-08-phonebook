import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter-slice';
import css from '../Filter/Filter.module.css';

export default function Filter() {

    const filterValue = useSelector(store => store.filter)
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value } = e.target;
        dispatch(setFilter(value))
    }

    return (
        <input className={css.filterInput} type="text" name="filter" value={filterValue} onChange={handleChange}></input>
    )
}