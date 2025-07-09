// 工具提交表单处理
document.getElementById('tool-submission-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以替换为您的表单处理逻辑
    alert('感谢提交！我们会尽快审核您的工具。');
    this.reset();
});

// 联系表单处理
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 这里可以替换为您的表单处理逻辑
    alert('您的留言已发送！我们会尽快回复您。');
    this.reset();
});
