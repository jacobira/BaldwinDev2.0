function showModal() {
    // document.getElementById('floatingBox').classList.remove('hidden');
    document.getElementById('floatingBox').style.display = 'flex';
    document.getElementById('floatingBox').style.opacity = 1;
}
function hideModal() {
    // document.getElementById('floatingBox').style.opacity = '0';
    document.getElementById('floatingBox').style.display = 'none';
    document.getElementById('floatingBox').style.opacity = 0;
}