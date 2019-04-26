import { withCookies} from 'react-cookie';
import ObservableModel from "./ObservableModel";

const PUBLISH_KEY = process.env.REACT_APP_PUBLISH_KEY;
const SUBSCRIBE_KEY = process.env.REACT_APP_SUBSCRIBE_KEY;



class Model {
  constructor() {
    super();
    
    pubNum = new PubNub({
        publishKey: PUBLISH_KEY,
        subscribeKey: SUBSCRIBE_KEY
    });


  }

  publish(message, channel){
      this.pubNum.publish({message: message, channel: channel});
  }

  pubNub.addListener({
      message: function(message){console.log(message)}
  });

  subscribe(channel){
      this.notifyObservers("subscribe");
      pubNub.subscribe({channels: [channel]})
  }

}



// Export an instance of DinnerModel
const modelInstance = new Model();
export default withCookies(modelInstance);