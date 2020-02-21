// Adapted from https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g

const retryFetch = async (
  input,
  init
) => {
  const { retries, ...initFetch } = init;
  try {
    return await fetch(input, initFetch);
  } catch (error) {
    if (retries === 1) {
      throw error;
    }
    return await retryFetch(input, { retries: retries - 1, ...initFetch });
  }
};

export default retryFetch;
