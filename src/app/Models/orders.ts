import { Orderitem } from "./orderitem";
import { Products } from "./products";

export interface Orders {
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
  message:string,
  tracking_no:string,
  total_price:string,
  status:number,
  created_at:Date,
  order_item?:Orderitem[],
  productss?:Products[]
}
