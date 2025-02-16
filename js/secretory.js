const secretories = [
    {
        id: 1,
        name: 'Sagar Ravindra Harshe',
        title: 'Chief Executive Officer',
        image: 'https://t4.ftcdn.net/jpg/06/08/55/73/360_F_608557356_ELcD2pwQO9pduTRL30umabzgJoQn5fnd.jpg',
        description: 'Sagar Ravindra Harshe is the Chief Executive Officer of the company.',
        social : [
            {twitter: ['https://twitter.com/','bi bi-twitter']},
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
            {linkedin: ['https://linkedin.com/', 'bi bi-linkedin']}]
    },
    {
        id: 2,
        name: 'Soma Sukumar Haldar',
        title: 'Chief Financial Officer',
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/20/7442c27c-7a97-4bc7-a6ec-c2fdb6c99966.jpg',
        description: 'Soma Sukumar Haldar is the Chief Financial Officer of the company.',
        social : [
            {twitter: ['https://twitter.com/','bi bi-twitter']},
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
            {linkedin: ['https://linkedin.com/', 'bi bi-linkedin']}]
    },
    {
        id: 3,
        name: 'Shubham Kailash Dongare',
        title: 'Chief Operating Officer',
        image: 'https://media.istockphoto.com/id/1142003969/photo/close-up-profile-of-handsome-young-black-man-against-isolated-white-background.jpg?s=612x612&w=0&k=20&c=_bBDiZcxzTdEm_nV8ckM2IJkKUK-TIwXCeE1Dt2KEWA=',
        description: 'Shubham Kailash Dongare is the Chief Operating Officer of the company. ',
        social : [
            {twitter: ['https://twitter.com/','bi bi-twitter']},
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
            {linkedin: ['https://linkedin.com/', 'bi bi-linkedin']}]
    },
    {
        id: 5,
        name: 'Kajal Suresh Atala',
        title: 'Chief Human Resources Officer',
        image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        description: 'Shubham Kailash Dongare is the Chief Human Resources Officer of the company. ',
        social : [
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
        ]
    },
    {
        id: 6,
        name: 'Ashish Bandu Sidam',
        title: 'Chief Legal Officer',
        image: 'https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg',
        description: 'Shubham Kailash Dongare is the Chief Legal Officer of the company. ',
        social : [
            {twitter: ['https://twitter.com/','bi bi-twitter']},
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
            {linkedin: ['https://linkedin.com/', 'bi bi-linkedin']}]
    },
    {
        id: 6,
        name: 'Rohit Rajesh Rangdar',
        title: 'Chief Legal Officer',
        image: 'https://imgcdn.stablediffusionweb.com/2024/11/1/f9199f4e-2f29-4b5c-8b51-5a3633edb18b.jpg',
        description: 'Shubham Kailash Dongare is the Chief Legal Officer of the company.',
        social : [
            {twitter: ['https://twitter.com/','bi bi-twitter']},
            {facebook: ['https://facebook.com/','bi bi-facebook']},
            {instagram: ['https://instagram.com/', 'bi bi-instagram']},
            {linkedin: ['https://linkedin.com/', 'bi bi-linkedin']}]
    }
]

const members = document.getElementById('members')

secretories.forEach(secretory => {
    const socials = secretory.social
    members.innerHTML += `
    <div class="col">
          <div class="text-center d-flex flex-column justify-content-center align-items-center py-4 rounded-md px-2">
            <img
              src="${secretory.image}"
              alt="${secretory.name}"
              class="shadow-md d-block hover:shadow-xl transition-shadow duration-300"
              style="width: 200px;height:200px;border-radius:999px;object-fit:cover;"
            />
            <p class="text-md text-slate-700 mt-4 fw-bold">${secretory.name}</p>
            <p class="text-muted text-sm">${secretory.title}</p>
            <p class="text-slate-500 text-md d-none">${secretory.description}</p>
            <div class="d-flex gap-3 justify-content-center">`
            +`${socials.map(socail=>{
                const key = Object.keys(socail)[0]
                const value = socail[key]
                return `<a href="${value[0]}" target="_blank" class="text-muted duration-100 hover:scale-150 ease-in ${value[1]}"></a>`
            }).join(' ')}`+`
            </div>
          </div>
        </div>
    `
})