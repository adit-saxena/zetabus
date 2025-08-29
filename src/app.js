import { createCurrentLocationSection } from './components/CurrentLocationSection.js';
import { createFrequentlyBookedSection } from './components/FrequentlyBookedSection.js';
import { createNavigationMenuSection } from './components/NavigationMenuSection.js';
import { createReminderSection } from './components/ReminderSection.js';
import { createSearchSection } from './components/SearchSection.js';

export function createApp() {
  const app = document.createElement('div');
  app.className = 'app-container';

  // Desktop wrapper with padding
  const desktopWrapper = document.createElement('div');
  desktopWrapper.className = 'desktop-wrapper';

  // Mobile container
  const mobileContainer = document.createElement('div');
  mobileContainer.className = 'mobile-container';

  // Header section
  const headerSection = document.createElement('div');
  headerSection.className = 'header-section';

  // Gradient background
  const gradientBg = document.createElement('div');
  gradientBg.className = 'gradient-background';

  // Current location section
  const currentLocationSection = createCurrentLocationSection();

  // Search bar
  const searchBar = document.createElement('div');
  searchBar.className = 'search-bar';
  searchBar.innerHTML = `
    <div class="search-content">
      <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <div class="search-placeholder">Enter Destination</div>
    </div>
    <svg class="mic-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" x2="12" y1="19" y2="22"/>
      <line x1="8" x2="16" y1="22" y2="22"/>
    </svg>
  `;

  // Profile image
  const profileImage = document.createElement('img');
  profileImage.className = 'profile-image';
  profileImage.src = '/image-7.png';
  profileImage.alt = 'Profile';

  // Assemble header
  headerSection.appendChild(gradientBg);
  headerSection.appendChild(currentLocationSection);
  headerSection.appendChild(searchBar);
  headerSection.appendChild(profileImage);

  // Main content
  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';

  // Frequently booked section
  const frequentlyBookedSection = createFrequentlyBookedSection();

  // Reminder card
  const reminderCard = document.createElement('div');
  reminderCard.className = 'reminder-card';
  reminderCard.innerHTML = `
    <div class="reminder-content">
      <svg class="bell-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
      </svg>
      <div class="reminder-text">Setup a get-off reminder</div>
    </div>
    <svg class="chevron-icon" width="12" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="m9 18 6-6-6-6"/>
    </svg>
  `;

  // Reminder section
  const reminderSection = createReminderSection();

  // Search section
  const searchSection = createSearchSection();

  // Assemble main content
  mainContent.appendChild(frequentlyBookedSection);
  mainContent.appendChild(reminderCard);
  mainContent.appendChild(reminderSection);
  mainContent.appendChild(searchSection);

  // Navigation menu
  const navigationMenu = createNavigationMenuSection();

  // Assemble mobile container
  mobileContainer.appendChild(headerSection);
  mobileContainer.appendChild(mainContent);
  mobileContainer.appendChild(navigationMenu);

  // Assemble desktop wrapper
  desktopWrapper.appendChild(mobileContainer);

  // Assemble app
  app.appendChild(desktopWrapper);

  return app;
}