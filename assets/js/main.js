// 通用功能（补充原有内容）
function initHeader() {
    // 高亮当前页面导航项
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.header-nav a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    
    // 其他通用初始化...
});
