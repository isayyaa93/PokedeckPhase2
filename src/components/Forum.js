import React, {useEffect, useState}from "react"
import Post from "./Post"

const Forum = () => {
    const [userImage, setUserImage] = useState("https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png")
    const [userName, setUserName] = useState('Ash')
    const [userMessage, setUserMessage] = useState('has joined the forum')
    const [isVis, setIsVis] = useState(true)
    const [forumposts, setForumPosts] = useState([])
    const images = ["https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png", "https://www.pngplay.com/wp-content/uploads/12/Squirtle-Pokemon-No-Background-Clip-Art.png", 'https://clipart.world/wp-content/uploads/2020/08/Gengar-Pokemon-clipart-transparent-background.png']
    const [highL1, setHighL1] = useState(false)
    const [highL2, setHighL2] = useState(false)
    const [highL3, setHighL3] = useState(false)


    const hightLight1 = () => {
        setHighL1(true)
        setHighL2(false)
        setHighL3(false)
        setUserImage(images[0])
    }
    const hightLight2 = () => {
        setHighL2(true)
        setHighL1(false)
        setHighL3(false)
        setUserImage(images[1])
    }
    const hightLight3 = () => {
        setHighL3(true)
        setHighL1(false)
        setHighL2(false)
        setUserImage(images[2])
    }

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
                
                <img className="default1" style={{backgroundColor: highL1 ? "yellow" : "seashell"}}src={images[0]} width="100" height="100" onClick={() => hightLight1()}/>
                <img className="default2" style={{backgroundColor: highL2 ? "yellow" : "seashell"}}src={images[1]} width="100" height="100" onClick={() => hightLight2()}/>
                <img className="default3" style={{backgroundColor: highL3 ? "yellow" : "seashell"}}src={images[2]} width="100" height="100" onClick={() => hightLight3()}/>
                
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