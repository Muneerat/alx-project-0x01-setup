export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserCardProps {
  user: UserProps;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

export interface UserModalProps {
  data: UserProps;
}
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
