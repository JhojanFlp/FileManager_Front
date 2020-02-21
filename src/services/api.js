import * as qs from "query-string";
import retryFetch from "../helpers/retryFetch";
import {refreshPage} from '../helpers/refreshPage';

const API_URL = 'http://127.0.0.1:5000';

const api = method => async (
  endpoint,
  data = {}
) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");

  const options = {
    method,
    cache: "no-cache",
    headers,
    retries: 3
  };

  let queryString = "";
  if (typeof data === "object") {
    if (method === "GET") {
      queryString = `?${qs.stringify(data)}`;
    } else if (method === "POST") {
      options.body = JSON.stringify(data);
    } else {
      throw new Error("Only GET and POST are implemented");
    }
  }

  try {
    const response = await retryFetch(
      `${API_URL}/${endpoint}${queryString}`,
      options
    );
    if (response.ok) {
      if (method === 'POST') {
        refreshPage();
      }
      return await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export default {
  get: api("GET"),
  post: api("POST")
};
