import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectCurrentUser, selectCurrentToken } from "../../features/auth/authSlice"

const Welcome = () => {
    const user = useSelector(selectCurrentToken)
    const token = useSelector(selectCurrentUser)

    const welcome = user ? `Welcome ${user}!` : 'Welcome!'
    const tokenAbbr = `${token.slice(0, 20)}...`

    const content = (
        <section className="welcome">
            <h1>{welcome}</h1>
            <p>Token: {tokenAbbr}</p>
            <p><Link to="/post">Start Writing </Link></p>
        </section>
    )

    return content
}
export default Welcome