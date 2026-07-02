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
}

document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    
    const target = document.getElementById('page-' + page);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-btn.premium').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn.premium[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
    const activeSidebar = document.querySelector(`.sidebar-nav .nav-item[data-page="${page}"]`);
    if (activeSidebar) activeSidebar.classList.add('active');

    if (window.innerWidth < 768) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    document.getElementById('mainContent').scrollTop = 0;
    
    if (page === 'bookmarks') renderBookmarks();
    if (page === 'progress') updateProgressPage();
}

// Bottom Nav
document.querySelectorAll('.nav-btn.premium').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) navigateTo(page);
    });
});

// Sidebar Nav
document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) navigateTo(page);
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
        <div class="tutorial-card premium" onclick="openTutorial('${t.id}')">
            <div class="tutorial-card-image">
                <img src="${t.cover}" alt="${t.title}" loading="lazy" />
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
            <div class="featured-thumb" style="background-image: url('${t.cover}')">
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
}

function renderTutorialDetail() {
    const container = document.getElementById('tutorialDetail');
    const t = currentTutorial;
    const step = t.steps[currentStep];
    const totalSteps = t.steps.length;
    const isCompleted = completedSteps.has(t.id + '-' + currentStep);
    const isLastStep = currentStep === totalSteps - 1;
    
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
            <span>Step ${currentStep + 1} of ${totalSteps}</span>
            <div class="step-progress-bar">
                <div class="step-progress-fill" style="width: ${((currentStep + 1) / totalSteps) * 100}%"></div>
            </div>
        </div>
        
        <div class="step-content-detail">
            <h3>${step.title}</h3>
            <div class="step-body-content">
                ${step.content}
            </div>
            ${step.image ? `<img src="${step.image}" alt="Step illustration" class="step-image" loading="lazy" />` : ''}
        </div>
        
        <div class="step-navigation">
            <button class="step-nav-btn prev" onclick="prevStep()" ${currentStep === 0 ? 'disabled' : ''}>
                <i class="fas fa-arrow-left"></i> Previous
            </button>
            <button class="step-nav-btn complete" onclick="markStepComplete()">
                <i class="${isCompleted ? 'fas fa-check-circle' : 'far fa-circle'}"></i>
                ${isCompleted ? 'Completed' : 'Mark Complete'}
            </button>
            <button class="step-nav-btn next" onclick="nextStep()" ${isLastStep ? 'disabled' : ''}>
                Next <i class="fas fa-arrow-right"></i>
            </button>
        </div>
        
        ${isLastStep ? `
            <div class="step-complete-message">
                <i class="fas fa-trophy"></i>
                <h3>🎉 Congratulations!</h3>
                <p>You've completed this tutorial! Keep learning and building amazing apps.</p>
                <button class="btn-primary" onclick="navigateTo('learn')">
                    <i class="fas fa-rocket"></i> More Tutorials
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
        showToast('🔄 Step unmarked');
    } else {
        completedSteps.add(key);
        showToast('🎉 Step completed!');
        playSound('success');
    }
    saveProgress();
    updateStats();
    renderTutorialDetail();
}

// ============================================
// BOOKMARKS
// ============================================
function toggleBookmark() {
    if (!currentTutorial) return;
    const id = currentTutorial.id;
    toggleBookmarkById(id);
}

function toggleBookmarkById(id) {
    if (bookmarks.has(id)) {
        bookmarks.delete(id);
        showToast('📑 Bookmark removed');
    } else {
        bookmarks.add(id);
        showToast('📑 Bookmarked!');
        playSound('click');
    }
    saveBookmarks();
    updateBookmarkButton();
    renderTutorials();
}

function updateBookmarkButton() {
    const btn = document.getElementById('bookmarkBtn');
    if (!currentTutorial) return;
    const isBookmarked = bookmarks.has(currentTutorial.id);
    btn.innerHTML = `<i class="${isBookmarked ? 'fas' : 'far'} fa-bookmark"></i>`;
}

function renderBookmarks() {
    const grid = document.getElementById('bookmarksGrid');
    const bookmarkedTutorials = getTutorials().filter(t => bookmarks.has(t.id));
    
    if (bookmarkedTutorials.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-bookmark"></i>
                <h3>No Bookmarks</h3>
                <p>Save tutorials you want to learn later</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = bookmarkedTutorials.map(t => `
        <div class="bookmark-card" onclick="openTutorial('${t.id}')">
            <span class="bookmark-icon">${t.icon}</span>
            <div class="bookmark-info">
                <h4>${t.title}</h4>
                <p>${t.description.substring(0, 50)}...</p>
                <span class="bookmark-level">${t.level}</span>
            </div>
            <button class="remove-bookmark" onclick="event.stopPropagation(); toggleBookmarkById('${t.id}')">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join('');
}

// ============================================
// PROGRESS
// ============================================
function updateStats() {
    const total = getTutorials().reduce((acc, t) => acc + t.steps.length, 0);
    const completed = completedSteps.size;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('completedTutorials').textContent = completed;
    document.getElementById('totalTutorials').textContent = getTutorials().length;
    document.getElementById('progressPercent').textContent = percent + '%';
    
    // Sidebar progress
    document.getElementById('sidebarProgress').style.width = percent + '%';
}

function updateProgressPage() {
    const total = getTutorials().reduce((acc, t) => acc + t.steps.length, 0);
    const completed = completedSteps.size;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('statCompleted').textContent = completed;
    document.getElementById('statTotal').textContent = total;
    document.getElementById('progressCircleText').textContent = percent + '%';
    document.getElementById('statStreak').textContent = '🔥 ' + Math.floor(Math.random() * 10 + 1);
    
    // Update circle
    const circle = document.getElementById('progressCircle');
    const circumference = 2 * Math.PI * 50;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
    
    // Completed list
    const list = document.getElementById('completedList');
    const completedItems = Array.from(completedSteps);
    
    if (completedItems.length === 0) {
        list.innerHTML = `
            <div class="empty-state small">
                <i class="fas fa-check-circle"></i>
                <p>No completed steps yet. Start learning!</p>
            </div>
        `;
        return;
    }
    
    list.innerHTML = completedItems.map(key => {
        const [tutorialId, stepIndex] = key.split('-');
        const tutorial = getTutorialById(tutorialId);
        if (!tutorial) return '';
        const step = tutorial.steps[parseInt(stepIndex)];
        return `
            <div class="completed-item" onclick="openTutorial('${tutorialId}')">
                <span class="completed-icon">✅</span>
                <div>
                    <strong>${tutorial.icon} ${tutorial.title}</strong>
                    <p>${step.title}</p>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================
// STORAGE
// ============================================
function saveProgress() {
    try {
        localStorage.setItem('completedSteps', JSON.stringify([...completedSteps]));
    } catch (e) {}
}

function loadProgress() {
    try {
        const saved = localStorage.getItem('completedSteps');
        if (saved) {
            const steps = JSON.parse(saved);
            steps.forEach(step => completedSteps.add(step));
            updateStats();
        }
    } catch (e) {}
}

function saveBookmarks() {
    try {
        localStorage.setItem('bookmarks', JSON.stringify([...bookmarks]));
    } catch (e) {}
}

function loadBookmarks() {
    try {
        const saved = localStorage.getItem('bookmarks');
        if (saved) {
            const items = JSON.parse(saved);
            items.forEach(id => bookmarks.add(id));
        }
    } catch (e) {}
}

function resetAllProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        completedSteps.clear();
        saveProgress();
        updateStats();
        updateProgressPage();
        showToast('🔄 All progress reset');
    }
}

// ============================================
// SETTINGS
// ============================================
function clearCache() {
    localStorage.clear();
    completedSteps.clear();
    bookmarks.clear();
    updateStats();
    showToast('🗑️ Cache cleared!');
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

function playSound(type) {
    try {
        const soundToggle = document.getElementById('soundToggle');
        if (soundToggle && !soundToggle.checked) return;
        
        const audio = new Audio();
        if (type === 'click') {
            audio.src = 'data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoAAACBhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqF';
        } else if (type === 'success') {
            audio.src = 'data:audio/wav;base64,UklGRlQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoAAACBhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqFhYqF';
        }
        audio.volume = 0.3;
        audio.play().catch(() => {});
    } catch (e) {}
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebar.classList.contains('open')) toggleSidebar();
    }
    if (e.key === 'ArrowRight' && document.getElementById('page-detail').classList.contains('active')) {
        nextStep();
    }
    if (e.key === 'ArrowLeft' && document.getElementById('page-detail').classList.contains('active')) {
        prevStep();
    }
});

// ============================================
// AUTO INIT
// ============================================
console.log('🤖 AI Se App Kaise Banaye - v4.0');
console.log('📚 Learn app development from Basic to Advanced!');
console.log('💡 Made with ❤️ by AI Builder Team');
