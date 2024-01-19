

// for faq section
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;

            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
            } else {
                answer.classList.add('hidden');
            }
        });
    });
});

console.log("js is working");