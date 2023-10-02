import { User } from "./user.model";
import { Sports } from "./sports.model";
import { Adress } from "./adress.model";

export class Adverts {
  id?:number;
  advertText?:string;
  userID?:number;
  sportID?:number;
  adressID?:number;

  adress : Adress[] = [];
  sport : Sports[] = [];
  user : User[] = [];

}
