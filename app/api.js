const apiUrl = process.env.EXPO_PUBLIC_API_URL;
const apiToken = process.env.EXPO_PUBLIC_key;
export const LiveMatches = async () => {
  return await fetch(apiUrl + "liveMatchList/" + apiToken)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.error(error));
};

/**
 * Asynchronous function to fetch the list of upcoming matches from the API.
 *
 * @return {Promise} A Promise that resolves to the JSON response from the API.
 */
export const RecentMatches = async () => {
  return await fetch(apiUrl + "upcomingMatches/" + apiToken)
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => console.error(error));
};

export const matchPlayerSquadsInfo = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  const response = await fetch(
    apiUrl + "squadsByMatchId/" + apiToken,
    requestOptions
  );

  return await response.json();
};

export const HomeMatch = async () => {
  return await fetch(apiUrl + "homeList/" + apiToken)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.error(error));
};

export const liveMatchById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "liveMatch/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const commentaryMatchById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "commentary/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const scorecardByMatchId = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "scorecardByMatchId/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const matchOddHistory = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "matchOddHistory/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const fetchmatchInfo = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("match_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "matchInfo/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const pointsTableBySeriesId = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("series_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "pointsTable/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};

export const seriesList = async () => {
  return await fetch(apiUrl + "seriesList/" + apiToken)
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => console.error(error));
};
export const newsList = async () => {
  return await fetch(apiUrl + "news/" + apiToken)
    .then((response) => response.json())
    .then((json) => json.data)
    .catch((error) => console.error(error));
};

export const fetchNewsDetailsById = async (id) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const formdata = new FormData();
  formdata.append("news_id", id);
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  return await fetch(apiUrl + "newsDetail/" + apiToken, requestOptions)
    .then((response) => response.json())
    .then((result) => result.data)
    .catch((error) => console.error(error));
};
