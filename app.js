// YouTube UI Application Engine
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

// Comprehensive Database of Realistic YouTube Videos
const VIDEO_DATABASE = [
    {
        id: 'yt-1',
        title: 'Introduction to Programming and Computer Science - Full Course',
        channel: 'freeCodeCamp.org',
        channelAvatar: 'https://yt3.ggpht.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s88-c-k-c0x00ffffff-no-rj',
        subscribers: '12.4M subscribers',
        verified: true,
        views: '11M views',
        viewsRaw: 11420950,
        time: '6 years ago',
        duration: '1:59:12',
        durationSec: 7152,
        category: 'Computer programming',
        thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: '249K',
        likesRaw: 249205,
        description: `In this comprehensive course, you will learn the fundamental basics of computer programming and computer science. The concepts you learn apply to any and all programming languages and will build a rock-solid foundation for software engineering.

⭐️ Course Contents ⭐️
⌨️ (0:00) Introduction to Programming & Algorithms
⌨️ (12:45) Variables, Memory & Data Types
⌨️ (28:10) Control Flow, Conditionals & Loops
⌨️ (45:20) Functions, Scope & Recursion
⌨️ (1:05:30) Object-Oriented Programming (OOP)
⌨️ (1:28:15) Data Structures & Complexity (Big-O)
⌨️ (1:45:00) How Compilers and Interpreters Work`,
        comments: [
            {
                id: 'c1',
                author: 'Alex Chen',
                avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
                time: '2 months ago',
                text: 'This video literally changed the trajectory of my entire career. Watched this 3 years ago with zero knowledge, now working as a backend engineer!',
                likes: '14K'
            },
            {
                id: 'c2',
                author: 'Sarah Jenkins',
                avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80',
                time: '3 weeks ago',
                text: 'freeCodeCamp continues to be the greatest educational resource on the internet. Thank you Quincy and the team!',
                likes: '3.2K'
            },
            {
                id: 'c3',
                author: 'DevMaster99',
                avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&q=80',
                time: '5 days ago',
                text: 'The explanation on memory allocation at 12:45 is cleaner than my entire college semester course.',
                likes: '890'
            }
        ]
    },
    {
        id: 'yt-2',
        title: 'JavaScript in 100 Seconds',
        channel: 'Fireship',
        channelAvatar: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&q=80',
        subscribers: '3.1M subscribers',
        verified: true,
        views: '5.2M views',
        viewsRaw: 5210300,
        time: '2 years ago',
        duration: '2:24',
        durationSec: 144,
        category: 'JavaScript',
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: '310K',
        likesRaw: 310500,
        description: `What is JavaScript? Learn the basics of the world's most popular programming language in 100 seconds. 

#javascript #programming #fireship`,
        comments: [
            {
                id: 'c4',
                author: 'CodexCoder',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                time: '1 year ago',
                text: 'Jeff Delaney can explain quantum computing in 90 seconds and still have 10 seconds left for a meme.',
                likes: '28K'
            }
        ]
    },
    {
        id: 'yt-3',
        title: 'Building a Full Stack AI Application with Gemini 2.0 & Next.js 15',
        channel: 'Code With Antonio',
        channelAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80',
        subscribers: '412K subscribers',
        verified: true,
        views: '348K views',
        viewsRaw: 348000,
        time: '3 days ago',
        duration: '4:15:30',
        durationSec: 15330,
        category: 'Artificial Intelligence',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: '19K',
        likesRaw: 19400,
        description: `Learn how to build and deploy a production-ready Full Stack AI Application using Next.js 15, React 19, Tailwind CSS, TypeScript, and Google Gemini 2.0 Flash models!`,
        comments: [
            {
                id: 'c5',
                author: 'Liam Vance',
                avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&q=80',
                time: '1 day ago',
                text: 'The architecture diagram at the start made everything so clear. High quality production as always!',
                likes: '512'
            }
        ]
    },
    {
        id: 'yt-4',
        title: 'Apple M4 Ultra Chip Architecture: Deep Dive Analysis',
        channel: 'Marques Brownlee',
        channelAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80',
        subscribers: '18.9M subscribers',
        verified: true,
        views: '4.8M views',
        viewsRaw: 4800000,
        time: '1 week ago',
        duration: '16:42',
        durationSec: 1002,
        category: 'Gadgets',
        thumbnail: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        likes: '280K',
        likesRaw: 280000,
        description: `M4 Ultra is here. Here is everything you need to know about thermal efficiency, unified memory bandwidth, and real-world silicon performance.`,
        comments: []
    },
    {
        id: 'yt-5',
        title: 'Why The Universe Might Actually Be A Neural Network',
        channel: 'Veritasium',
        channelAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80',
        subscribers: '16.5M subscribers',
        verified: true,
        views: '9.4M views',
        viewsRaw: 9400000,
        time: '4 months ago',
        duration: '26:18',
        durationSec: 1578,
        category: 'Science',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
        likes: '620K',
        likesRaw: 620000,
        description: `Could quantum mechanics and gravity be explained if space and time themselves emerge from an underlying neural learning matrix? A deep look into physical emergence.`,
        comments: []
    },
    {
        id: 'yt-6',
        title: 'lofi hip hop radio 📚 - beats to relax/study to [LIVE 24/7]',
        channel: 'Lofi Girl',
        channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
        subscribers: '14.2M subscribers',
        verified: true,
        views: '45K watching now',
        viewsRaw: 45000,
        time: 'Started streaming 3 days ago',
        duration: 'LIVE',
        isLive: true,
        durationSec: 0,
        category: 'Music',
        thumbnail: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: '8.4M',
        likesRaw: 8400000,
        description: `Welcome to the Lofi Girl stream! Peaceful lofi hip hop beats to help you study, work, write code, or fall asleep.`,
        comments: []
    },
    {
        id: 'yt-7',
        title: 'React 19 Is Finally Here: 5 Game Changing Features',
        channel: 'Web Dev Simplified',
        channelAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&q=80',
        subscribers: '1.6M subscribers',
        verified: true,
        views: '612K views',
        viewsRaw: 612000,
        time: '2 weeks ago',
        duration: '14:05',
        durationSec: 845,
        category: 'React',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
        likes: '34K',
        likesRaw: 34200,
        description: `React 19 brings Actions, useOptimistic, useActionState, use() hook, and Server Components built-in without boilerplate. Here is how each feature works with code samples.`,
        comments: []
    },
    {
        id: 'yt-8',
        title: 'GTA 6 Gameplay Mechanics: Physics & AI Leaks Examined',
        channel: 'IGN',
        channelAvatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=80&q=80',
        subscribers: '17.8M subscribers',
        verified: true,
        views: '3.9M views',
        viewsRaw: 3900000,
        time: '5 days ago',
        duration: '11:32',
        durationSec: 692,
        category: 'Gaming',
        thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4',
        likes: '142K',
        likesRaw: 142000,
        description: `We break down the technical innovations in fluid dynamics, ragdoll physics, and crowd AI spotted in recent Rockstar developments.`,
        comments: []
    },
    {
        id: 'yt-9',
        title: 'Python for Beginners - Complete Crash Course 2026',
        channel: 'Programming with Mosh',
        channelAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80',
        subscribers: '4.1M subscribers',
        verified: true,
        views: '14M views',
        viewsRaw: 14000000,
        time: '1 year ago',
        duration: '1:00:15',
        durationSec: 3615,
        category: 'Python',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        likes: '780K',
        likesRaw: 780000,
        description: `Python tutorial for beginners. Learn Python programming in 1 hour with hands-on exercises, projects, and interview questions.`,
        comments: []
    },
    {
        id: 'yt-10',
        title: 'Sam Altman & Dario Amodei on Superintelligence & Reasoning',
        channel: 'Lex Fridman',
        channelAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=80&q=80',
        subscribers: '4.5M subscribers',
        verified: true,
        views: '2.7M views',
        viewsRaw: 2700000,
        time: '3 weeks ago',
        duration: '3:45:10',
        durationSec: 13510,
        category: 'Podcasts',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        likes: '120K',
        likesRaw: 120000,
        description: `Conversation about frontier AI models, scaling laws, synthetic data generation, reasoning benchmarks, and the future of human-AI collaboration.`,
        comments: []
    },
    {
        id: 'yt-11',
        title: 'Master Modern Web Development: Full Course HTML, CSS & JS',
        channel: 'Traversy Media',
        channelAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
        subscribers: '2.2M subscribers',
        verified: true,
        views: '1.9M views',
        viewsRaw: 1900000,
        time: '8 months ago',
        duration: '2:15:40',
        durationSec: 8140,
        category: 'Web Development',
        thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        likes: '95K',
        likesRaw: 95000,
        description: `Learn how the web works from scratch. We build multiple responsive websites and explain layout, DOM manipulation, APIs, and modern tooling.`,
        comments: []
    },
    {
        id: 'yt-12',
        title: 'Building an Operating System in Rust from Scratch',
        channel: 'Low Level JavaScript',
        channelAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
        subscribers: '320K subscribers',
        verified: false,
        views: '410K views',
        viewsRaw: 410000,
        time: '6 months ago',
        duration: '52:18',
        durationSec: 3138,
        category: 'Computer programming',
        thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=720&q=80',
        videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
        likes: '38K',
        likesRaw: 38000,
        description: `Writing a x86-64 microkernel in Rust. Booting with UEFI, paging, memory management, and interrupt handling.`,
        comments: []
    }
];

// YouTube Shorts Database
const SHORTS_DATABASE = [
    {
        id: 's1',
        title: 'Career in Coding 🤔👨‍💻 Advice for beginners',
        views: '4.3M views',
        thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=700&fit=crop&q=80'
    },
    {
        id: 's2',
        title: 'Top 5 Programming Languages in 2026 🔥',
        views: '7.2M views',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=700&fit=crop&q=80'
    },
    {
        id: 's3',
        title: 'CSS Tricks You Wish You Knew Earlier 💡',
        views: '2.9M views',
        thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&h=700&fit=crop&q=80'
    },
    {
        id: 's4',
        title: 'Fastest Sorting Algorithm Visualized ⚡️',
        views: '9.8M views',
        thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=700&fit=crop&q=80'
    },
    {
        id: 's5',
        title: 'Never Code Alone: AI Pair Programming 🤖',
        views: '3.1M views',
        thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=700&fit=crop&q=80'
    }
];

// App State
const state = {
    currentCategory: 'All',
    searchQuery: '',
    activeVideo: VIDEO_DATABASE[0],
    isWatchMode: false,
    isTheaterMode: false,
    isPlaying: false,
    isMuted: false,
    volume: 1,
    liked: false,
    disliked: false,
    subscribed: false,
    sidebarCollapsed: false,
    theme: localStorage.getItem('yt_theme') || 'dark'
};

// Application Initializer
function initApp() {
    setupTheme();
    renderVideoFeed(VIDEO_DATABASE);
    renderShorts(SHORTS_DATABASE);
    setupEventListeners();
    setupPlayerEngine();
    setupChipsCarousel();
    setupSearchAutocomplete();
}

// -------------------------------------------------------------
// THEME MANAGEMENT
// -------------------------------------------------------------
function setupTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    if (state.theme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        document.getElementById('currentThemeLabel').textContent = 'Light';
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        document.getElementById('currentThemeLabel').textContent = 'Dark';
    }
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('yt_theme', state.theme);
    setupTheme();
    showToast(`Switched to ${state.theme} theme`);
}

// -------------------------------------------------------------
// VIDEO FEED & SHORTS RENDERING
// -------------------------------------------------------------
function renderVideoFeed(videos) {
    const grid = document.getElementById('videoGrid');
    const secondaryGrid = document.getElementById('videoGridSecondary');
    grid.innerHTML = '';
    secondaryGrid.innerHTML = '';

    if (videos.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <svg viewBox="0 0 24 24" class="yt-svg" style="width: 64px; height: 64px; margin: 0 auto 16px; opacity: 0.5;"><path d="M20.87 20.17l-5.59-5.59A7.95 7.95 0 0 0 17 10a8 8 0 1 0-8 8 7.95 7.95 0 0 0 4.58-1.72l5.59 5.59.7-.7zM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>
                <h3 style="font-size: 18px; margin-bottom: 6px;">No results found</h3>
                <p style="color: var(--yt-spec-text-secondary); font-size: 14px;">Try different keywords or remove search filters</p>
            </div>
        `;
        return;
    }

    // Split first 8 videos to main grid, rest to secondary grid below Shorts
    const firstBatch = videos.slice(0, 8);
    const secondBatch = videos.slice(8);

    firstBatch.forEach(video => {
        grid.appendChild(createVideoCard(video));
    });

    secondBatch.forEach(video => {
        secondaryGrid.appendChild(createVideoCard(video));
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'video-card';
    card.dataset.id = video.id;

    const durationHtml = video.isLive 
        ? `<div class="video-badge-live">LIVE</div>`
        : `<span class="video-duration">${video.duration}</span>`;

    const verifiedHtml = video.verified
        ? `<svg viewBox="0 0 24 24" class="verified-badge-svg" title="Verified"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1 1.4-1.4 2.8 2.7 7.8-7.7 1.4 1.4-9.2 9.1z" fill="currentColor"/></svg>`
        : '';

    card.innerHTML = `
        <div class="video-thumbnail">
            <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
            ${durationHtml}
            <div class="quick-actions-overlay">
                <button class="quick-action-btn" title="Watch later" onclick="event.stopPropagation(); showToast('Saved to Watch later')">
                    <svg viewBox="0 0 24 24" class="yt-svg small"><path d="M14.97 16.95L10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/></svg>
                </button>
                <button class="quick-action-btn" title="Add to queue" onclick="event.stopPropagation(); showToast('Added to queue')">
                    <svg viewBox="0 0 24 24" class="yt-svg small"><path d="M21 16h-7v-1h7v1zm0-5H11v-1h10v1zm0-5H11V5h10v1zm-9 11H3v-1h9v1zm-3-5H3v-1h6v1zm0-5H3V5h6v1z"/></svg>
                </button>
            </div>
        </div>
        <div class="video-meta-row">
            <a href="#" class="channel-avatar-link" onclick="event.stopPropagation();">
                <img src="${video.channelAvatar}" alt="${video.channel}" class="channel-card-avatar" onerror="this.src='https://picsum.photos/seed/avatar/80/80'">
            </a>
            <div class="video-text-meta">
                <h3 class="video-title" title="${video.title}">${video.title}</h3>
                <div class="channel-name-row">
                    <span>${video.channel}</span>
                    ${verifiedHtml}
                </div>
                <div class="video-stats-row">
                    <span>${video.views}</span>
                    <span>•</span>
                    <span>${video.time}</span>
                </div>
            </div>
        </div>
    `;

    card.addEventListener('click', () => {
        openWatchView(video);
    });

    return card;
}

function renderShorts(shorts) {
    const grid = document.getElementById('shortsGrid');
    grid.innerHTML = '';
    shorts.forEach(short => {
        const item = document.createElement('div');
        item.className = 'short-card';
        item.innerHTML = `
            <div class="short-thumbnail">
                <img src="${short.thumbnail}" alt="${short.title}">
            </div>
            <h4 class="short-title">${short.title}</h4>
            <span class="short-views">${short.views}</span>
        `;
        item.addEventListener('click', () => {
            showToast(`Playing Short: ${short.title}`);
        });
        grid.appendChild(item);
    });
}

// -------------------------------------------------------------
// WATCH VIEW & VIDEO PLAYER
// -------------------------------------------------------------
function openWatchView(video) {
    state.activeVideo = video;
    state.isWatchMode = true;

    // Switch views
    document.getElementById('browseView').style.display = 'none';
    document.getElementById('watchView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Populate Details
    document.getElementById('watchTitle').textContent = video.title;
    document.getElementById('watchChannelName').textContent = video.channel;
    document.getElementById('watchChannelAvatar').src = video.channelAvatar;
    document.getElementById('watchSubCount').textContent = video.subscribers;
    document.getElementById('likeCount').textContent = video.likes;
    document.getElementById('descViews').textContent = video.views;
    document.getElementById('descDate').textContent = video.time;
    document.getElementById('descText').innerHTML = video.description.replace(/\n/g, '<br>');
    document.getElementById('shareLinkInput').value = `https://youtu.be/${video.id}`;

    // Load Video Source
    const player = document.getElementById('mainVideoPlayer');
    player.src = video.videoUrl;
    player.load();
    player.play().then(() => {
        state.isPlaying = true;
        updatePlayPauseIcons();
    }).catch(e => {
        console.log('Autoplay prevented:', e);
    });

    // Reset interactions
    state.liked = false;
    state.disliked = false;
    state.subscribed = false;
    updateLikeButtons();
    updateSubscribeButton();

    // Render Comments
    renderComments(video.comments);

    // Render Related Videos
    renderRelatedVideos(video.id);
}

function closeWatchView() {
    state.isWatchMode = false;
    const player = document.getElementById('mainVideoPlayer');
    player.pause();
    state.isPlaying = false;
    updatePlayPauseIcons();

    document.getElementById('watchView').style.display = 'none';
    document.getElementById('browseView').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderRelatedVideos(currentVideoId) {
    const list = document.getElementById('relatedVideosList');
    list.innerHTML = '';

    const related = VIDEO_DATABASE.filter(v => v.id !== currentVideoId);
    related.forEach(video => {
        const item = document.createElement('div');
        item.className = 'related-video-card';
        item.innerHTML = `
            <div class="related-thumb-wrapper">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="related-details">
                <h4 class="related-title">${video.title}</h4>
                <div class="related-channel">${video.channel}</div>
                <div class="related-meta">${video.views} • ${video.time}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            openWatchView(video);
        });
        list.appendChild(item);
    });
}

function renderComments(comments) {
    const list = document.getElementById('commentsList');
    list.innerHTML = '';
    const commentsArray = comments && comments.length > 0 ? comments : [
        {
            id: 'c-default',
            author: 'CodeEnthusiast',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
            time: '2 hours ago',
            text: 'Amazing explanation! Best visual tutorial on this topic I have seen.',
            likes: '45'
        }
    ];

    document.getElementById('commentsCountLabel').textContent = `${commentsArray.length + 120} Comments`;

    commentsArray.forEach(c => {
        list.appendChild(createCommentElement(c));
    });
}

function createCommentElement(comment) {
    const el = document.createElement('div');
    el.className = 'comment-row';
    el.innerHTML = `
        <img src="${comment.avatar}" alt="${comment.author}" class="comment-avatar" onerror="this.src='https://picsum.photos/seed/comment/80/80'">
        <div class="comment-content">
            <div class="comment-author-row">
                <span class="comment-author">@${comment.author.toLowerCase().replace(/\s+/g, '')}</span>
                <span class="comment-time">${comment.time}</span>
            </div>
            <div class="comment-body">${comment.text}</div>
            <div class="comment-actions-bar">
                <button class="comment-vote-btn like">
                    <svg viewBox="0 0 24 24" class="yt-svg small"><path d="M18.77 11h-4.23l1.52-4.94C16.38 5.03 15.54 4 14.38 4c-.58 0-1.14.24-1.52.65L7 11H3v10h4l1 1h11c1.48 0 2.73-1.08 2.96-2.54l1.24-8.02A3.003 3.003 0 0 0 18.77 11zM7 20H4v-8h3v8z"/></svg>
                    <span>${comment.likes || '1'}</span>
                </button>
                <button class="comment-vote-btn dislike">
                    <svg viewBox="0 0 24 24" class="yt-svg small"><path d="M17 4h-1l-1-1H4c-1.48 0-2.73 1.08-2.96 2.54L-.2 13.56C-.33 14.38-.07 15.2.5 15.82.97 16.33 1.63 16.63 2.33 16.63h4.23l-1.52 4.94c-.26 1.03.58 2.06 1.74 2.06.58 0 1.14-.24 1.52-.65L14 16.63h3V4z" transform="scale(1, -1) translate(0, -24)"/></svg>
                </button>
                <button class="comment-reply-btn">Reply</button>
            </div>
        </div>
    `;

    // Like counter toggle on comment
    const likeBtn = el.querySelector('.comment-vote-btn.like');
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('liked');
        const span = likeBtn.querySelector('span');
        let count = parseInt(span.textContent) || 0;
        span.textContent = likeBtn.classList.contains('liked') ? count + 1 : count - 1;
    });

    return el;
}

// -------------------------------------------------------------
// PLAYER ENGINE & CONTROLS
// -------------------------------------------------------------
function setupPlayerEngine() {
    const video = document.getElementById('mainVideoPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const volumeBtn = document.getElementById('volumeBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const scrubberContainer = document.getElementById('scrubberContainer');
    const scrubberPlayed = document.getElementById('scrubberPlayed');
    const scrubberHandle = document.getElementById('scrubberHandle');
    const scrubberBuffer = document.getElementById('scrubberBuffer');
    const scrubberHover = document.getElementById('scrubberHoverPreview');
    const currentTimeLabel = document.getElementById('currentTimeLabel');
    const durationLabel = document.getElementById('durationLabel');
    const theaterBtn = document.getElementById('theaterBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    // Play / Pause Toggle
    playPauseBtn.addEventListener('click', togglePlayPause);
    video.addEventListener('click', togglePlayPause);

    function togglePlayPause() {
        if (video.paused) {
            video.play();
            state.isPlaying = true;
        } else {
            video.pause();
            state.isPlaying = false;
        }
        updatePlayPauseIcons();
    }

    // Time Update & Scrubber Progress
    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        const percent = (video.currentTime / video.duration) * 100;
        scrubberPlayed.style.width = `${percent}%`;
        scrubberHandle.style.left = `${percent}%`;
        currentTimeLabel.textContent = formatTime(video.currentTime);
        durationLabel.textContent = formatTime(video.duration);
    });

    video.addEventListener('loadedmetadata', () => {
        durationLabel.textContent = formatTime(video.duration);
    });

    video.addEventListener('progress', () => {
        if (video.buffered.length > 0 && video.duration) {
            const bufferEnd = video.buffered.end(video.buffered.length - 1);
            const bufferPercent = (bufferEnd / video.duration) * 100;
            scrubberBuffer.style.width = `${bufferPercent}%`;
        }
    });

    // Seeking on Scrubber Click / Drag
    let isSeeking = false;
    scrubberContainer.addEventListener('mousedown', (e) => {
        isSeeking = true;
        seekToEvent(e);
    });

    window.addEventListener('mousemove', (e) => {
        if (isSeeking) {
            seekToEvent(e);
        }
    });

    window.addEventListener('mouseup', () => {
        isSeeking = false;
    });

    function seekToEvent(e) {
        const rect = scrubberContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (video.duration) {
            video.currentTime = pos * video.duration;
        }
    }

    // Hover timestamp preview
    scrubberContainer.addEventListener('mousemove', (e) => {
        const rect = scrubberContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (video.duration) {
            scrubberHover.style.display = 'block';
            scrubberHover.style.left = `${pos * 100}%`;
            scrubberHover.textContent = formatTime(pos * video.duration);
        }
    });

    scrubberContainer.addEventListener('mouseleave', () => {
        scrubberHover.style.display = 'none';
    });

    // Volume Slider & Mute
    volumeSlider.addEventListener('input', (e) => {
        video.volume = parseFloat(e.target.value);
        state.volume = video.volume;
        video.muted = (video.volume === 0);
        updateVolumeIcons();
    });

    volumeBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        updateVolumeIcons();
    });

    function updateVolumeIcons() {
        const highIcon = document.getElementById('volumeHighIcon');
        const muteIcon = document.getElementById('volumeMutedIcon');
        if (video.muted || video.volume === 0) {
            highIcon.style.display = 'none';
            muteIcon.style.display = 'block';
        } else {
            highIcon.style.display = 'block';
            muteIcon.style.display = 'none';
        }
    }

    // Theater Mode
    theaterBtn.addEventListener('click', () => {
        document.body.classList.toggle('theater-mode');
        state.isTheaterMode = document.body.classList.contains('theater-mode');
    });

    // Fullscreen
    fullscreenBtn.addEventListener('click', () => {
        const wrapper = document.getElementById('playerContainer');
        if (!document.fullscreenElement) {
            wrapper.requestFullscreen().catch(err => alert(err.message));
        } else {
            document.exitFullscreen();
        }
    });

    // Keyboard Shortcuts (k, space, f, t, m, j, l)
    window.addEventListener('keydown', (e) => {
        if (!state.isWatchMode) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key.toLowerCase()) {
            case ' ':
            case 'k':
                e.preventDefault();
                togglePlayPause();
                break;
            case 'f':
                e.preventDefault();
                fullscreenBtn.click();
                break;
            case 't':
                e.preventDefault();
                theaterBtn.click();
                break;
            case 'm':
                e.preventDefault();
                volumeBtn.click();
                break;
            case 'j': // Back 10s
                video.currentTime = Math.max(0, video.currentTime - 10);
                break;
            case 'l': // Forward 10s
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
                break;
        }
    });
}

function updatePlayPauseIcons() {
    const playIcon = document.getElementById('playIcon');
    const pauseIcon = document.getElementById('pauseIcon');
    if (state.isPlaying) {
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
    } else {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) {
        return `${hrs}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// -------------------------------------------------------------
// EVENT LISTENERS & INTERACTION SYSTEM
// -------------------------------------------------------------
function setupEventListeners() {
    // Logo navigates home
    document.getElementById('homeLogo').addEventListener('click', (e) => {
        e.preventDefault();
        closeWatchView();
    });

    // Sidebar Guide Toggle
    const guideBtn = document.getElementById('guideBtn');
    guideBtn.addEventListener('click', () => {
        document.body.classList.toggle('sidebar-collapsed');
    });

    // User Profile Dropdown Toggle
    const userMenuBtn = document.getElementById('userMenuBtn');
    const userDropdown = document.getElementById('userDropdownPanel');
    userMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.style.display = userDropdown.style.display === 'none' ? 'block' : 'none';
        document.getElementById('notificationsPanel').style.display = 'none';
    });

    // Notifications Panel Toggle
    const notifBtn = document.getElementById('notificationsBtn');
    const notifPanel = document.getElementById('notificationsPanel');
    notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifPanel.style.display = notifPanel.style.display === 'none' ? 'block' : 'none';
        userDropdown.style.display = 'none';
        if (notifPanel.style.display === 'block') {
            populateNotifications();
        }
    });

    // Close Dropdowns on Click Outside
    window.addEventListener('click', () => {
        userDropdown.style.display = 'none';
        notifPanel.style.display = 'none';
        document.getElementById('searchSuggestions').style.display = 'none';
    });

    userDropdown.addEventListener('click', (e) => e.stopPropagation());
    notifPanel.addEventListener('click', (e) => e.stopPropagation());

    // Theme Toggle
    document.getElementById('themeToggleBtn').addEventListener('click', toggleTheme);

    // Like / Dislike Interaction
    document.getElementById('likeBtn').addEventListener('click', () => {
        state.liked = !state.liked;
        if (state.liked) state.disliked = false;
        updateLikeButtons();
    });

    document.getElementById('dislikeBtn').addEventListener('click', () => {
        state.disliked = !state.disliked;
        if (state.disliked) state.liked = false;
        updateLikeButtons();
    });

    // Subscribe Button Interaction
    document.getElementById('subscribeBtn').addEventListener('click', () => {
        state.subscribed = !state.subscribed;
        updateSubscribeButton();
    });

    // Description Box Expand / Collapse
    const descBox = document.getElementById('descriptionBox');
    const descToggleBtn = document.getElementById('descToggleBtn');
    descBox.addEventListener('click', () => {
        descBox.classList.toggle('expanded');
        descToggleBtn.textContent = descBox.classList.contains('expanded') ? 'Show less' : '...more';
    });

    // Add Comment System
    const commentInput = document.getElementById('commentInput');
    const commentActions = document.getElementById('commentActions');
    const commentSubmitBtn = document.getElementById('commentSubmitBtn');
    const commentCancelBtn = document.getElementById('commentCancelBtn');

    commentInput.addEventListener('focus', () => {
        commentActions.style.display = 'flex';
    });

    commentInput.addEventListener('input', () => {
        commentSubmitBtn.disabled = commentInput.value.trim().length === 0;
    });

    commentCancelBtn.addEventListener('click', () => {
        commentInput.value = '';
        commentInput.blur();
        commentActions.style.display = 'none';
    });

    commentSubmitBtn.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (!text) return;

        const newComment = {
            id: 'c-' + Date.now(),
            author: 'Yuvraj',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&q=80',
            time: 'Just now',
            text: text,
            likes: '0'
        };

        const list = document.getElementById('commentsList');
        list.prepend(createCommentElement(newComment));
        showToast('Comment posted successfully');

        commentInput.value = '';
        commentActions.style.display = 'none';
        commentSubmitBtn.disabled = true;
    });

    // Modals: Voice Search
    const voiceBtn = document.getElementById('voiceSearchBtn');
    const voiceModal = document.getElementById('voiceModal');
    const closeVoiceBtn = document.getElementById('closeVoiceModalBtn');
    voiceBtn.addEventListener('click', () => {
        voiceModal.style.display = 'flex';
    });
    closeVoiceBtn.addEventListener('click', () => {
        voiceModal.style.display = 'none';
    });
    voiceModal.addEventListener('click', (e) => {
        if (e.target === voiceModal) voiceModal.style.display = 'none';
    });

    // Modals: Share
    const shareBtn = document.getElementById('shareBtn');
    const shareModal = document.getElementById('shareModal');
    const closeShareBtn = document.getElementById('closeShareModalBtn');
    const copyLinkBtn = document.getElementById('copyShareLinkBtn');
    shareBtn.addEventListener('click', () => {
        shareModal.style.display = 'flex';
    });
    closeShareBtn.addEventListener('click', () => {
        shareModal.style.display = 'none';
    });
    shareModal.addEventListener('click', (e) => {
        if (e.target === shareModal) shareModal.style.display = 'none';
    });
    copyLinkBtn.addEventListener('click', () => {
        const input = document.getElementById('shareLinkInput');
        navigator.clipboard.writeText(input.value);
        showToast('Link copied to clipboard');
        shareModal.style.display = 'none';
    });

    // Social Sharing
    document.querySelectorAll('.share-social-item').forEach(item => {
        item.addEventListener('click', () => {
            const app = item.dataset.app;
            showToast(`Opening ${app}...`);
            shareModal.style.display = 'none';
        });
    });

    // Search Form Submit
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    searchInput.addEventListener('input', () => {
        clearSearchBtn.style.display = searchInput.value.length > 0 ? 'flex' : 'none';
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearSearchBtn.style.display = 'none';
        renderVideoFeed(VIDEO_DATABASE);
        searchInput.focus();
    });

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim().toLowerCase();
        document.getElementById('searchSuggestions').style.display = 'none';
        if (!query) {
            renderVideoFeed(VIDEO_DATABASE);
            return;
        }

        closeWatchView();
        const results = VIDEO_DATABASE.filter(v => 
            v.title.toLowerCase().includes(query) ||
            v.channel.toLowerCase().includes(query) ||
            v.category.toLowerCase().includes(query)
        );
        renderVideoFeed(results);
    });
}

function updateLikeButtons() {
    const likeBtn = document.getElementById('likeBtn');
    const dislikeBtn = document.getElementById('dislikeBtn');
    const likeCount = document.getElementById('likeCount');

    if (state.liked) {
        likeBtn.classList.add('liked');
        likeCount.textContent = '250K';
    } else {
        likeBtn.classList.remove('liked');
        likeCount.textContent = state.activeVideo ? state.activeVideo.likes : '249K';
    }

    if (state.disliked) {
        dislikeBtn.classList.add('liked');
    } else {
        dislikeBtn.classList.remove('liked');
    }
}

function updateSubscribeButton() {
    const btn = document.getElementById('subscribeBtn');
    if (state.subscribed) {
        btn.textContent = 'Subscribed';
        btn.classList.add('subscribed');
        showToast(`Subscribed to ${state.activeVideo.channel}`);
    } else {
        btn.textContent = 'Subscribe';
        btn.classList.remove('subscribed');
    }
}

function populateNotifications() {
    const list = document.getElementById('notificationsList');
    list.innerHTML = `
        <div class="notification-row">
            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&q=80" class="notif-thumb">
            <div class="notif-details">
                <div class="notif-title"><strong>Fireship</strong> uploaded: React 19 in 100 Seconds</div>
                <div class="notif-time">2 hours ago</div>
            </div>
        </div>
        <div class="notification-row">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=80&q=80" class="notif-thumb">
            <div class="notif-details">
                <div class="notif-title"><strong>MKBHD</strong> uploaded: The Smartphone Award Winners 2026!</div>
                <div class="notif-time">1 day ago</div>
            </div>
        </div>
        <div class="notification-row">
            <img src="https://images.unsplash.com/photo-1677442136019-21780efad99a?w=80&q=80" class="notif-thumb">
            <div class="notif-details">
                <div class="notif-title"><strong>freeCodeCamp.org</strong> is live: 12-Hour Machine Learning Stream</div>
                <div class="notif-time">3 days ago</div>
            </div>
        </div>
    `;
}

// -------------------------------------------------------------
// CHIPS CAROUSEL & CATEGORY FILTERING
// -------------------------------------------------------------
function setupChipsCarousel() {
    const scrollArea = document.getElementById('chipsScrollArea');
    const scrollLeftBtn = document.getElementById('chipsScrollLeft');
    const scrollRightBtn = document.getElementById('chipsScrollRight');
    const chips = scrollArea.querySelectorAll('.yt-chip');

    // Category click handler
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            const category = chip.dataset.category;
            state.currentCategory = category;

            if (category === 'All') {
                renderVideoFeed(VIDEO_DATABASE);
            } else {
                const filtered = VIDEO_DATABASE.filter(v => 
                    v.category.toLowerCase().includes(category.toLowerCase()) ||
                    v.title.toLowerCase().includes(category.toLowerCase())
                );
                renderVideoFeed(filtered);
            }
        });
    });

    // Horizontal scroll buttons
    scrollLeftBtn.addEventListener('click', () => {
        scrollArea.scrollBy({ left: -250, behavior: 'smooth' });
    });

    scrollRightBtn.addEventListener('click', () => {
        scrollArea.scrollBy({ left: 250, behavior: 'smooth' });
    });

    scrollArea.addEventListener('scroll', () => {
        scrollLeftBtn.style.display = scrollArea.scrollLeft > 20 ? 'flex' : 'none';
        const maxScroll = scrollArea.scrollWidth - scrollArea.clientWidth;
        scrollRightBtn.style.display = scrollArea.scrollLeft < maxScroll - 20 ? 'flex' : 'none';
    });
}

// -------------------------------------------------------------
// SEARCH AUTOCOMPLETE SUGGESTIONS
// -------------------------------------------------------------
function setupSearchAutocomplete() {
    const input = document.getElementById('searchInput');
    const suggestionsBox = document.getElementById('searchSuggestions');

    const searchQueries = [
        'javascript full course',
        'python for beginners',
        'react 19 tutorial',
        'lofi beats to study to',
        'freecodecamp programming',
        'web dev simplified',
        'gta 6 official trailer',
        'artificial intelligence 2026',
        'marques brownlee reviews'
    ];

    input.addEventListener('input', () => {
        const val = input.value.trim().toLowerCase();
        if (!val) {
            suggestionsBox.style.display = 'none';
            return;
        }

        const matches = searchQueries.filter(q => q.includes(val));
        if (matches.length > 0) {
            suggestionsBox.innerHTML = '';
            matches.slice(0, 6).forEach(match => {
                const item = document.createElement('div');
                item.className = 'suggestion-item';
                item.innerHTML = `
                    <svg viewBox="0 0 24 24" class="yt-svg small"><path d="M20.87 20.17l-5.59-5.59A7.95 7.95 0 0 0 17 10a8 8 0 1 0-8 8 7.95 7.95 0 0 0 4.58-1.72l5.59 5.59.7-.7zM10 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"/></svg>
                    <span>${match}</span>
                `;
                item.addEventListener('click', () => {
                    input.value = match;
                    suggestionsBox.style.display = 'none';
                    document.getElementById('searchForm').dispatchEvent(new Event('submit'));
                });
                suggestionsBox.appendChild(item);
            });
            suggestionsBox.style.display = 'block';
        } else {
            suggestionsBox.style.display = 'none';
        }
    });
}

// -------------------------------------------------------------
// TOAST NOTIFICATIONS
// -------------------------------------------------------------
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toastNotification');
    const msg = document.getElementById('toastMessage');
    msg.textContent = message;
    toast.classList.add('show');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
