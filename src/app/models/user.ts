export class User {
  public _id: string;
  public name: string;
  public fechaNacimiento: string;
  public email: string;
  public password: string;
  public passwordConfirm: string;
  public image: string;

  public associates: Array<any> = [];
}
