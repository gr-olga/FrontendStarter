import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../store/user/selectors";
import {useEffect} from "react";
import {deleteStory, getUserSpace} from "../../store/user/actions";
import AddStory from "../../components/AddStory/AddStory";

export default function MySpace() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)

    useEffect(() => {
        dispatch(getUserSpace())
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
            {!user.space.stories || user.space.stories.length < 1 ?
                (<div/>)
                :
                user.space.stories.map((s) => {
                        return (
                            <div style={{border: "1px solid black"}} key={s.id}>
                                <p>{s.name}</p>
                                <h5>{s.content}</h5>
                                <img src={s.imageUrl}/>
                                <button onClick={()=>dispatch(deleteStory(s.id))}>Remove story</button>
                            </div>
                        )
                    }
                )
            }
            <AddStory id={user.space.id}/>
        </div>
    )
}