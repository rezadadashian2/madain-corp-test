/** START: Global Variables **/
const API_URL = "https://filltext.com";
const TEST_FNAME = "reza";
const TEST_LNAME = "reza";
const CATEGORIES = [
    "category1",
    "category2",
    "category3",
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
    results.forEach(result => {

    });
}

pageInit();
/** End: Page Functions **/