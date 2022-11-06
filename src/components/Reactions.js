import React from 'react'
import { useAddReactionMutation } from "../features/posts/postsSlice"


const reactionEmoji = {
    onFire: "🔥",
    clap: "👏",
    crap: "💩",
    curious: "🤔",
    loveit: "❤️",
    haha: "😂 "
}
const Reactions = ({ post }) => {
    const [reactionAdded] = useAddReactionMutation();
    const reactionBtns = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name}
                type="button"
                className='bg-transparent 
                 w-fit text-mds md:text-xl mr-3 cursor-pointer'
                onClick={() => {
                    const rValue = post.reactions[name] + 1;
                    reactionAdded({
                        postId: post.id,
                        reactions: {
                            ...post.reactions,
                            [name]: rValue
                        }
                    })
                }}
            >
                {emoji}
                <em className=' text-gray-500 text-sm '>
                    {post?.reactions[name]}
                </em>
            </button>
        )
    })
    return (
        <div>
            {reactionBtns}
        </div>
    )
}

export default Reactions
