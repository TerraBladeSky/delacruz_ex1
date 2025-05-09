document.addEventListener('DOMContentLoaded', () => {
    // Server hover animation
    const servers = document.querySelectorAll('.server-icon');
    servers.forEach(server => {
        const tooltip = server.getAttribute('data-tooltip');
        if (tooltip) {
            server.addEventListener('mouseenter', () => {
                if (!server.classList.contains('active')) {
                    server.style.transform = 'translateY(-2px)';
                }
            });

            server.addEventListener('mouseleave', () => {
                server.style.transform = 'translateY(0)';
            });
        }
    });
    
    // Add slick animation when switching between pages
    document.querySelectorAll('.server-icon[href]').forEach(link => {
        link.addEventListener('click', (e) => {
            if (!link.classList.contains('active')) {
                e.preventDefault();
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = link.getAttribute('href');
                }, 200);
            }
        });
    });

    // Initialize page transition
    document.body.style.transition = 'opacity 0.2s ease';
    document.body.style.opacity = '1';

    // Channel switching logic
    const channelItems = document.querySelectorAll('.channel-item');
    const contentHeader = document.querySelector('.content-header h2');
    const contentMain = document.querySelector('.content-main');

    channelItems.forEach(channel => {
        channel.addEventListener('click', () => {
            // Remove active class from all channels
            channelItems.forEach(ch => ch.classList.remove('active'));
            // Add active class to clicked channel
            channel.classList.add('active');
            
            // Update header
            contentHeader.textContent = channel.textContent;
            
            // Simulate content loading with fade effect
            contentMain.style.opacity = '0';
            setTimeout(() => {
                loadChannelContent(channel.textContent.trim());
                contentMain.style.opacity = '1';
            }, 200);
        });
    });

    // Server switching animation
    const serverIcons = document.querySelectorAll('.server-icon');
    serverIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            serverIcons.forEach(si => si.style.backgroundColor = 'var(--discord-secondary)');
            icon.style.backgroundColor = 'var(--discord-accent)';
        });

        // Hover effects
        icon.addEventListener('mouseenter', () => {
            if (icon.style.backgroundColor !== 'var(--discord-accent)') {
                icon.style.transform = 'translateY(-2px)';
            }
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0)';
        });
    });

    // Content loading simulation
    function loadChannelContent(channelName) {
        // Add your content loading logic here
        // This is where you'd typically fetch content for each channel
        switch(channelName.toLowerCase()) {
            case '# introduction':
                // Load introduction content
                break;
            case '# evolution':
                // Load evolution content
                break;
            case '# modern-classics':
                // Load modern classics content
                break;
            // Add cases for other channels
        }
    }

    // Add typing animation to messages
    function addTypingAnimation() {
        const messages = document.querySelectorAll('.content-main p');
        messages.forEach((message, index) => {
            message.style.opacity = '0';
            setTimeout(() => {
                message.style.transition = 'opacity 0.3s ease-in-out';
                message.style.opacity = '1';
            }, index * 100);
        });
    }

    // Initialize
    addTypingAnimation();

    // Channel hover effect
    channelItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            if (!item.classList.contains('active')) {
                item.style.backgroundColor = 'var(--discord-hover)';
                item.style.color = 'var(--discord-text-primary)';
            }
        });

        item.addEventListener('mouseleave', () => {
            if (!item.classList.contains('active')) {
                item.style.backgroundColor = 'transparent';
                item.style.color = 'var(--discord-text-muted)';
            }
        });
    });

    // Add smooth scrolling
    const contentArea = document.querySelector('.content-area');
    contentArea.addEventListener('scroll', () => {
        const scrollTop = contentArea.scrollTop;
        const header = document.querySelector('.content-header');
        if (scrollTop > 0) {
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
});
