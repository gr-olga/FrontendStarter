import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchSpaceById} from "../../store/appState/actions";
import {selectSpaceDetail} from "../../store/appState/selectors";


export default function Space() {
    const dispatch = useDispatch()
    const params = useParams();
    const details = useSelector(selectSpaceDetail)
    const id = params.id
    console.log("id", details)

    useEffect(() => {
        dispatch(fetchSpaceById(id))
        console.log(id)
    }, [])

    return (
        <div>
            <h3>Hi</h3>
            <h4>{details.title}</h4>
            {details.stories.map((s) => {
                return (
                    <p>{s.name}</p>
                )
            })}
        </div>
    )
}