import React, {useEffect, useState}from "react"
import Post from "./Post"

const Forum = () => {
    const [userImage, setUserImage] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
    const [userName, setUserName] = useState('Ash')
    const [userMessage, setUserMessage] = useState('has joined the forum')
    const [isVis, setIsVis] = useState(true)
    const [forumposts, setForumPosts] = useState([])
    const images = ["https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg", "https://cdn.pixabay.com/photo/2021/12/26/17/31/pokemon-6895600__340.png", 'https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/006-Gigantamax.png']
    



    const createUser = async () => {
        await fetch('http://localhost:3004/messages', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: userName,
                image: userImage,
                body: userMessage,
            }
            ) },  
            )
        setIsVis(false)

    }

    const postMessage = async (e) => {
        let req = await fetch('http://localhost:3004/messages', {
            method: 'POST', 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: userName,
                image: userImage,
                body: userMessage,
            }
            ) },  
            )
        let res = await req.json()
            setForumPosts((last) => [...last, res])
            setUserMessage('')
    }
    const loadForum = async () => {
        let req = await fetch('http://localhost:3004/messages')
        let res = await req.json()
        setForumPosts(res)
    }
    useEffect(() => {loadForum()}, [])

    return(
        <div>
            <div id="welcome_box" style={{display: isVis ? "inherit" : "none"}} > 
                <h1>Welcome to I.E. Forums</h1> 
                <h2>choose an image to be your avatar</h2>
                <img src={images[0]} width="100" height="100" onClick={() => setUserImage(images[0])}/>
                <img src={images[1]} width="100" height="100" onClick={() => setUserImage(images[1])}/>
                <img src={images[2]} width="100" height="100" onClick={() => setUserImage(images[2])}/>
                <h2>Enter your username</h2>
                <input type="text" placeholder="Enter UserName " autoComplete="off" value={userName} onChange={e=> setUserName(e.target.value)}/>
                <button onClick={createUser}>Finished Take me to the Forum</button>
            </div>
            <div id="forum_page" style={{display: !isVis ? "inherit" : "none"}}>
                {forumposts.map((element) => {
                    return (<Post key={element.id} id={element.id}forumpost={element} setUserMessage={setUserMessage}/>)
                    {console.log('ran past here')}
                })}
                <div>
                <img src={userImage} width="50" height="50"></img>
                <strong>{userName}</strong>
                <p id="insertReply"></p>
                <textarea placeholder="enter your thoughts " autoComplete="off" value= {userMessage} onChange={e=> setUserMessage(e.target.value)}></textarea>
                <button onClick={postMessage}>Post </button>
                </div>
            </div>
        </div>
    )
}

export default Forum