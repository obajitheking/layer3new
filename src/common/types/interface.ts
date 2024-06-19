export interface IUser {
  id?: string;
  email?: string;
  username: string;
  role: string;
}

export interface IMentor {}

export interface IMentee {}

export interface INotification {
  type: "success" | "error" | "info";
  message: string;
  description?: string;
}

export interface IRequestCallback {
  fullname: string;
  email: string;
  phone: string;
  location: string;
  type: "callback";
}

export interface IContactSales {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  product_of_interest: string;
  message: string;
  type: "contact";
}
