document.addEventListener('DOMContentLoaded', () => {
    // Modal Overlay Controls
    const approachModal = document.getElementById('approachModal');
    const approachNavBtn = document.getElementById('approachBtn');
    const approachHeroBtn = document.getElementById('heroApproachBtn');
    const closeModal = document.getElementById('closeModal');

    function openApproachModal(e) {
        e.preventDefault();
        approachModal.classList.add('active');
    }

    function closeApproachModal() {
        approachModal.classList.remove('active');
    }

    if (approachNavBtn) approachNavBtn.addEventListener('click', openApproachModal);
    if (approachHeroBtn) approachHeroBtn.addEventListener('click', openApproachModal);
    if (closeModal) closeModal.addEventListener('click', closeApproachModal);

    // Close Modal when clicking outside content
    approachModal.addEventListener('click', (e) => {
        if (e.target === approachModal) {
            closeApproachModal();
        }
    });
});