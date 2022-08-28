// Register components
import '../../components/pages/auth/auth-form';
import '../../components/shared/button';
import '../../components/pages/auth/input';

// Import page
import template from './template.hbs';

// Render template
window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    if (root) {
        root.innerHTML = template();
    }
});