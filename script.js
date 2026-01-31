const projectsData = [
    {
        title: "项目 1：个人网站",
        description: "这是我从零开始手写的第一个网站，完全符合 HTML5 标准，支持夜间模式。",
        link: "#" // 暂时先放个空链接
    },
    {
        title: "项目 2：自动化部署演示",
        description: "通过 GitHub 和 Netlify 实现的 CI/CD 自动化流水线。",
        link: "https://github.com"
    },
    {
        title: "项目 3：JS 渲染引擎",
        description: "使用原生 JavaScript 实现的数据驱动视图，从此告别手写 HTML。",
        link: "https://zh.stardewvalleywiki.com"
    }
];

const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
toggleButton.addEventListener('click', function(){
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')){
        toggleButton.innerText = '☀️ 开灯';
    } else {
        toggleButton.innerText = '🌙 关灯';
    }
});

function renderProjects() {
    const container = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const card = document.createElement('article');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" style="color:var(--text-highlight); text-decoration:none; font-size:0.9em;">查看详情 &rarr;</a>
        `;

        container.appendChild(card);
    });
}

renderProjects();