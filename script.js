// 初始化Swiper轮播
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});

// AI对话功能
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');

chatForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = userInput.value.trim();
    if (message) {
        addMessage('user', message);
        // 这里应该发送消息到AI服务并获取回复
        // 为了演示，我们使用setTimeout模拟AI回复
        setTimeout(() => {
            addMessage('ai', '这是AI的回复。在实际应用中，这里应该是从AI服务获取的回复。');
        }, 1000);
        userInput.value = '';
    }
});

function addMessage(sender, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = text;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
