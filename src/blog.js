var blogs = [
    {
        title: "Blog 1",
        date: "Oct 15, 2025",
        description: "This is the first blog",
        image: "Flag_of_Canada.svg",
        imageAlt: "",
        slug: "index.html",
    },
    {
        title: "Blog 2",
        date: "Oct 15, 2025",
        description: "This is the second blog",
        image: "Flag_of_Canada.svg",
        imageAlt: "",
        slug: "index.html",
    },
];
var blogContainer = document.getElementById('blog-container');
blogs.forEach(function (blog) {
    var creatediv = document.createElement('div');
    var createh1 = document.createElement('h1');
    var createimg = document.createElement('div');
    var createp = document.createElement('p');
    creatediv.appendChild(createh1);
    creatediv.appendChild(createimg);
    creatediv.appendChild(createp);
    if (blogContainer) {
        blogContainer.appendChild(creatediv);
    }
});
