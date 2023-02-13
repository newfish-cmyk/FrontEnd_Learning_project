function getDate(baseUrl) {
    return function(route) {
        return function(callback) {
            fetch(`${baseUrl}${route}`)
                .then(response => response.json())
                .then(data => callback(data));
        }
    }
}

const getSocialMediaData = getDate('https://jsonplaceholder.typicode.com');

const getSocialMediaPost = getSocialMediaData('/posts');

getSocialMediaPost(post => {
    post.forEach(post => console.log(post.title));
});