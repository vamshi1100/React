import { createContext } from "react"
const UserContext = createContext({
    loggedInUser:'DEFAULT USER'
})

export default UserContext