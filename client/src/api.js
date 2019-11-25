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