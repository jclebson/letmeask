const getLocalStorage = <T>(key: string, initial: T) => {
  try {
    return JSON.parse(localStorage.getItem(key) as string) || initial;
  } catch (err) {}
};

export default getLocalStorage;
