"use strict";

/** START: Global Scripts **/
// it is a pre-written class by myself which modified for this project.
// HTTP class is for calling the APIs based on fetch function which is the yet the best for API calling yet in ES6
class HTTP {
    static async get(url) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    // 'Content-Type': 'application/json',
                    // "X-Requested-With": "XMLHttpRequest"
                },
            })
            return await response.json();
        } catch (error) {
            console.log(error);
        }

    }
}
/** END: Global Scripts **/