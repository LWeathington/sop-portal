class SOPPortal {
    constructor() {
        this.sopsData = null;
        this.currentSopId = null;
        this.activeDept = 'all';

        // DOM Elements
        this.navMenu = document.getElementById('navMenu');
        this.deptTabs = document.getElementById('deptTabs');
        this.contentDiv = document.getElementById('content');
        this.emptyState = document.getElementById('emptyState');
        this.searchInput = document.getElementById('searchInput');

        this.init();
    }

    async init() {
        this.bindEvents();
        await this.loadIndex();
    }

    bindEvents() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
    }

    async loadIndex() {
        try {
            const response = await fetch('./sops/index.json');
            if (!response.ok) throw new Error('Failed to load SOP directory.');
            this.sopsData = await response.json();
            this.renderDeptTabs(this.sopsData);
            this.renderSidebar(this.sopsData);
        } catch (error) {
            console.error('Error loading index:', error);
            this.showError('Could not load SOP library. Please ensure sops/index.json exists.');
        }
    }

    // ── Department Tabs ──────────────────────────────────────────
    renderDeptTabs(data) {
        this.deptTabs.innerHTML = '';

        const allTab = document.createElement('button');
        allTab.className = 'dept-tab active';
        allTab.textContent = 'All';
        allTab.dataset.dept = 'all';
        allTab.onclick = () => this.setDept('all');
        this.deptTabs.appendChild(allTab);

        data.categories.forEach(cat => {
            const tab = document.createElement('button');
            tab.className = 'dept-tab';
            tab.textContent = cat.name.split(' ')[0]; // First word: "Dispatch", "System", "Freight", "HR", "Accounting"
            tab.title = cat.name;
            tab.dataset.dept = cat.name;
            tab.onclick = () => this.setDept(cat.name);
            this.deptTabs.appendChild(tab);
        });
    }

    setDept(dept) {
        this.activeDept = dept;
        this.deptTabs.querySelectorAll('.dept-tab').forEach(t => {
            t.classList.toggle('active', t.dataset.dept === dept);
        });
        this.searchInput.value = '';
        this.renderSidebar(this.sopsData, '');
    }

    // ── Sidebar ──────────────────────────────────────────────────
    renderSidebar(data, filterQuery = '') {
        this.navMenu.innerHTML = '';
        const q = filterQuery.toLowerCase();

        const categoriesToShow = this.activeDept === 'all'
            ? data.categories
            : data.categories.filter(cat => cat.name === this.activeDept);

        categoriesToShow.forEach(category => {
            const filteredItems = category.items.filter(item =>
                item.title.toLowerCase().includes(q) ||
                (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)))
            );

            if (filteredItems.length > 0) {
                const categoryEl = document.createElement('div');
                categoryEl.className = 'nav-category';

                const titleEl = document.createElement('h4');
                titleEl.className = 'nav-category-title';
                titleEl.textContent = category.name;
                categoryEl.appendChild(titleEl);

                filteredItems.forEach(item => {
                    const linkEl = document.createElement('a');
                    linkEl.className = 'nav-item' + (this.currentSopId === item.id ? ' active' : '');
                    linkEl.textContent = item.title;
                    linkEl.onclick = (e) => {
                        e.preventDefault();
                        this.showSopCard(item, category.name);
                    };
                    categoryEl.appendChild(linkEl);
                });

                this.navMenu.appendChild(categoryEl);
            }
        });
    }

    // ── SOP Preview Card ─────────────────────────────────────────
    showSopCard(item, categoryName) {
        this.currentSopId = item.id;
        this.renderSidebar(this.sopsData, this.searchInput.value);

        this.emptyState.classList.add('hidden');

        const tagsHtml = item.tags
            ? item.tags.map(tag => `<span class="sop-tag">${tag}</span>`).join('')
            : '';

        this.contentDiv.innerHTML = `
            <div class="sop-card">
                <div class="sop-card-header">
                    <div class="sop-card-category">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                        ${categoryName}
                    </div>
                    <h1 class="sop-card-title">${item.title}</h1>
                </div>

                <div class="sop-card-body">
                    ${tagsHtml ? `<div class="sop-tags">${tagsHtml}</div>` : ''}

                    <div class="sop-card-desc">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="8"></line><line x1="12" y1="12" x2="12" y2="16"></line></svg>
                        This document lives in Google Docs. Any edits made there are immediately live — no rebuild required.
                    </div>

                    <a class="sop-open-btn ${!item.url ? 'sop-open-btn--disabled' : ''}" ${item.url ? `href="${item.url}" target="_blank" rel="noopener"` : ''}>
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                        ${item.url ? 'Open in Google Docs' : 'Link not yet added'}
                        ${item.url ? `<svg class="open-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>` : ''}
                    </a>
                    <p class="sop-card-hint">${item.url ? 'Opens in a new tab' : 'Ask your manager for the document link'}</p>
                </div>
            </div>
        `;

        document.querySelector('.main-content').scrollTop = 0;
    }

    handleSearch(query) {
        if (!this.sopsData) return;
        this.renderSidebar(this.sopsData, query);
    }

    showError(message) {
        this.emptyState.classList.remove('hidden');
        this.contentDiv.innerHTML = '';
        this.emptyState.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <h3 style="color: #EF4444">Error</h3>
            <p>${message}</p>
        `;
    }
}

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    window.portal = new SOPPortal();
});
