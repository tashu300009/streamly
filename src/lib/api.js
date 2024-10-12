async function makeAxiosCall({ url, method, data = {} }) {
  try {
    return await fetch(`https://api.themoviedb.org/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json", // Set default headers
        "Cache-Control": "no-store",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjU5NjRkZTZhMGE4NDVjYTRkMDNhOTM2NzE2ZjRiZSIsInN1YiI6IjY2MzNjMWM3OTlkNWMzMDEyMzU2ZDI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aTgBazyBeZ-eKHBsYdsHlFZtpvmlluQxs9TCKeqx3ck", // Example: Set authorization header
      },
    }).then((res) => res.json());
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
export default makeAxiosCall;
