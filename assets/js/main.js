/** START: Global Variables **/
const API_URL = "https://filltext.com";
const TEST_FNAME = prompt("Please enter your first name", "Reza");
const TEST_LNAME = prompt("Please enter your last name", "Dadashian");
const CATEGORIES = prompt("Please enter a list of categories separated by a comma (,)", "Category 1, Category 2, Category 3");

/** END: Global Variables **/

/** START: Page Functions **/
// function to fetch the first set of data from API
async function fetchData() {
    let categories = document.querySelectorAll('#category-filtration .filtering-item.selected');
    if (categories.length <= 0) {
        categories = document.querySelectorAll('#category-filtration .filtering-item');
    }
    const categories_array = [];
    categories.forEach(category => {
        categories_array.push(category.textContent);
    });
    const response = await HTTP.get(`${API_URL}/?rows=10&fname=${TEST_FNAME}&lname=${TEST_LNAME}&category=${JSON.stringify(categories_array)}&pretty=true`);
    if (response && typeof response === 'object') {
        return response;
    }
    return null;
}

// filtering function
function filtering() {
    const all_filtering_items = document.querySelectorAll('#category-filtration .filtering-item');
    all_filtering_items.forEach(filteringItem => {
        filteringItem.addEventListener('click', () => {
            filteringItem.classList.toggle('selected');
            renderList();
        });
    });
}

function renderCategories() {
    const categories_wrapper = document.getElementById('category-filtration');
    categories_wrapper.innerHTML = '';
    CATEGORIES.split(',').forEach((category) => {
        const html_result = document.createElement("li");
        html_result.classList.add('filtering-item');
        html_result.innerText = category.trim();
        categories_wrapper.append(html_result);
    });
}

// render results list on page
async function renderList() {
    const results = await fetchData();
    console.log(results);
    const results_wrapper = document.getElementById('results');
    results_wrapper.innerHTML = '';
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

// initiate page function
async function pageInit() {
    renderCategories();
    // first initiation
    renderList();
    filtering();
}


pageInit();
/** End: Page Functions **/