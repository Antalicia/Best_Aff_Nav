// 工具数据
const toolsData = {
    tracking: [
        {
            id: 'binom',
            name: "Binom",
            logoUrl: "https://bestaffilate.com/logo_sample/binom_logo.png",
            category: "追踪系统",
            description: "...",
            review: {
                score: 4.8,
                count: 892,
                summary: "Binom是目前市场上最快的追踪系统之一..."
            },
            url: "https://binom.org/",
            related: ['voluum', 'funnelflux']
        },
        // 其他工具...
    ]
    // 其他分类...
};

// 渲染小卡片（带评分）
function renderSmallCards() {
    Object.keys(toolsData).forEach(category => {
        const container = document.getElementById(`${category}-tools`);
        if (!container) return;

        toolsData[category].forEach(tool => {
            const card = document.createElement('a');
            card.className = 'small-card';
            card.href = `/tool/${tool.id}.html`;
            
            // 计算星数
            const stars = Math.round(tool.review.score);
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                starsHTML += `<i class="fas fa-star${i <= stars ? '' : '-half-alt'}"></i>`;
            }

            card.innerHTML = `
                <div class="small-card-content">
                    ${tool.logoUrl 
                        ? `<img src="${tool.logoUrl}" alt="${tool.name}" class="small-card-img">` 
                        : `<i class="${tool.icon || 'fas fa-cube'} small-card-img"></i>`}
                    <h3>${tool.name}</h3>
                    <div class="small-card-rating">
                        <span class="star-rating">${starsHTML}</span>
                        <span>${tool.review.score}</span>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    });
}

// 详情页渲染
function renderToolPage() {
    const toolId = window.location.pathname.split('/').pop().replace('.html', '');
    const tool = getToolById(toolId);
    
    if (!tool) {
        window.location.href = '/';
        return;
    }

    // 更新页面内容
    document.getElementById('page-title').textContent = `${tool.name} - BestAffiliate`;
    document.getElementById('tool-logo').src = tool.logoUrl;
    document.getElementById('tool-name').textContent = tool.name;
    document.getElementById('official-site').href = tool.url;

    // 渲染评分
    const starsContainer = document.querySelector('.tool-rating .stars');
    starsContainer.innerHTML = '';
    const fullStars = Math.floor(tool.review.score);
    const hasHalfStar = tool.review.score % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        if (i <= fullStars) {
            star.classList.add('filled');
            star.innerHTML = '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            star.innerHTML = '<i class="fas fa-star-half-alt"></i>';
        } else {
            star.innerHTML = '<i class="far fa-star"></i>';
        }
        starsContainer.appendChild(star);
    }

    document.getElementById('rating-score').textContent = tool.review.score;
    document.getElementById('rating-count').textContent = `(${tool.review.count.toLocaleString()} reviews)`;
    document.getElementById('tool-description-text').textContent = tool.description;
    document.getElementById('review-summary').innerHTML = `<p>${tool.review.summary}</p>`;

    // 渲染相关工具
    renderRelatedTools(tool.related);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        renderSmallCards();
    } else if (window.location.pathname.includes('/tool/')) {
        renderToolPage();
    }
});
