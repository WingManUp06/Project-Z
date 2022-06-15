import VideoPlayer from "../modules/VideoPlayer"
import ChatFeed from "../modules/ChatFeed"

export default function Home(){
    // This is where we will write the home code
    return(
        <>
        <div className="App">
            <VideoPlayer/>
            <ChatFeed/>
        </div>
        </>
    )
}