import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/selectors";
import {useEffect} from "react";
import {getUserWithStoredToken} from "../../store/user/actions";
import AddStory from "../../components/AddStory/AddStory";

export default function MySpace() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    console.log(user);

    useEffect(() => {
         dispatch(getUserWithStoredToken())
    }, [dispatch])

    console.log(user);
    if (!user)
        return (
            <div>
                <h3>Loading...</h3>
            </div>
        );
    return (
        <div style={{border: "1px solid red"}}>
            <h3>Hello {user.name}</h3>
            <p>{user.space.title}</p>
            {user.space.stories && user.space.stories.length > 0 ? user.stories.map((s) => {
                return (
                    <div style={{border: "1px solid black"}} key={s.id}>
                        <p>{s.name}</p>
                        <h5>{s.content}</h5>
                        <image src={s.imageUrl}/>
                        <button onClick={() => console.log("hi")}>Remove story</button>
                    </div>
                )
            }) : <div><p>{user.space.stories.name}</p>
                <h5>{user.space.stories.content}</h5></div>}
            <AddStory/>
        </div>
    )
}