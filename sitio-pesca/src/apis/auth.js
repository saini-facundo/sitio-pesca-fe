export const signIn = async (userForm) => {
  const resp = await fetch("http://localhost:4000/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userForm),
  });
  return await resp.json();
};

export const createUser = async (userForm) => {
  const resp = await fetch("http://localhost:4000/api/users/new", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userForm),
  });
  return await resp.json();
};
