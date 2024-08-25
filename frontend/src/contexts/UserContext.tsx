// src/contexts/UserContext.tsx

import React, { createContext, useEffect, useState } from 'react';

import { User } from '../types/types';

interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});
