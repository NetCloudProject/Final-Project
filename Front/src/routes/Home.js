import React, {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import jwt_decode from 'jwt-decode';


const Home = () => {

    const [user, setUser] = useState({});

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById('signInDiv').hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById('signInDiv').hidden = false;
    }


  useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
          client_id: "309606119218-tp2tlcjdmba920ejmdkavc0ga1qiiguj.apps.googleusercontent.com",
          callback: handleCallbackResponse
          });
      google.accounts.id.renderButton(
          document.getElementById('signInDiv'),
          { theme: "outline", size: "small"}
      );

      google.accounts.id.prompt();
      },[]);



    return (
        <div>
            <div id="signInDiv">  </div>
            {Object.keys(user).length != 0 &&
             <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
            }

            { user &&
                <div>
                    <img src = {user.picture}/>
                    <h3>{user.name}</h3>
                </div>

            }
            <Navbar />
            <Video />
            <Footer/>
        </div>
    )
}

export default Home
