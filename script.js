// ============================================
// SPLASH SCREEN
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').classList.add('hide');
        document.getElementById('mainApp').style.display = 'flex';
        updateTime();
        setInterval(updateTime, 1000);
        showToast('👋 Welcome to AI Builder!');
    }, 2800);
});

function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent =
        now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0');
}

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
const themeToggle = document.getElementById('themeToggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    showToast(isDark ? '🌙 Dark Mode' : '☀️ Light Mode');
    playSound('click');
});

// ============================================
// NAVIGATION SYSTEM
// ============================================
function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Show target page
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update nav buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    // Update sidebar nav items
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
    const activeSidebar = document.querySelector(`.sidebar-nav .nav-item[data-page="${page}"]`);
    if (activeSidebar) activeSidebar.classList.add('active');

    // Close sidebar on mobile
    if (window.innerWidth < 768) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Scroll to top
    document.getElementById('mainContent').scrollTop = 0;
}

// Bottom nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) {
            playSound('click');
            navigateTo(page);
        }
    });
});

// Sidebar nav items
document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) {
            playSound('click');
            navigateTo(page);
        }
    });
});

// ============================================
// CATEGORY TABS
// ============================================
document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.cat;
        document.querySelectorAll('.tutorial-card').forEach(card => {
            if (category === 'all' || card.dataset.cat === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ============================================
// SEARCH TUTORIALS
// ============================================
document.getElementById('searchTutorials')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    document.querySelectorAll('.tutorial-card').forEach(card => {
        const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
        const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// ============================================
// SOUND SYSTEM
// ============================================
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
// TOAST NOTIFICATION
// ============================================
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================
// PROFILE MENU
// ============================================
document.querySelectorAll('.profile-menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.profile-menu-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
        showToast('🔍 Navigating to ' + this.querySelector('span')?.textContent || 'section');
        playSound('click');
    });
});

// ============================================
// SETTINGS TOGGLES
// ============================================
document.getElementById('darkModeToggle')?.addEventListener('change', function() {
    isDark = !this.checked;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    document.getElementById('themeToggle').innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    showToast(isDark ? '🌙 Dark Mode' : '☀️ Light Mode');
});

// ============================================
// TUTORIAL CLICK
// ============================================
document.querySelectorAll('.tutorial-item, .tutorial-card').forEach(item => {
    item.addEventListener('click', function(e) {
        if (e.target.closest('.play-btn') || e.target.closest('.start-btn')) return;
        showToast('📺 Opening tutorial...');
        playSound('click');
    });
});

document.querySelectorAll('.play-btn, .start-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        showToast('🎬 Playing tutorial...');
        playSound('success');
    });
});

// ============================================
// TOOL CARD CLICK
// ============================================
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', function() {
        const name = this.querySelector('h4')?.textContent || 'Tool';
        showToast(`🛠️ Opening ${name}...`);
        playSound('click');
    });
});

// ============================================
// COMMUNITY POST ACTIONS
// ============================================
document.querySelectorAll('.post-actions button').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const icon = this.querySelector('i');
        if (icon?.classList.contains('fa-heart')) {
            const count = parseInt(this.textContent) || 0;
            this.innerHTML = `<i class="fas fa-heart" style="color: #FF2D55;"></i> ${count + 1}`;
            showToast('❤️ Liked!');
        } else {
            showToast('💬 Action taken!');
        }
        playSound('click');
    });
});

// ============================================
// NOTIFICATION CLICK
// ============================================
document.querySelector('.notification-btn')?.addEventListener('click', () => {
    showToast('🔔 You have 3 notifications');
    playSound('click');
});

// ============================================
// USER AVATAR CLICK
// ============================================
document.getElementById('userAvatar')?.addEventListener('click', () => {
    navigateTo('profile');
    playSound('click');
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (sidebar.classList.contains('open')) {
            toggleSidebar();
        }
    }
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchTutorials')?.focus();
    }
});

// ============================================
// AUTO INIT
// ============================================
console.log('🤖 AI Se App Kaise Banaye v2.0 Loaded!');
console.log('📚 Made with ❤️ by AI Builder Team');
