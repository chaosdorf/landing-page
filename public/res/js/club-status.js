document.addEventListener('DOMContentLoaded', function() {
  const OPENED_CLASS = 'club-status-opened';
  const CLOSED_CLASS = 'club-status-closed';

  const clubStatusMarker = document.querySelector('.club-status');

  function setClubStatus(data) {
    if (data.state.open) {
      clubStatusMarker.classList.remove(CLOSED_CLASS);
      clubStatusMarker.classList.add(OPENED_CLASS);
      clubStatusMarker.innerHTML = 'geöffnet';
    } else {
      clubStatusMarker.classList.remove(OPENED_CLASS);
      clubStatusMarker.classList.add(CLOSED_CLASS);
      clubStatusMarker.innerHTML = 'geschlossen';
    }

    const lastUpdateDateTimeString = new Date().toLocaleString('de-DE');
    clubStatusMarker.setAttribute('title', 'letztes Update: ' + lastUpdateDateTimeString);
  }

  function updateClubStatus() {
    fetch('https://chaosdorf.de/space_api.json')
      .then((response) => response.json())
      .then((data) => setClubStatus(data));
  }

  setInterval(updateClubStatus, 30000);

  updateClubStatus();
});
