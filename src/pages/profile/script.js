// Register components
import '../../components/pages/profile/container';
import '../../components/pages/profile/field';
import '../../components/pages/profile/button';
import '../../components/shared/square-button';
import '../../components/shared/button';
import '../../components/shared/avatar';

// Import page
import template from './template.hbs';

// Render template
window.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root');

    if (root) {
        root.innerHTML = template();
    }
});