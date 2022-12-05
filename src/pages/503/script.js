// Register components
import '../../components/pages/error/error-block';
import '../../components/shared/button';

// Import page
import template from './template.hbs';

// Render template
window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    if (root) {
        root.innerHTML = template();
    }
});