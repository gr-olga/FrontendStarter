import {useSelector} from "react-redux";
import {selectSpaces} from "../../store/appState/selectors";

import {Link} from "react-router-dom";

export default function HomePage() {
    const spaces = useSelector(selectSpaces)

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
