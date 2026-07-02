// ============================================
// SPLASH SCREEN
// ============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splashScreen').classList.add('hide');
        document.getElementById('mainApp').style.display = 'flex';
        showToast('👋 Welcome to AI App Guide!');
        loadProgress();
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
const themeToggle = document.getElementById('themeToggle');
let isDark = true;

themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    showToast(isDark ? '🌙 Dark Mode' : '☀️ Light Mode');
});

// ============================================
// NAVIGATION
// ============================================
function navigateTo(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const targetPage = document.getElementById('page-' + page);
    if (targetPage) targetPage.classList.add('active');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-btn[data-page="${page}"]`);
    if (activeNav) activeNav.classList.add('active');

    document.querySelectorAll('.sidebar-nav .nav-item').forEach(b => b.classList.remove('active'));
    const activeSidebar = document.querySelector(`.sidebar-nav .nav-item[data-page="${page}"]`);
    if (activeSidebar) activeSidebar.classList.add('active');

    if (window.innerWidth < 768) {
        sidebar.classList.remove('open');
        sidebarOverlay.classList.remove('active');
    }

    document.getElementById('mainContent').scrollTop = 0;
}

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const page = btn.dataset.page;
        if (page) navigateTo(page);
    });
});

document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const page = item.dataset.page;
        if (page) navigateTo(page);
    });
});

// ============================================
// STEP SYSTEM
// ============================================
let completedSteps = new Set();

function toggleStep(btn) {
    const content = btn.closest('.step-card').querySelector('.step-content');
    content.classList.toggle('open');
    btn.querySelector('i').classList.toggle('fa-chevron-down');
    btn.querySelector('i').classList.toggle('fa-chevron-up');
}

function completeStep(btn, stepNum) {
    const card = btn.closest('.step-card');
    
    if (completedSteps.has(stepNum)) {
        completedSteps.delete(stepNum);
        card.classList.remove('completed');
        btn.classList.remove('completed');
        btn.innerHTML = '<i class="fas fa-check"></i> Mark as Completed';
        showToast('🔄 Step unmarked');
    } else {
        completedSteps.add(stepNum);
        card.classList.add('completed');
        btn.classList.add('completed');
        btn.innerHTML = '<i class="fas fa-check"></i> ✅ Completed';
        showToast('🎉 Step ' + stepNum + ' completed!');
        playSound('success');
    }
    
    saveProgress();
    updateProgress();
}

function updateProgress() {
    const total = 8;
    const completed = completedSteps.size;
    const percent = Math.round((completed / total) * 100);
    
    document.getElementById('progressFill').style.width = percent + '%';
    document.getElementById('progressText').textContent = percent + '%';
    document.getElementById('completedSteps').textContent = completed;
    document.getElementById('progressPercent').textContent = percent + '%';
    document.getElementById('completedBadge').textContent = completed;
    document.getElementById('stepCount').textContent = completed;
    
    if (percent === 100) {
        document.getElementById('congrats').style.display = 'block';
        startHeartRain(50);
    } else {
        document.getElementById('congrats').style.display = 'none';
    }
}

// ============================================
// PROGRESS STORAGE
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
            steps.forEach(step => {
                completedSteps.add(step);
                const card = document.querySelector(`.step-card[data-step="${step}"]`);
                if (card) {
                    card.classList.add('completed');
                    const btn = card.querySelector('.step-complete');
                    if (btn) {
                        btn.classList.add('completed');
                        btn.innerHTML = '<i class="fas fa-check"></i> ✅ Completed';
                    }
                }
            });
            updateProgress();
        }
    } catch (e) {}
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        completedSteps.clear();
        document.querySelectorAll('.step-card').forEach(card => {
            card.classList.remove('completed');
            const btn = card.querySelector('.step-complete');
            if (btn) {
                btn.classList.remove('completed');
                btn.innerHTML = '<i class="fas fa-check"></i> Mark as Completed';
            }
        });
        saveProgress();
        updateProgress();
        showToast('🔄 Progress reset');
    }
}

// ============================================
// METHODS
// ============================================
function showMethodDetail(method) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    const methods = {
        coding: {
            title: '💻 Coding Method',
            content: `
                <h4>Build from scratch with code</h4>
                <p>This method gives you complete control over your app.</p>
                <h4>What you need:</h4>
                <ul>
                    <li>HTML, CSS, JavaScript knowledge</li>
                    <li>A code editor (VS Code recommended)</li>
                    <li>Basic understanding of web technologies</li>
                    <li>Patience and practice!</li>
                </ul>
                <h4>Steps:</h4>
                <ul>
                    <li>1. Write your code line by line</li>
                    <li>2. Test frequently in your browser</li>
                    <li>3. Use Git for version control</li>
                    <li>4. Deploy on platforms like Vercel</li>
                </ul>
                <div style="margin-top:12px;padding:12px;background:rgba(255,45,85,0.1);border-radius:8px;">
                    <strong>💡 Best for:</strong> Developers who want full control
                </div>
            `
        },
        nocode: {
            title: '🛠️ No-Code Method',
            content: `
                <h4>Build without coding</h4>
                <p>Perfect for beginners or rapid prototyping.</p>
                <h4>Tools you can use:</h4>
                <ul>
                    <li>Bubble - Complex web apps</li>
                    <li>Glide - Mobile apps from spreadsheets</li>
                    <li>Adalo - Mobile app builder</li>
                    <li>Webflow - Professional websites</li>
                </ul>
                <h4>Steps:</h4>
                <ul>
                    <li>1. Choose a no-code platform</li>
                    <li>2. Drag and drop components</li>
                    <li>3. Configure workflows and logic</li>
                    <li>4. Publish your app</li>
                </ul>
                <div style="margin-top:12px;padding:12px;background:rgba(45,85,255,0.1);border-radius:8px;">
                    <strong>💡 Best for:</strong> Non-developers, quick MVPs
                </div>
            `
        },
        ai: {
            title: '🤖 AI-Powered Method',
            content: `
                <h4>Use AI to build</h4>
                <p>Leverage AI to generate code and assist development.</p>
                <h4>AI Tools:</h4>
                <ul>
                    <li>GitHub Copilot - AI pair programmer</li>
                    <li>ChatGPT - Get code suggestions</li>
                    <li>Claude AI - Code generation</li>
                    <li>Bolt.new - AI-powered development</li>
                </ul>
                <h4>How it works:</h4>
                <ul>
                    <li>1. Describe what you want to build</li>
                    <li>2. AI generates code for you</li>
                    <li>3. Review and modify the code</li>
                    <li>4. Test and deploy</li>
                </ul>
                <div style="margin-top:12px;padding:12px;background:rgba(255,45,85,0.1);border-radius:8px;">
                    <strong>💡 Best for:</strong> Developers who want to be more productive
                </div>
            `
        },
        hybrid: {
            title: '🔀 Hybrid Method',
            content: `
                <h4>Combine different approaches</h4>
                <p>Mix and match methods for the best results.</p>
                <h4>How to combine:</h4>
                <ul>
                    <li>1. Use no-code for rapid prototyping</li>
                    <li>2. Add custom code for advanced features</li>
                    <li>3. Use AI for code optimization</li>
                    <li>4. Deploy using traditional methods</li>
                </ul>
                <h4>Example workflow:</h4>
                <ul>
                    <li>1. Design with Figma (Design tool)</li>
                    <li>2. Build with no-code for basic structure</li>
                    <li>3. Add custom code for unique features</li>
                    <li>4. Use AI for testing and debugging</li>
                </ul>
                <div style="margin-top:12px;padding:12px;background:rgba(45,85,255,0.1);border-radius:8px;">
                    <strong>💡 Best for:</strong> Teams with diverse skills
                </div>
            `
        }
    };
    
    const data = methods[method];
    if (data) {
        title.textContent = data.title;
        body.innerHTML = data.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});

// ============================================
// TOOLS
// ============================================
function showToolInfo(tool) {
    const modal = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    const tools = {
        design: {
            title: '🎨 Design Tools',
            content: `
                <h4>Tools for designing your app</h4>
                <ul>
                    <li><strong>Figma</strong> - Industry standard for UI design</li>
                    <li><strong>Canva</strong> - Easy design tool for non-designers</li>
                    <li><strong>Adobe XD</strong> - Professional design tool</li>
                    <li><strong>Sketch</strong> - Mac-based design tool</li>
                </ul>
                <h4>Learning resources:</h4>
                <ul>
                    <li>YouTube - Free tutorials for all tools</li>
                    <li>Figma Academy - Official learning platform</li>
                    <li>Design courses on Coursera/Udemy</li>
                </ul>
            `
        },
        development: {
            title: '💻 Development Tools',
            content: `
                <h4>Essential development tools</h4>
                <ul>
                    <li><strong>VS Code</strong> - Most popular code editor</li>
                    <li><strong>Git</strong> - Version control system</li>
                    <li><strong>Chrome DevTools</strong> - Testing and debugging</li>
                    <li><strong>Postman</strong> - API testing</li>
                </ul>
                <h4>Setup guide:</h4>
                <ul>
                    <li>1. Install VS Code with extensions</li>
                    <li>2. Setup Git and GitHub</li>
                    <li>3. Learn basic terminal commands</li>
                    <li>4. Start building!</li>
                </ul>
            `
        },
        ai: {
            title: '🤖 AI Tools',
            content: `
                <h4>AI-powered development tools</h4>
                <ul>
                    <li><strong>OpenAI API</strong> - GPT-4, DALL-E, and more</li>
                    <li><strong>Hugging Face</strong> - Free AI models</li>
                    <li><strong>GitHub Copilot</strong> - AI pair programming</li>
                    <li><strong>LangChain</strong> - Build AI applications</li>
                </ul>
                <h4>Getting started:</h4>
                <ul>
                    <li>1. Get an API key from OpenAI</li>
                    <li>2. Try the playground to test prompts</li>
                    <li>3. Integrate AI into your app</li>
                    <li>4. Optimize for cost and performance</li>
                </ul>
            `
        },
        deployment: {
            title: '🚀 Deployment Tools',
            content: `
                <h4>Tools to deploy your app</h4>
                <ul>
                    <li><strong>Vercel</strong> - Best for web apps (Recommended)</li>
                    <li><strong>Netlify</strong> - Easy hosting for static sites</li>
                    <li><strong>GitHub Pages</strong> - Free hosting</li>
                    <li><strong>Google Play Store</strong> - Android deployment</li>
                    <li><strong>Apple App Store</strong> - iOS deployment</li>
                </ul>
                <h4>Deployment steps:</h4>
                <ul>
                    <li>1. Connect GitHub to Vercel</li>
                    <li>2. Configure build settings</li>
                    <li>3. Deploy with one click</li>
                    <li>4. Setup custom domain</li>
                </ul>
            `
        },
        testing: {
            title: '🧪 Testing Tools',
            content: `
                <h4>Tools to test your app</h4>
                <ul>
                    <li><strong>Jest</strong> - JavaScript testing framework</li>
                    <li><strong>Lighthouse</strong> - Performance testing</li>
                    <li><strong>BrowserStack</strong> - Cross-browser testing</li>
                    <li><strong>Cypress</strong> - End-to-end testing</li>
                </ul>
                <h4>Testing checklist:</h4>
                <ul>
                    <li>1. Test on multiple devices</li>
                    <li>2. Test different browsers</li>
                    <li>3. Check for accessibility</li>
                    <li>4. Measure performance</li>
                </ul>
            `
        },
        marketing: {
            title: '📈 Marketing Tools',
            content: `
                <h4>Tools to market your app</h4>
                <ul>
                    <li><strong>Google Analytics</strong> - Track users</li>
                    <li><strong>Hotjar</strong> - User behavior analysis</li>
                    <li><strong>Mailchimp</strong> - Email marketing</li>
                    <li><strong>Canva</strong> - Create marketing materials</li>
                </ul>
                <h4>Marketing strategies:</h4>
                <ul>
                    <li>1. Build a landing page</li>
                    <li>2. Use social media promotion</li>
                    <li>3. Create video tutorials</li>
                    <li>4. Collect and share testimonials</li>
                </ul>
            `
        }
    };
    
    const data = tools[tool];
    if (data) {
        title.textContent = data.title;
        body.innerHTML = data.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ============================================
// SHARE ACHIEVEMENT
// ============================================
function shareAchievement() {
    const text = '🎉 I just completed the "AI Se App Kaise Banaye" course! Now I know how to build apps with AI. Join me on this journey! 🚀 #AIBuilder #AppDevelopment';
    
    if (navigator.share) {
        navigator.share({
            title: 'My Achievement',
            text: text,
        }).catch(() => {});
    } else {
        navigator.clipboard.writeText(text).then(() => {
            showToast('📋 Achievement copied! Share it everywhere!');
        }).catch(() => {
            prompt('Copy this to share:', text);
        });
    }
}

// ============================================
// HEART RAIN
// ============================================
function startHeartRain(count = 30) {
    const emojis = ['❤️', '🎉', '⭐', '🌟', '🎊', '💪', '🚀', '🏆'];
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart-rain';
            heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (20 + Math.random() * 30) + 'px';
            heart.style.animationDuration = (3 + Math.random() * 4) + 's';
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 7000);
        }, i * 100);
    }
}

// ============================================
// TOAST
// ============================================
function showToast(message, duration = 2500) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('show'), duration);
}

// ============================================
// SOUND SYSTEM
// ============================================
function playSound(type) {
    try {
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
        if (document.getElementById('modalOverlay').classList.contains('active')) closeModal();
    }
});

// ============================================
// AUTO INIT
// ============================================
console.log('🤖 AI Se App Kaise Banaye - Guide v3.0');
console.log('📚 Helping you learn app development!');
