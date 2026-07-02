// ============================================
// APP STATE
// ============================================
let currentTutorial = null;
let currentStep = 0;
let completedSteps = new Set();
let bookmarks = new Set();
let currentFilter = 'all';
let searchQuery = '';

// ============================================
// SPLASH SCREEN
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').classList.add('hide');
        document.getElementById('mainApp').style.display = 'flex';
        loadProgress();
        loadBookmarks();
        renderFeaturedTutorials();
        renderTutorials();
        updateStats();
        showToast('👋 Welcome to AI Guide!');
    }, 2800);
});

// ============================================
// SIDEBAR
// ============================================
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarClose = document.getElementById('sidebarClose');

function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);
sidebarClose.addEventListener('click', toggleSidebar);

// ============================================
// THEME SYSTEM
// ============================================
let isDark = true;

function toggleDarkMode() {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('darkModeToggle').checked = !isDark;
    document.getElementById('themeToggle').innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    showToast(isDark ? '🌙 Dark Mode' : '☀️ Light Mode');
    playSound('click');
}

document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
    const activeSidebar = document.querySelector(`.sidebar-nav .nav-item[data-page="${page}"]`);
    if (activeSidebar) activeSidebar.classList.add('active');

    if (window.innerWidth < 768) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.getElementById('mainContent').scrollTop = 0;
    
    if (page === 'bookmarks') renderBookmarks();
    if (page === 'progress') updateProgressPage();
}

// Bottom Nav
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) navigateTo(page);
        playSound('click');
    });
});

// Sidebar Nav
document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) navigateTo(page);
        playSound('click');
    });
});

// ============================================
// RENDER TUTORIALS
// ============================================
function renderTutorials() {
    const grid = document.getElementById('tutorialGrid');
    let filtered = getTutorials();
    
    if (currentFilter !== 'all') {
        filtered = filtered.filter(t => t.category === currentFilter);
    }
    
    if (searchQuery) {
        filtered = filtered.filter(t => 
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-search"></i>
                <h3>No tutorials found</h3>
                <p>Try adjusting your search or filter</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(t => `
        <div class="tutorial-card" onclick="openTutorial('${t.id}')">
            <div class="tutorial-card-image">
                <img src="${t.cover}" alt="${t.title}" loading="lazy" onerror="this.src='https://picsum.photos/400/200?random=1'" />
                <span class="tutorial-badge">${t.level}</span>
                <span class="tutorial-duration">${t.duration}</span>
            </div>
            <div class="tutorial-card-body">
                <div class="tutorial-card-header">
                    <span class="tutorial-icon">${t.icon}</span>
                    <span class="tutorial-category">${t.category}</span>
                </div>
                <h4>${t.title}</h4>
                <p>${t.description}</p>
                <div class="tutorial-card-footer">
                    <span><i class="fas fa-star"></i> ${t.rating}</span>
                    <span><i class="fas fa-users"></i> ${t.students}</span>
                    <span class="bookmark-icon" onclick="event.stopPropagation(); toggleBookmarkById('${t.id}')">
                        <i class="${bookmarks.has(t.id) ? 'fas' : 'far'} fa-bookmark"></i>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderFeaturedTutorials() {
    const grid = document.getElementById('featuredGrid');
    const featured = getTutorials().slice(0, 4);
    
    grid.innerHTML = featured.map(t => `
        <div class="featured-card" onclick="openTutorial('${t.id}')">
            <div class="featured-thumb" style="background-image: url('${t.cover}'); background-size: cover; background-position: center;">
                <span class="featured-badge">${t.level}</span>
                <span class="featured-duration">${t.duration}</span>
            </div>
            <div class="featured-body">
                <h4>${t.icon} ${t.title}</h4>
                <p>${t.description.substring(0, 40)}...</p>
                <div class="featured-meta">
                    <span><i class="fas fa-star"></i> ${t.rating}</span>
                    <span><i class="fas fa-users"></i> ${t.students}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// FILTER & SEARCH
// ============================================
function filterTutorials(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });
    renderTutorials();
    playSound('click');
}

function searchTutorials() {
    const input = document.getElementById('searchInput');
    searchQuery = input.value;
    renderTutorials();
}

function clearSearch() {
    document.getElementById('searchInput').value = '';
    searchQuery = '';
    renderTutorials();
    playSound('click');
}

// ============================================
// TUTORIAL DETAIL
// ============================================
function openTutorial(id) {
    const tutorial = getTutorialById(id);
    if (!tutorial) {
        showToast('⚠️ Tutorial not found');
        return;
    }
    
    currentTutorial = tutorial;
    currentStep = 0;
    navigateTo('detail');
    renderTutorialDetail();
    updateBookmarkButton();
    playSound('click');
}

function renderTutorialDetail() {
    const container = document.getElementById('tutorialDetail');
    const t = currentTutorial;
    const step = t.steps[currentStep];
    const totalSteps = t.steps.length;
    const isCompleted = completedSteps.has(t.id + '-' + currentStep);
    const isLastStep = currentStep === totalSteps - 1;
    const progress = ((currentStep + 1) / totalSteps) * 100;
    
    container.innerHTML = `
        <div class="detail-header-info">
            <h2>${t.icon} ${t.title}</h2>
            <div class="detail-meta">
                <span>📚 ${t.level}</span>
                <span>⏱️ ${t.duration}</span>
                <span>⭐ ${t.rating}</span>
            </div>
        </div>
        
        <div class="step-progress">
            <div class="step-progress-header">
                <span>Step ${currentStep + 1} of ${totalSteps}</span>
                <span>${Math.round(progress)}%</span>
            </div>
            <div class="step-progress-bar">
                <div class="step-progress-fill" style="width: ${progress}%"></div>
            </div>
        </div>
        
        <div class="step-content-detail">
            <h3>${step.title}</h3>
            <div class="step-body-content">
                ${step.content}
            </div>
            ${step.image ? `<img src="${step.image}" alt="Step illustration" class="step-image" loading="lazy" onerror="this.style.display='none'" />` : ''}
        </div>
        
        <div class="step-navigation">
            <button class="step-nav-btn prev" onclick="prevStep()" ${currentStep === 0 ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button class="step-nav-btn complete ${isCompleted ? 'completed' : ''}" onclick="markStepComplete()">
                <i class="${isCompleted ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
                ${isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
            <button class="step-nav-btn next" onclick="nextStep()" ${isLastStep ? 'disabled' : ''}>
                Next <i class="fas fa-arrow-right"></i>
            </button>
        </div>
        
        ${isLastStep && isCompleted ? `
            <div class="step-complete-message">
                <i class="fas fa-trophy"></i>
                <h3>🎉 Congratulations!</h3>
                <p>You've completed this tutorial! Keep learning and building amazing apps.</p>
                <button class="btn-primary" onclick="navigateTo('learn')">
                    <i class="fas fa-rocket"></i> More Tutorials
                </button>
                <button class="btn-secondary" onclick="shareAchievement('${t.id}')">
                    <i class="fas fa-share-alt"></i> Share Achievement
                </button>
            </div>
        ` : ''}
    `;
}

function nextStep() {
    if (currentStep < currentTutorial.steps.length - 1) {
        currentStep++;
        renderTutorialDetail();
        document.getElementById('mainContent').scrollTop = 0;
        playSound('click');
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        renderTutorialDetail();
        document.getElementById('mainContent').scrollTop = 0;
        playSound('click');
    }
}

function markStepComplete() {
    const key = currentTutorial.id + '-' + currentStep;
    if (completedSteps.has(key)) {
        completedSteps.delete(key);
        showToast('🔄
