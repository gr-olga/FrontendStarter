import {useState} from "react";
import {postNewStory} from "../../store/appState/actions";
import {useDispatch} from "react-redux";
import Popup from "../Popup/Popup";

export default function AddStory(props) {
    const dispatch = useDispatch()
    const [clickBtn, setClickBtn] = useState(false)
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState("");
    const [success, setSuccess] = useState(false)
    const id = props.id
    console.log(id)
    console.log(name, content, image)
    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(postNewStory(name, content, image, id))

    };
    const togglePopup = () => {
        setSuccess(!success)
    }

    return (
        <>
            <div>
                <h2>Hey</h2>
                <button onClick={() => setClickBtn(true)}>Post a cool story bro</button>
            </div>
            {success && <Popup handleClose={togglePopup} content={"you creat a story"}/>}
            <div>
                {clickBtn ? (
                        <form onSubmit={onFormSubmit}>
                            <div>
                                <label>Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Content</label>
                                <input
                                    type="text"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />

                            </div>
                            <div>
                                <label>Image url</label>
                                <input
                                    type="text"
                                    value={image}
                                    alt="st"
                                    onChange={(e) => setImage(e.target.value)}
                                />
                                {image && <img id="blah" src={image} alt="your image" width={300}/>}
                            </div>
                            <button type="submit" onClick={togglePopup}>Post</button>
                            <button onClick={() => setClickBtn(false)}>Discard</button>
                        </form>)
                    :
                    (<p>World waits you story</p>)}
            </div>
        </>
    )
}