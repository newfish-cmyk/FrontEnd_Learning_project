const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
const reviewTotalDisplay = document.querySelector('#reviews')
let isOpen: boolean

const reviews : (
{
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
} |
{
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
    test: string;
}
)[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021',
        test: 'test'
    }
    // {
    //     name: 'Omar',
    //     stars: 4,
    //     loyaltyUser: true,
    //     date: '27-03-2021'
    // },
]


function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay!.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}


 showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

 // const you: {
//     userName: string;
//     isReturning: boolean;
//     age: number;
//     hobbies: (string | number)[];
//     contact: [number, string]
// } = {
//     userName: 'heheer',
//     isReturning: true,
//     age: 20,
//     hobbies: ['cooking', 'photography', 'badminton', 20],
//     contact: [88888888, 'xxxxxx@outlook.com']
// }

const ADMIN = 'admin'
const READ_ONLY = 'read-only'

enum Permission {
    ADMIN,
    READ_ONLY
}

const you = {
    userName: 'heheer',
    isReturning: true,
    permissions: ADMIN,
    age: 20,
    hobbies: ['cooking', 'photography', 'badminton', 20],
    contact: [88888888, 'xxxxxx@outlook.com']
}



function populateUser(isReturning: boolean, userName: string) {
    if (isReturning){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}

populateUser(you.isReturning, you.userName)


