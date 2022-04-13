import { Orders } from "./orders";
export interface Users {
  id:number,
  name:string,
  email:string,
  role:string,
  order?:Orders[],
}
