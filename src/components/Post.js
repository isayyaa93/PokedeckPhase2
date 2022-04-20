

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
        <div>
                <img src={image} width="50" height="50"></img>
                <strong>{username}</strong>
                <p>{body}</p> 
                <button onClick={() => addReply()}>reply</button>
                <button onClick={() => deleteMessage()}>delete</button>
        </div>
    )
}

export default Post