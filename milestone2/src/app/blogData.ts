export interface Blog {
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

export default blogs;