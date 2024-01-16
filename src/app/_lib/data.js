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
        instagramURL: 'https://www.instagram.com/logodesigner.gfx/'
    },

    work: [
        {
            title: 'Mine Dating',
            description: 'hey, how are you buddy ? Hope u r well',
            image: 'https://play-lh.googleusercontent.com/QI5MQBa5rpIKgfafArmUUxsDznjUtmEB6obrsaNLdxO3B5SATCUZbTydJ22dFfnZziwU=w240-h480-rw',
            link: 'https://play.google.com/store/apps/details?id=com.delanki.mine'
        },
        {
            title: 'Love Alarm 2.0',
            description: 'hey, how are you buddy ? Hope u r well',
            image: 'https://www.lovealarm.in/_next/image?url=%2Fandroid-chrome-512x512.png&w=96&q=75',
            link: 'https://www.lovealarm.in/'
        }
    ]
}


export const openLink = (link) => {
    if (!link) return;
    if (!link?.substring(0, 4)?.includes('http')) {
        link = 'https://' + link
    }
    return window.open(link, '_blank')
}