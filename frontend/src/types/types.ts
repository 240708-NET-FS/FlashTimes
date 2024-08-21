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

// Set interface, representing the Set (or Topic) entity
export interface Set {
  setId: number;
  setName: string;
  setLength: number;
  userId: number; // The ID of the user who created this set
  author?: User; // The user who created this set (optional, might be populated if needed)
}

// FlashCard interface, representing the Flashcard entity
export interface FlashCard {
  flashcardId: number;
  question: string;
  answer: string;
  setId: number; // The ID of the set this flashcard belongs to
  userId: number; // The ID of the user who created this flashcard
  author?: User; // The user who created this flashcard (optional)
  set?: Set; // The set this flashcard belongs to (optional)
}
