/** START: Global Variables **/
const API_URL = "https://filltext.com";
const TEST_FNAME = "reza";
const TEST_LNAME = "dadashian";
const CATEGORIES = [
    "category 1",
    "category 2",
    "category 3",
];
/** END: Global Variables **/

/** START: Page Functions **/
// function to fetch the first set of data from API
async function fetchData() {
    const response = await HTTP.get(`${API_URL}/?rows=10&fname=${TEST_FNAME}&lname=${TEST_LNAME}&category=${JSON.stringify(CATEGORIES)}&pretty=true`);
    if (response && typeof response === 'object') {
        return response;
    }
    return null;
}

// initiate page function
async function pageInit() {
    const results = await fetchData();
    console.log(results);
    const results_wrapper = document.getElementById('results');
    results.forEach((result, index) => {
        const html_result = document.createElement("div");
        html_result.classList.add('card', 'd-flex');
        html_result.id = 'card-' + index;
        html_result.innerHTML = `<div class="thumbnail fw-700 uppercase"><span>${result.fname.substring(0, 1)}${result.lname.substring(0, 1)}</span></div>
                    <div class="info fw-600">
                        <span>${result.fname} ${result.lname}</span>
                    </div>
                    <div class="category-box">
                        <div class="category-item fw-300">${result.category}</div>
                    </div>`;
        results_wrapper.append(html_result);
    });
}

pageInit();
/** End: Page Functions **/