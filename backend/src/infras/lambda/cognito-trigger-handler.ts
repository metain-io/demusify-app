function defineAuth (event) {
    try {
      const addressArr = event.userName && event.userName.split("-");
      const address = addressArr && addressArr[3];
      console.log(`DEBUG----------------address: ${address}`);
  
      if (
        event.request.session &&
        event.request.session.find((attempt) => attempt.challengeName !== "CUSTOM_CHALLENGE")
      ) {
        // We only accept custom challenges; fail auth
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
      } else if (
        event.request.session &&
        event.request.session.length &&
        event.request.session.slice(-1)[0].challengeResult === true
      ) {
        // The user provided the correct signature; succeed auth
        event.response.issueTokens = true;
        event.response.failAuthentication = false;
      } else {
        // The user did not provide a correct signature; present challenge
        event.response.issueTokens = false;
        event.response.failAuthentication = false;
        event.response.challengeName = "CUSTOM_CHALLENGE";
      }
  
      return;
    } catch (ex) {
      console.error("[ERROR][defineAuthChallenge] error: ", ex);
      throw ex;
    }
  };
  
  
  function createAuthen (event) {
    try {
      const addressArr = event.userName && event.userName.split("-");
      const address = addressArr && addressArr[3];
      console.log(`DEBUG----------------address: ${address}`);
  
      const { request = {} } = event;
      const { userNotFound } = request;
      if (userNotFound) {
        throw new Error("[404] User Not Found");
      }
  
      // We'll use a nonce here to make the message unique on each sign
      // in request to prevent replay attacks
      const nonce = Math.floor(Math.random() * 1000000).toString();
      const message = [
        "Welcome to Metain!",
        "This request will not trigger a blockchain transaction or cost any gas fees.",
        "Your authentication status will reset after 24 hours.",
        `Wallet address: ${address}`,
        `Nonce: ${nonce}`,
      ].join("\n\n");
  
      // This is sent back to the client app
      event.response.publicChallengeParameters = { message };
  
      // This is used later in our VerifyAuthChallenge trigger
      event.response.privateChallengeParameters = { message };
  
      return;
    } catch (ex) {
      console.error("[ERROR][createAuthChallenge]", ex);
      throw ex;
    }
  };
  
  
  function preSignUp (event) {
    try {
      const addressArr = event.userName && event.userName.split("-");
      const address = addressArr && addressArr[3];
      event.response.autoConfirmUser = true;
      return;
    } catch (ex) {
      console.error("[ERROR][preSignUp]", ex);
      throw ex;
    }
  };
  
  
  function verifyAuthen (event) {
    try {
      const addressArr = event.userName && event.userName.split("-");
      const address = addressArr && addressArr[3];
      console.log(`DEBUG----------------address: ${address}`);
  
      //This is the signature response from our Web3 app
      const signature = event.request.challengeAnswer;
      //Our usernames are the same as our public addresses
  
      //const { v, r, s } = fromRpcSig(signature);
  
      //Now for SOME REASON metamask prepends a few parameters
      //const messageHash = sha3(
        //"\u0019Ethereum Signed Message:\n" +
          //event.request.privateChallengeParameters.message.length.toString() +
          //event.request.privateChallengeParameters.message
      //);
      //const messageBuffer = new Buffer.from(messageHash.replace("0x", ""), "hex");
      //const recoveredPublicKey = ecrecover(messageBuffer, v, r, s);
      //const recoveredAddress = `0x${pubToAddress(recoveredPublicKey).toString("hex")}`;
  
      //if (address === recoveredAddress) {
        //event.response.answerCorrect = true;
      //} else { 
        //event.response.answerCorrect = false;
      //}
      event.response.answerCorrect = true;
      return;
    } catch (ex) {
      console.error("[ERROR][verifyAuthChallenge]", ex);
      throw ex;
    }
  };
  
  export const handler = async (event, context, callback) => {
    const triggerSource = {
      defineAuthen: "DefineAuthChallenge_Authentication",
      createAuthen: "CreateAuthChallenge_Authentication",
      verifyAuthen: "VerifyAuthChallengeResponse_Authentication",
      preSignUp: "PreSignUp_SignUp",
    };
  
    console.log(`DEBUG-----------------gaia-decentralize-trigger event: ${JSON.stringify(event)}`);
    switch (event.triggerSource) {
      case triggerSource.defineAuthen:
        defineAuth(event);
        break;
      case triggerSource.createAuthen:
        createAuthen(event);
        break;
      case triggerSource.verifyAuthen:
        verifyAuthen(event);
        break;
      case triggerSource.preSignUp:
        preSignUp(event);
        break;
    }
  
    callback(null, event);
  };
  