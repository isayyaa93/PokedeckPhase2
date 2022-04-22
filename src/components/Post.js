

const Post = ({forumpost, setForumPosts, setUserMessage}) => {
    const {username, image, body, id} = forumpost
    const addReply = () => {
        setUserMessage(`${username} Quote ${body} -->`)
    }
    const deleteMessage = async () => {
        let req = await fetch(`http://localhost:3004/messages/${id}`, {
      method: "DELETE"

  })
  if (req.ok) {
    setForumPosts((posts) => {
      let list = posts.filter((element) => {
        return element.id !== id
      })
      return list
    })
  }
    }
    return(
        <div className="usercontainer">
                <img src={image} width="150px" height="150px"></img>
                <strong>{username}</strong>
                <p>{body}</p> 
                <button className ="reply" onClick={() => addReply()}>REPLY</button>
                <button onClick={() => deleteMessage()}>🗑</button>
        </div>
    )
}

export default Post