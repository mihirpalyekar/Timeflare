import { useContext } from 'react';
import { AuthContext } from 'src/contexts/auth-context';

// create auth context

export const useAuth = () => useContext(AuthContext);
