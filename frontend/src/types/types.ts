// User interface, representing the User entity
export interface User {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  sets?: Set[]; // Optional array of sets created by the user
  flashcards?: FlashCard[]; // Optional array of flashcards created by the user
}

export interface UserRegistrationDTO {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export interface UserRegistrationResponseDTO {
  userId: number;
  userName: string;
  createdAt: Date;
  firstName: string;
  lastName: string;
}

// New interface based on backend's response
export interface UserResponseDTO {
  userId: number;
  userName: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  token: string; // JWT token
}

export interface Set {
  setId: number;
  setName: string;
  setLength: number;
  userId: number; // The ID of the user who created this set
  author?: User; // The user who created this set (optional, might be populated if needed)
}

export interface FlashCard {
  flashcardId: number;
  question: string;
  answer: string;
  setId: number; // The ID of the set this flashcard belongs to
  userId: number; // The ID of the user who created this flashcard
  author?: User; // The user who created this flashcard (optional)
  set?: Set; // The set this flashcard belongs to (optional)
}
