document.addEventListener('DOMContentLoaded', () => {
    // LMS Lesson Player Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const activeTab = document.getElementById(tabId);
            if (activeTab) {
                activeTab.classList.add('active');
            }
        });
    });

    // Mark as Complete Button Handler
    const completeBtn = document.getElementById('completeBtn');
    if (completeBtn) {
        completeBtn.addEventListener('click', () => {
            if (completeBtn.classList.contains('btn-secondary')) {
                completeBtn.classList.remove('btn-secondary');
                completeBtn.classList.add('btn-primary');
                completeBtn.textContent = 'Completed ✓';
            } else {
                completeBtn.classList.remove('btn-primary');
                completeBtn.classList.add('btn-secondary');
                completeBtn.textContent = 'Mark as Complete ✓';
            }
        });
    }
});
