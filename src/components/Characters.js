import uniqid from 'uniqid';

const characters = [
    {id: uniqid(), name: "Chef Chloe", img: require('../images/chef-chloe.png')  },
    {id: uniqid(), name: "Doctor David", img: require('../images/doctor-david.png')  },
    {id: uniqid(), name: "Doctor Diana", img: require('../images/doctor-diana.png')  },
    {id: uniqid(), name: "Farmer Finley", img: require('../images/farmer-finley.png')  },
    {id: uniqid(), name: "Farmer Frank", img: require('../images/farmer-frank.png')  },
    {id: uniqid(), name: "Grandma Gracie", img: require('../images/grandma-gracie.png')  },
    {id: uniqid(), name: "Hunter Henry", img: require('../images/hunter-henry.png')  },
    {id: uniqid(), name: "Lumberjack Larry", img: require('../images/lumberjack-larry.png')  },
    {id: uniqid(), name: "Scientist Serena", img: require('../images/scientist-serena.png')  },
    {id: uniqid(), name: "Shopper Shea", img: require('../images/shopper-shea.png')  },
    {id: uniqid(), name: "Superwoman Sara", img: require('../images/superwoman-sara.png')  },
    {id: uniqid(), name: "Superman Samir", img: require('../images/superman-samir.png')  },
]

const randomizeCharacters = () =>{
    const shuffeledCharacters = characters.sort((a,b) => 0.5 - Math.random());
    return shuffeledCharacters;
}

export default randomizeCharacters;