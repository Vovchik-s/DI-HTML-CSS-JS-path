const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];

const roboLibrary = document.getElementById("robo-liblrary");
const roboSearch = document.getElementById("robo-search");
let roboResult = [];

class Robot {
    constructor({ id, name, username, email, image }) {
        this.id = id,
            this.name = name,
            this.username = username,
            this.email = email,
            this.image = image
    }
    createHtml() {
        this.container = document.createElement("div"),
            this.innerContainer = document.createElement("div"),
            this.robotImage = document.createElement("img"),
            this.robotName = document.createElement("h3"),
            this.robotAddress = document.createElement("h5"),
            ////////////////////////////////////////////////
            this.container.classList.add("robot"),
            this.innerContainer.classList.add("robo-box"),
            this.robotImage.src = this.image,
            this.robotName.textContent = this.name,
            this.robotAddress.textContent = this.email,
            ///////////////////////////////////////////////
            this.innerContainer.appendChild(this.robotImage),
            this.innerContainer.appendChild(this.robotName),
            this.innerContainer.appendChild(this.robotAddress)
        this.container.appendChild(this.innerContainer),
            roboLibrary.append(this.container)
    }

}

const search = (e) => {
    const result = e.target.value;

    if (result === '') {
        roboLibrary.innerHTML = '';
        return;
    }
        const searchResults = robots.filter(robot => {
            return robot.name.toLowerCase().includes(result.toLowerCase());
        });
        // roboResult.push(searchResults);
        roboResult = searchResults;
        console.log(roboResult)

}

roboSearch.addEventListener('input', search)
roboSearch.addEventListener('input', renderRobots)


const robotList = robots.map(robot => {
    const newRobot = new Robot(robot);
    newRobot.createHtml()
    
})

function renderRobots () {
    roboLibrary.innerHTML = "";

    roboResult.forEach(e =>{
        let searchResult = new Robot(e);
        searchResult.createHtml()
        console.log(searchResult)
    })
}