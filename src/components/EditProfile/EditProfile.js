import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {postNewStory} from "../../store/appState/actions";
import {updateSpace} from "../../store/user/actions";
import {selectUserSpace} from "../../store/user/selectors";

export default function EditProfile(props) {
    const spaceData = props.space
    const dispatch = useDispatch()
    const [clickBtn, setClickBtn] = useState(false)
    const [title, setTitle] = useState(spaceData.title);
    const [description, setDescription] = useState(spaceData.description);
    const [color, setColor] = useState(spaceData.color);
    const [backgroundColor, setBackgroundColor] = useState(spaceData.backgroundColor);
    const id = props.id
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(title,description,color,backgroundColor);
        dispatch(updateSpace(title, description, backgroundColor, color, id))
    };

    return (
        <>
            <div>
                <h2>Hey</h2>
                <button onClick={() => setClickBtn(true)}>Edit my space</button>
            </div>
            <div>
                {clickBtn ? (
                        <form onSubmit={onFormSubmit}>
                            <div>
                                <label>title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>description</label>
                                <input
                                    type="text"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>backgroundColor</label>
                                <input
                                    type="text"
                                    value={backgroundColor}
                                    onChange={(e) => setBackgroundColor(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>color</label>
                                <input
                                    type="text"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                            </div>
                            <button type="submit">Post</button>
                            <button onClick={() => setClickBtn(false)}>Discard</button>
                        </form>)
                    :
                    <p>Edit you profile</p>}
            </div>
        </>
    )
}