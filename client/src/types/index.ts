export interface User {
  _id: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserState {
  currentUser: User | null;
  error: string | null;
  loading: boolean;
}

export interface Listing {
  _id: string;
  name: string;
  description: string;
  address: string;
  regularPrice: number;
  discountPrice: number;
  bathrooms: number;
  bedrooms: number;
  furnished: boolean;
  parking: boolean;
  type: "sale" | "rent";
  offer: boolean;
  imageUrls: string[];
  userRef: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface SearchQuery {
  searchTerm?: string;
  type?: "all" | "rent" | "sale";
  parking?: boolean;
  furnished?: boolean;
  offer?: boolean;
  sort?: string;
  order?: "desc" | "asc";
  limit?: number;
  startIndex?: number;
}
