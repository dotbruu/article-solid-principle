import User from "./utils/User";
import Notify from "./utils/Nofity";

const user = new User();
const notify = new Notify(user);

console.log(user, notify);
