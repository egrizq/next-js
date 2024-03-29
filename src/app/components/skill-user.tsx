import SkillLogo from '@/app/components/skill'

const data = [
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "python3",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" ,
            alt: "go",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" ,
            alt: "typescript",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            alt: "javascript",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            alt: "html5",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            alt: "css3",
            width: "65"
        },        
        {
            imgLink: "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
            alt: "boostrap",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
            alt: "mysql",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
            alt: "postgresql",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
            alt: "mongodb",
            width: "65"
        },
        {
            imgLink: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
            alt: "flask",
            width: "65"
        },
        {
            imgLink: "https://raw.githubusercontent.com/gin-gonic/logo/eecb3150aa7ce5a77b97fd834276b2b6958eaa9d/color.svg",
            alt: "gin-gonic",
            width: "55"
        },
        {
            imgLink: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png",
            alt: "express.js",
            width: "65"
        }, 
        {
            imgLink: "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
            alt: "pandas",
            width: "65"
        }, 
        {
            imgLink: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
            alt: "seaborn",
            width: "65"
        }, 
    ]

    const listSkill = () => {
        return (
            data.map((value, index) => 
                <SkillLogo imgLink={value.imgLink} alt={value.alt} width={value.width} key={index} />
            )
        )
    }

export {listSkill, data}