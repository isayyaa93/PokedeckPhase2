import React, {useEffect, useState}from "react"
import Post from "./Post"

const Forum = () => {
    const [userImage, setUserImage] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
    const [userName, setUserName] = useState('Ash')
    const [userMessage, setUserMessage] = useState('has joined the forum')
    const [isVis, setIsVis] = useState(true)
    const [forumposts, setForumPosts] = useState([])
    const images = ["https://i.pinimg.com/550x/cb/33/49/cb3349b86ca661ca61ae9a36d88d70d4.jpg", "https://pm1.narvii.com/6978/15b82b62f1178d4b4c96ae0c8ff79fb75bc042d1r1-447-459v2_hq.jpg", 'https://clipart.world/wp-content/uploads/2020/08/Gengar-Pokemon-clipart-transparent-background.png']
    



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
                 
                <h2 className="choose">1. choose an image to be your avatar</h2>
                
                <img className="default1" src={images[0]} width="100" height="100" onClick={() => setUserImage(images[0])}/>
                <img className="default2" src={images[1]} width="100" height="100" onClick={() => setUserImage(images[1])}/>
                <img className="default3" src={images[2]} width="100" height="100" onClick={() => setUserImage(images[2])}/>
                
                <h2 className="enteruser">2. Enter your username</h2>
                <input  className="ashbar" type="text" placeholder="Enter UserName " autoComplete="off" value={userName} onChange={e=> setUserName(e.target.value)}/>
                <button class="takemebtn" onClick={createUser}>Finished Take me to the Forum</button>
            </div>
            <div id="forum_page" style={{display: !isVis ? "inherit" : "none"}}>
                {forumposts.map((element) => {
                    return (<Post key={element.id} id={element.id} forumpost={element} setUserMessage={setUserMessage} setForumPosts={setForumPosts} />)
                    {console.log('ran past here')}
                })}
                <div className="profile">
                <img src={userImage} width="200px" height="200px"></img>
                <strong>{userName}</strong>
                <p id="insertReply"></p>
                <textarea className="textarea" placeholder="enter your thoughts " autoComplete="off" value= {userMessage} onChange={e=> setUserMessage(e.target.value)}></textarea>
                <button onClick={postMessage}>POST</button>
                </div>
            </div>
        </div>
    )
}

export default Forum