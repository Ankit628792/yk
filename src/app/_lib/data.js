export const data = {
    home: {

    },
    about: {
        title: `Hi, I'm Yash`,
        description: [
            `Hi! I'm a Logo Designer previous worked at Love Alarm 2.0 and Mine dating app.`,
            `I believe design, like music and films, can be very inspiring and heart touching. I enjoy challenging my creativity to build cool things!`
        ],
    },

    contact: {
        title: 'Got a Project?',
        description: `Let's talk shop`,
        email: 'ymaurya.workshop@gmail.com',
        instagramURL: ''
    },

    work: [
        {
            title: 'Mine Dating',
            description: 'hey, how are you buddy ? Hope u r well',
            image: '',
            link: ''
        }
    ]
}


export const openLink = (link) => {
    if (!link?.substring(0, 4)?.includes('http')) {
        link = 'https://' + link
    }
    return window.open(link, '_blank')
}