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
            description: 'A dating app, where your story begines.',
            image: 'https://play-lh.googleusercontent.com/QI5MQBa5rpIKgfafArmUUxsDznjUtmEB6obrsaNLdxO3B5SATCUZbTydJ22dFfnZziwU=w240-h480-rw',
            link: 'https://play.google.com/store/apps/details?id=com.delanki.mine'
        },
        {
            title: 'Love 2.0',
            description: 'A new way to tell someone, you like them.',
            image: 'https://play-lh.googleusercontent.com/pjB5Omm5cZG_qy69giFcnnM4neWZp1cmQk5lp5l89L3X9mIj5bscNXb5rGFOWe1Pv9VO=w240-h480',
            link: 'https://www.lovealarm.in/'
        },
        {
            title: 'indimation st.',
            description: 'Ind animation studio, new way of creation.',
            image: '/images/1.png',
            link: ''
        },
        {
            title: 'Delanki',
            description: 'Developer team, brand builders for better tommorrow.',
            image: '/images/yo 3.png',
            link: 'https://delanki.com/'
        }
    ]
}


// https://vercel.com/final/yashkumar/deployments

export const openLink = (link:any) => {
    if (!link) return;
    if (!link?.substring(0, 4)?.includes('http')) {
        link = 'https://' + link
    }
    return window.open(link, '_blank')
}