export async function loadHtml(id, file){

    try{
        const response = await fetch(file);
        if(!response.ok) throw new Error(response.status + ": " + response.statusText);
        const html = await response.text();
        document.getElementById(id).innerHTML = html;
        return Promise.resolve();
    }
    catch (e){
        console.error(e);
        document.body.innerHTML = "Error: " + e;
        return Promise.reject(e);
    }
}


// for skills
export function loadSkills(){
    const skills = [
        { name: "Flutter", icon: "./assets/icons/flutter.png" },
        { name: "Dart", icon: "./assets/icons/dart.png" },
        { name: "React Native", icon: "./assets/icons/react-native.png" },
        { name: "Javascript", icon: "./assets/icons/javascript.png" },
        { name: "Spring Boot", icon: "./assets/icons/spring-boot.png" },
        { name: "Java", icon: "./assets/icons/java.png" },
        { name: "PostgreSQL", icon: "./assets/icons/postgresql.png" },
        { name: "Firebase", icon: "./assets/icons/firebase.png" },
        { name: "GitHub", icon: "./assets/icons/github.png" },
    ];

    const techSkillsContainer = document.querySelector(".tech-skills");
    if (!techSkillsContainer) {
        console.error("Tech Skills container not found");
        return;
    }

    skills.forEach((skill) => {
        const skillDiv = document.createElement("div");
        skillDiv.classList.add("skill-div");

        const skillImage = document.createElement("img");
        skillImage.classList.add("skill-image");
        skillImage.src = skill.icon;
        skillImage.alt = skill.name;

        const skillName = document.createElement("p");
        skillName.classList.add("skill-name");
        skillName.textContent = skill.name;

        skillDiv.appendChild(skillImage);
        skillDiv.appendChild(skillName);

        techSkillsContainer.appendChild(skillDiv);
    });
};


export function loadProjects() {
    const projects = [
        {
            name: 'eNirman',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.theyetilabs.enirman&pcampaignid=web_share',
            appStoreLink: 'https://apps.apple.com/np/app/enirman/id6475091217',
            image: './assets/images/eNirman.png',
        },
        {
            name: 'eNirman Site Engineer',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.theyetilabs.enirman.site.engineer&pcampaignid=web_share',
            appStoreLink: 'https://apps.apple.com/np/app/enirman-engineer/id6654917999',
            image: './assets/images/engineer.png',
        },
        {
            name: 'eNirman Vendor',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.theYetiLabs.enirmanVendorApp&pcampaignid=web_share',
            appStoreLink: 'https://apps.apple.com/np/app/enirman-vendor/id6670314168',
            image: './assets/images/vendor.png',
        },
        {
            name: 'Mero Padhai',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.meropadhai.clinchtech&pcampaignid=web_share',
            appStoreLink: '',
            image: './assets/images/meropadhai.png',
        },
        {
            name: 'Nepal Edu',
            playStoreLink: 'https://play.google.com/store/apps/details?id=com.yetilabs.nepaledu&pcampaignid=web_share',
            appStoreLink: 'https://apps.apple.com/np/app/nepal-edu/id6472643598',
            image: './assets/images/nepaledu.png',
        },
  
    ];

    const projectGrid = document.querySelector('.projects-grid');

    if (!projectGrid) {
        console.error('Projects grid not found');
        return;
    }

    projects.forEach((project) => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const image = document.createElement('img');
        image.classList.add('project-image');
        image.src = project.image;
        image.alt = project.name;

        const projectName = document.createElement('h3');
        projectName.classList.add('project-name');
        projectName.textContent = project.name;

        const buttonDiv = document.createElement('div');
        buttonDiv.classList.add('store-buttons');

        const playStoreButton = document.createElement('a');
        playStoreButton.href = project.playStoreLink;
        playStoreButton.textContent = 'Play Store';
        playStoreButton.target = '_blank';

        const appStoreButton = document.createElement('a');
        appStoreButton.href = project.appStoreLink;
        appStoreButton.textContent = 'App Store';
        appStoreButton.target = '_blank';

        buttonDiv.appendChild(playStoreButton);
        buttonDiv.appendChild(appStoreButton);

        projectCard.appendChild(image);
        projectCard.appendChild(projectName);
        projectCard.appendChild(buttonDiv);

        projectGrid.appendChild(projectCard);
    });
}
