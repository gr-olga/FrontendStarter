import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectSpaceDetails, selectSpaceDetailsStories} from "../../store/appState/selectors";
import {useEffect} from "react";
import {fetchSpaceById} from "../../store/appState/actions";


export default function Space() {
    const dispatch = useDispatch()
    const params = useParams();
    const {id} = params
    const details = useSelector(selectSpaceDetails)
    const stories = useSelector(selectSpaceDetailsStories)

    useEffect(() => {
        dispatch(fetchSpaceById(id))
    }, [dispatch, id])

    const sortByDate = (a, b) => {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        return dateA > dateB ? 1 : -1;
    }
    const sortedStories = [...stories].sort(sortByDate);
    console.log(sortedStories);

    return (
        <div>
            <h4>{details.title}</h4>
            {sortedStories.map((s) => {
                return (
                    <div style={{border: "1px solid black"}} key={s.id}>
                        <p>{s.name}</p>
                        <h5>{s.content}</h5>
                        <img src={s.imageUrl}/>
                    </div>
                )
            })}
        </div>
    )
}