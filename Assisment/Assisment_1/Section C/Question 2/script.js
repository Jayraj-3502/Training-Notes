console.log("Start");

setTimeout(() => {
  console.log("Timeout");
  Promise.resolve().then(() => {
    console.log("Promise Resolved");
    fetchData();
  });
}, 0);

async function fetchData() {
  try {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await result.json();
    console.log("Data Fetched:", data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("End");
  }
}
