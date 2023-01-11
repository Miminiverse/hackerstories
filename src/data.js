const initialStories = [
    {
        name: 'React',
        objectID: 0,
        isComplete: false,
    },
    {
        name: 'Redux',
        objectID: 1,
        isComplete: false,
    },
    {
        name: 'Javascript',
        objectID: 2,
        isComplete: false,
    },
    {
        name: 'C++',
        objectID: 3,
        isComplete: false,
    },
    {
        name: 'Ruby',
        objectID: 4,
        isComplete: false,
    },
    {
        name: 'Redux3',
        objectID: 5,
        isComplete: false,
    },
    {
        name: 'hello',
        objectID: 6,
        isComplete: false,
    },
    {
        name: 'chatGPT',
        objectID: 7,
        isComplete: false,
    },
    {
        name: 'Engine',
        objectID: 8,
        isComplete: false,
    },
    {
        name: 'Reduxq',
        objectID: 9,
        isComplete: false,
    },
    {
        name: 'Next',
        objectID: 10,
        isComplete: false,
    },
    {
        name: 'API',
        objectID: 11,
        isComplete: false,
    },
];


const getAsyncStories = () =>
    new Promise((resolve) =>
        setTimeout(
            resolve({ data: { stories: initialStories } }), 1000))

export default getAsyncStories


// export const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

