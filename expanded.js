function toggleExpandedContent(button) {
    const cardBody = button.closest('.card-body');
    const expandedContent = cardBody.querySelector('.expanded-content');

    if (expandedContent.style.display === 'none' || expandedContent.style.display === '') {
        expandedContent.style.display = 'block';
    } else {
        expandedContent.style.display = 'none';
    }
}
