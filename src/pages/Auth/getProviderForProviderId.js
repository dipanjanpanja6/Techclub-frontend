import firebase from "firebase"

export const getProviderForProviderId = d => {
  console.log(d)

  if (d === "google.com") {
    return new firebase.auth.GoogleAuthProvider()
  }
  // switch(d){
  //     case :
  //         return
  // }
}
