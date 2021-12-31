/* eslint-disable */
import React from "react";
import { CardImg, CardImgOverlay, CardTitle,CardText ,Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img5 from "../../images/mainPage.png";
import img6 from "../../assets/images/professional/amazonPaylogo.png";
function googleSignInPopup(provider) {
    // [START auth_google_signin_popup]
    firebase.auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
  
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        alert(result);
        // The signed-in user info.
        var user = result.user;
        alert(user);
        var username = user.email;
        console.log(user);
        alert(username);
        window.location.href = `/profile/${user.email}`;
       // window.location.href = '/register';
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        
        // ...
      });
    // [END auth_google_signin_popup]
  }

  function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    googleSignInPopup(provider);
  }
const Start = () => {
  return (
      <div className="spacer ">
        <Container className="feature30">
          <Row>
            <Col lg="10">
              <Image
                src={img5}
                className="rounded img-responsive"
                alt="wrappixel"
              />
            </Col>
            <Col lg="5" md="7" className="text-center wrap-feature30-box">
              <Card className="card-shadow">
                <CardBody>
                  <div className="p-20">
                    
                    <h3 className="title">
                        With so many opportunities out in market, Still strugging to get referrals
                    </h3>
                    <p>
                      Let us build a community which is self sustainable. 
                      Login below and unfold the magic
                    </p>
                    <p 
                      onClick={signIn()}
                      className="btn btn-danger btn-md btn-arrow m-t-20"
                    >
                      <span >
                        Log in <i className="ti-arrow-right"></i>
                      </span>
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
  );
};

export default Start;
