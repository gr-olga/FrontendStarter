import {useDispatch, useSelector} from "react-redux";
import {selectSpace} from "../../store/appState/selectors";
import {useEffect} from "react";
import {bootstrapLoginState} from "../../store/appState/actions";
import {Link} from "react-router-dom";

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
                    <div
                        style={{backgroundColor: s.backgroundColor, color: s.color}}
                        key={s.id}
                    >
                        <h3>{s.title}</h3>
                        <p>{s.description}</p>
                        <Link to={`/space/${s.id}`} style={{backgroundColor: "red"}}> Visit space</Link>
                    </div>
                )
            })}
        </div>
    )
}
