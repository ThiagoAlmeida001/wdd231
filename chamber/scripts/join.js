document.addEventListener('DOMContentLoaded', () => {
    const timestampField = document.querySelector('#timestamp');
    if (timestampField) {
        const now = new Date();
        timestampField.value = now.toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short'
        });
    }
});

const infoButtons = document.querySelectorAll('.info-btn');

infoButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

const allModals = document.querySelectorAll('dialog');

allModals.forEach(modal => {
    const closeBtn = modal.querySelector('.close-modal');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.close();
        });
    }

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});