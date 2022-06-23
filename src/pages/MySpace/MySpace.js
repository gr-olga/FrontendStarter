import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/selectors";
import {useEffect} from "react";
import {getUserWithStoredToken} from "../../store/user/actions";

export default function MySpace() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        dispatch(getUserWithStoredToken())
    }, [dispatch])

    if (!user)
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    return (
        <div style={{}}>
            <h3>Hello {user.name}</h3>
            <p>{user.space.title}</p>
            {/*{user.stories.map((s) => {*/}
            {/*    return (*/}
            {/*        <div style={{border: "1px solid black"}} key={s.id}>*/}
            {/*            <p>{s.name}</p>*/}
            {/*            <h5>{s.content}</h5>*/}
            {/*            <image src={s.imageUrl}/>*/}
            {/*            <button onClick={() => console.log("hi")}>Remove story</button>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}