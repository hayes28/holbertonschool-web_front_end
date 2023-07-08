function createElement(data) {
    let p = document.createElement('p');
    p.textContent = data;
    document.body.appendChild(p);
}

function queryWikipedia(callback) {
    let xhr = new XMLHttpRequest();
    let url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let page = response.query.pages;
            let pageId = Object.keys(response.query.pages)[0];
            callback(page[pageId].extract);
        }
    };

    xhr.open('GET', url, true);
    xhr.send();
}

queryWikipedia(createElement);

// Output:
// Stack Overflow is a question and answer website for professional and enthusiast programmers. It is a privately held website, the flagship site of /the Stack Exchange Network, created in 2008 by Jeff Atwood and Joel Spolsky. It features questions and answers on a wide range of topics in computer programming. It was created to be a more open alternative to earlier question and answer sites such as Experts-Exchange. The name for the website was chosen by voting in April 2008 by readers of Coding Horror, Atwood's popular programming blog.