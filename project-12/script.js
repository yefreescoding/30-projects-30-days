const jsonData = './data.json';

/**
 * The function fetchData is an asynchronous function that fetches data from a specified URL and
 * returns the data as a JSON object.
 * @param url - The `url` parameter is a string that represents the URL from which you want to fetch
 * data. It should be a valid URL that points to a server endpoint that returns JSON data.
 * @returns the data fetched from the server.
 */
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Could not get the data from the server');
    }
    const data = await response.json(); // Assigning response.json() to the correct variable
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}

const chartContainer = document.getElementById('charts-container');
const totalAmountContainer = document.querySelector('.chart__footer_result');

window.addEventListener('load', async () => {
  try {
    const data = await fetchData(jsonData); // Calling fetchData and waiting for it to complete

    /* The code is calculating the maximum and minimum expenses from the data fetched from the server. */
    const maxExpenses = Math.max(...data.map((chart) => chart.amount));
    const minExpenses = Math.min(...data.map((chart) => chart.amount));

    /* The code block is creating a new array called `normalizeData` by mapping over the `data` array.
   For each element in the `data` array, it calculates the `normalizeHeight` value based on the
   `amount` property of the element. */
    const normalizeData = data.map((chart) => {
      const normalizeHeight =
        ((chart.amount - minExpenses) / (maxExpenses - minExpenses)) * 8 + 1;
      return { ...chart, normalizeHeight };
    });

    // Get the total amount of expenses
    const totalAmountForWeek = data.reduce(
      (total, chart) => total + chart.amount,
      0
    );

    totalAmountContainer.innerHTML = `$${totalAmountForWeek}`;

    let displayData = normalizeData.map((chart) => {
      return `<div class="chart__stats_day" style="--util-chart-col-he: ${chart.normalizeHeight}rem">
              <span class="chart__stats_day-expenses">$${chart.amount}</span>
              <span class="chart__column"></span>
              <p>${chart.day}</p>
            </div>`;
    });
    displayData = displayData.join('');
    chartContainer.innerHTML = displayData;
  } catch (error) {
    console.error('Error in window load event:', error);
  }
});
