import {useDispatch, useSelector} from "react-redux";
import {selectSpace} from "../../store/appState/selectors";
import {useEffect} from "react";
import {bootstrapLoginState} from "../../store/appState/actions";

export default function HomePage() {
    const dispatch = useDispatch()
    const spaces = useSelector(selectSpace)

    useEffect(() => {
        dispatch(bootstrapLoginState)
        console.log("hi", bootstrapLoginState)
    }, [dispatch])

    return (
        <div>
            {spaces.map((s) => {
                return (
                    <div style={{backgroundColor: s.backgroundColor, color: s.color}}>
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                    </div>
                )
            })}
        </div>
    )
}
