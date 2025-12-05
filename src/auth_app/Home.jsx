import { useContext } from "react";
import { AuthContext } from "./AuthContext";




function Home(){
    const {user}= useContext(AuthContext);
    return(
        <div>
            {/* navbar */}
            <div>
                <h2>Welcome,{user?.username}</h2>
                <p>this is your home page.</p>
                
            </div >
            
        </div>
            
        

    );
}
export default Home;