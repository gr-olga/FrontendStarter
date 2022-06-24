import {useDispatch, useSelector} from "react-redux";
import {selectSpaces} from "../../store/appState/selectors";

import {Link} from "react-router-dom";
import {useEffect} from "react";
import {bootstrapLoginState} from "../../store/appState/actions";

export default function HomePage() {
    const dispatch = useDispatch()
    const spaces = useSelector(selectSpaces)
    useEffect(() => {
        dispatch(bootstrapLoginState)
    }, [dispatch]);

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
