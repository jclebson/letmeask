type UserType = {
  id: string;
  name: string | null;
  avatar: string | null;
};

function useCheckAuth(user: UserType): boolean {
  if (Object.keys(user).length === 0) {
    return true;
  }
  return false;
}

export default useCheckAuth;
