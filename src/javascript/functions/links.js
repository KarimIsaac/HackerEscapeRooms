export default function links() {
  const onlineLinks = document.querySelectorAll('.primary-btn');
  for (const button of onlineLinks) {
    button.addEventListener('click', () => {
      document.location.href = './src/Pages/challengesPage.html';
    });
  }

  const onsiteLinks = document.querySelectorAll('.secondary-btn');
  for (const button of onsiteLinks) {
    button.addEventListener('click', () => {
      document.location.href = './src/Pages/challengesPage.html';
    });
  }
}