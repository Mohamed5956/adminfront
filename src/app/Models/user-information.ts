import { Users } from "./users";

export interface UserInformation {
  id:number,
  user_id:number,
  fname:string,
  lname:string,
  email:string,
  phone:string,
  address1:string,
  address2:string,
  city:string,
  state:string,
  pincode:number,
  user:Users
}
