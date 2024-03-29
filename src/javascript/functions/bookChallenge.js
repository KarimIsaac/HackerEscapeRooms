export default function bookChallenge(data) {
  setTimeout(() => {
    // TARGET CORRECT BUTTON FROM EACH CHALLENGE
    let bookBtn = document.querySelectorAll(".card .fourth-btn");

    for (let i = 0; i < bookBtn.length; i++) {
      bookBtn[i].addEventListener("click", () => {

        // STEP 1 - RENDER THE MODAL & BACKGROUND - USER INPUT PREFERRED DATE
        let modalBackground = document.createElement('div');
        modalBackground.className = 'modal-background';
        document.body.appendChild(modalBackground);

        const modal = document.createElement('form');
        modal.className = 'modal-container';
        document.body.appendChild(modal);
        modal.innerHTML = `
          <h1>Book room "${data[i].title}" (step 1)</h1>
          <p>What date would you like to come?<p>
          <h3>Date</h3>
          <input type="text" id="date-input" placeholder="2022-04-01" required>
          <span id="date-error" style="color: red;"></span>
          <button type="submit" class="fourth-btn" id="search-btn">Search available times</button>
        `;

        // CLICKING OUTSIDE THE MODAL EXITS THE BOOKING - REMOVES MODAL & BACKGROUND
        modalBackground.addEventListener("click", () => {
          document.querySelector('.modal-container').style.animation = "modal-out 0.3s forwards";
          modalBackground.remove();
          setTimeout(() => {
            modal.remove();
          }, 300);
        });

        // STEP 2 UPDATE MODAL - INPUT USER CREDENTIALS - CHOOSE TIME & PARTICIPANTS
        if (document.querySelector('#search-btn')) {
          const searchBtn = document.getElementById("search-btn");
          const DateInput = document.getElementById("date-input");
          const dateError = document.getElementById("date-error");

          searchBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const datePattern = /^\d{4}-\d{2}-\d{2}$/;

            if (!datePattern.test(DateInput.value)) {
              dateError.textContent = "Invalid date format. Please use yyyy-mm-dd.";
              return;
            }

            dateError.textContent = "";

            if (DateInput.value === "") {
              dateError.textContent = "You need to enter a date to book a room";
              return;
            }

            modal.innerHTML = `
              <h1>Book room "${data[i].title}" (step 2)</h1>
              <h3>Name</h3>
              <input type="text" id="name-input" placeholder="Enter your name here" required>
              <h3>Email</h3>
              <input type="email" id="email-input" placeholder="userName@mail.com" required>
              <h3>Phone</h3>
              <input type="tel" id="phone-input" placeholder="+46" required>
              <h3>What time?</h3>
              <select name="time" id="available-time" required>
                <option></option>
                <option value="time">13:00</option>
                <option value="time">15:00</option>
                <option value="time">18:00</option>
                <option value="time">20:00</option>
              </select>
              <h3>How many participants?</h3>
              <select name="people" id="participants-count"></select>
              <button type="submit" class="fourth-btn" id="submit-btn">Submit booking</button>
            `;

            // GET AVAILABLE TIMES FROM BOOKING API
            fetch("https://lernia-sjj-assignments.vercel.app/api/booking/available-times" +
              "?challenge=" + data[i].id +
              "&date=" + DateInput.value)
              .then(response => response.json())
              .then(time => {
                for (let i = 0; i < time.slots.length; i++) {
                  const optionTime = document.createElement("option");
                  optionTime.textContent = time.slots[i];
                  document.getElementById("available-time").appendChild(optionTime);
                }
              });

            // GET NUMBER OF PARTICIPANTS DEPENDING ON MIN/MAX OF THE CHALLENGE
            for (let people = data[i].minParticipants; people <= data[i].maxParticipants; people++) {
              const participantsCount = document.createElement("option");
              participantsCount.textContent = people + " Participants";
              document.getElementById("participants-count").appendChild(participantsCount);
            }

            // STEP 3 SUBMIT BOOKING - SAVE USER CREDENTIALS AS OBJECT - SEND BOOKING DETAILS TO API
            if (document.querySelector('#submit-btn')) {
              const nameInput = document.getElementById('name-input');
              const emailInput = document.getElementById('email-input');
              const phoneInput = document.getElementById('phone-input');

              modal.addEventListener("submit", (e) => {
                e.preventDefault();

                // CONVERT PARTICIPANTS TO INTEGER NUMBER
                const participantsConvert = document.getElementById('participants-count').value.replace(' Participants', '');
                const participantsInteger = parseInt(participantsConvert, 10);

                const bookingCredentials = {
                  name: nameInput.value,
                  email: emailInput.value,
                  phone: phoneInput.value,
                  date: DateInput.value,
                  time: document.getElementById('available-time').value,
                  participants: participantsInteger,
                  challenge: data[i].id
                };

                console.log(bookingCredentials);

                fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
                  method: 'POST',
                  mode: 'cors',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(bookingCredentials),
                });

                modal.innerHTML = `
                  <h1 id="thank-you">Thank you!</h1>
                  <a id="link-back" href="javascript:window.location.reload();">Back to challenges</a>
                `;
              });
            }
          });
        }
      });
    }
  }, 200);
}
