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
async function fetchData() {
    const response = await HTTP.get(`${API_URL}/?rows=10&fname=${TEST_FNAME}&lname=${TEST_LNAME}&category=${CATEGORIES}&pretty=true`);
    if (response && typeof response === 'object') {
        return response;
    }
    return null;
}

async function pageInit() {
    console.log(await fetchData());
}

pageInit();
/** End: Page Functions **/