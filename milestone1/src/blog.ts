type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

const blogs: Blog[] = [
    {
        title: "Blog 1",
        date: "Oct 15, 2025",
        description: "This is the first blog",
        image: "Flag_of_Canada.svg",
        imageAlt: "",
        slug: "blog1.html",
    },
    {
        title: "Blog 2",
        date: "Oct 15, 2025",
        description: "This is the second blog",
        image: "Flag_of_Canada.svg",
        imageAlt: "",
        slug: "blog2.html",
    },
];

const blogContainer = document.getElementById('blog-container');

blogs.forEach((blog) => {
    const creatediv = document.createElement('div')
    const createh1 = document.createElement('h1')
    const createimg = document.createElement('div')
    const createp = document.createElement('p')

    creatediv.appendChild(createh1)
    creatediv.appendChild(createimg)
    creatediv.appendChild(createp)

    if (blogContainer) {
        blogContainer.appendChild(creatediv)
    }
});