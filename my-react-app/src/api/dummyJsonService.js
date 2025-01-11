import axios from 'axios';

//  URL for the DummyJSON API
const BASE_URL = 'https://dummyjson.com';

/**
 * @param {string} username - The username to search for.
 * @returns {object|null} - The user object if found, otherwise null.
 */
export async function getUserByUsername(username) {
  const response = await axios.get(
    `${BASE_URL}/users/filter?key=username&value=${username}`
  );
  // The response typically contains an object with a "users" array.
  const { users } = response.data || {};
  return users && users.length > 0 ? users[0] : null;
}

/**
 * @param {number|string} userId - The ID of the user to fetch.
 * @returns {object} - The user object containing detailed information.
 */
export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  // The data property contains all of the returned user info.
  return response.data;
}
