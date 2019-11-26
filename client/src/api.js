const BASE_URL = "http://localhost:8000/api";

export async function addTodo(text) {
  try {
    const res = await fetch(BASE_URL + "/todo", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function getTodos() {
  try {
    const res = await fetch(BASE_URL + "/todo", {
      method: "get"
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function editTodo(id, fields) {
  try {
    const res = await fetch(BASE_URL + "/todo/" + id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(fields)
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
}

export async function login(username, password) {
  try {
    const res = await fetch(BASE_URL + "/user/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      return await res.json();
    } else {
      throw new Error(res.statusText);
    }
  } catch (error) {
    throw error;
  }
}
