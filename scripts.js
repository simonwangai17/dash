function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }
  
  function showEarningSection(subSectionId) {
    document.querySelectorAll('#earning .sub-section').forEach(section => section.style.display = 'none');
    document.getElementById(subSectionId).style.display = 'block';
  }
  
  function showAccountSection(subSectionId) {
    document.querySelectorAll('#account .sub-section').forEach(section => section.style.display = 'none');
    document.getElementById(subSectionId).style.display = 'block';
  }
  
  function requestProfileUpdate() {
    alert("Request to change account details sent.");
  }
  
  function logout() {
    alert("You have logged out.");
    location.reload();
  }
  function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
  }

  function showEarningSection(subSectionId) {
    document.querySelectorAll('.sub-section').forEach(section => section.style.display = 'none');
    document.getElementById(subSectionId).style.display = 'block';
  }

  function showPaymentInstructions() {
    document.getElementById('mpesaModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('mpesaModal').style.display = 'none';
  }

  function logout() {
    alert("You have logged out.");
    location.reload();
  }

  function requestProfileUpdate() {
    alert("Request to change account details sent.");
  }

  function verifyPayment() {
    alert("Payment verified and sent.");
    closeModal();
  } 
  
  function activateAccount() {
    document.getElementById("mpesaModal").style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("mpesaModal").style.display = "none";
  }
  
  function verifyMpesaCode() {
    const mpesaCode = document.getElementById("mpesaCode").value;
    if (mpesaCode.trim() === "") {
      alert("Please enter the Mpesa Transaction Code.");
      return;
    }
    
    // Send verification (for demonstration, we'll just show an alert)
    alert("Transaction code sent for verification: " + mpesaCode);
    closeModal();
  }
  function showAccountBalance() {
    document.getElementById("accountBalance").style.display = "block";
    document.getElementById("withdrawForm").style.display = "none"; // Hide withdraw form
  }
  
  function showWithdrawForm() {
    document.getElementById("withdrawForm").style.display = "block";
    document.getElementById("accountBalance").style.display = "none"; // Hide account balance
  }
  
  function hideAllAccountSections() {
    document.getElementById("accountBalance").style.display = "none";
    document.getElementById("withdrawForm").style.display = "none";
  }
  
  // Call hideAllAccountSections initially when loading other sections
  function loadProfile() {
    hideAllAccountSections();
    // Show profile content
  }
  
  function loadFunds() {
    hideAllAccountSections();
    // Show funds content
  }
  
  function loadAddClient() {
    hideAllAccountSections();
    // Show add client content
  }
  
  function requestPayout() {
    const phoneNumber = document.getElementById("withdrawPhone").value;
    const amount = document.getElementById("withdrawAmount").value;
  
    if (amount < 300) {
      alert("Minimum withdrawal amount is Ksh 300.");
      return;
    }
  
    if (phoneNumber && amount) {
      alert(`Request payout for ${phoneNumber} of Ksh ${amount}`);
      // Here, you would send the payout request to the backend
    } else {
      alert("Please enter both phone number and amount.");
    }
  }
 // Function to restart typing animation
function restartTypingAnimation() {
  const companyName = document.querySelector(".company-name");
  companyName.classList.remove("company-name"); // Temporarily remove class
  void companyName.offsetWidth; // Trigger reflow
  companyName.classList.add("company-name"); // Re-add class to restart animation
}

// Restart animation every 5 seconds
setInterval(restartTypingAnimation, 5000);

function navigateToSection(mainSection, subSection) {
  // Hide all main sections
  document.querySelectorAll('.section').forEach((section) => {
    section.style.display = 'none';
  });

  // Show the main section
  document.getElementById(mainSection).style.display = 'block';

  // Hide all subsections within the main section
  document.querySelectorAll(`#${mainSection} .sub-section`).forEach((sub) => {
    sub.style.display = 'none';
  });

  // Show the specific subsection
  document.getElementById(subSection).style.display = 'block';
}
// Set the countdown duration (in milliseconds)
const countdownDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Retrieve the saved target time from local storage or set it if not present
let targetTime = localStorage.getItem('targetTime');

if (!targetTime) {
    // If no saved target time exists, set it to 24 hours from now
    targetTime = Date.now() + countdownDuration;
    localStorage.setItem('targetTime', targetTime);
}

// Function to update the countdown display
function updateCountdown() {
    const now = Date.now();
    const remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        // When the countdown ends, reset it
        document.getElementById('payoutCountdown').innerHTML = "00:00:00";
        clearInterval(countdownInterval);
    } else {
        // Convert remaining time to hours, minutes, and seconds
        const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((remainingTime / (1000 * 60)) % 60);
        const seconds = Math.floor((remainingTime / 1000) % 60);

        // Display the countdown
        document.getElementById('payoutCountdown').innerHTML = 
            `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }
}

// Helper function to pad single digits with a leading zero
function pad(value) {
    return value < 10 ? '0' + value : value;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call updateCountdown on page load
updateCountdown();
// Example surveys data, including image URLs
const surveys = [
  { name: "Survey A", payout: "Ksh 10", status: "Available", imageUrl: "survey_a_image.jpg" },
  { name: "Survey B", payout: "Ksh 15", status: "Available", imageUrl: "survey_b_image.jpg" },
];

// Dynamically populate the survey table
function populateSurveyTable() {
  const surveyTableBody = document.getElementById('leadList');  // Change this if necessary

  surveys.forEach(survey => {
    const row = document.createElement('tr');
    
    row.innerHTML = `
      <td>${survey.name}</td>
      <td>${survey.payout}</td>
      <td><button>Start</button></td>
      <td><img src="${survey.imageUrl}" alt="${survey.name}" class="survey-image"></td>
    `;

    surveyTableBody.appendChild(row);
  });
}



// Get the survey_id from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const surveyId = urlParams.get('survey_id');

// Example logic to load the correct survey based on the survey_id
if (surveyId == 1) {
  // Load Survey A
  document.getElementById("surveyTitle").textContent = "Survey A";
  // Load other survey details...
} else if (surveyId == 2) {
  // Load Survey B
  document.getElementById("surveyTitle").textContent = "Survey B";
  // Load other survey details...
}

// Function to deactivate the grab functionality and show "Coming Soon"
function deactivateGrabbing() {
  // Set the status to "Coming Soon" for Token A and Token B
  document.getElementById('tokenAStatus').innerText = 'Coming Soon';
  document.getElementById('tokenBStatus').innerText = 'Coming Soon';

  // Hide the grab buttons to prevent users from clicking them
  document.getElementById('grabButtonA').style.display = 'none';
  document.getElementById('grabButtonB').style.display = 'none';

  // Optionally, you can hide any grabbing sections or modals if active
  hideAllSections();
}

// Function to hide all sections (including grab sections)
function hideAllSections() {
  document.getElementById('grabSectionA').style.display = 'none';
  document.getElementById('grabSectionB').style.display = 'none';
}

// Optionally, you can call this function when you need to deactivate grabbing for the tokens
deactivateGrabbing();
// Function to toggle the display of the Funds dropdown
function toggleFundsDropdown() {
  const dropdown = document.getElementById('fundsDropdown');
  // Toggle the visibility of the dropdown
  if (dropdown.style.display === 'none' || dropdown.style.display === '') {
      dropdown.style.display = 'block';
  } else {
      dropdown.style.display = 'none';
  }
}

// You can add these functions for each button inside the dropdown
function showAccountBalance() {
  alert("Account Balance shown");
  // Code to show account balance
}

function showWithdrawForm() {
  alert("Withdraw Form displayed");
  // Code to show withdraw form
}

function requestPayout() {
  alert("Request Payout triggered");
  // Code to request payout
}
// Function to show the contact modal with customer details
function showContactModal(name, phone, refCode) {
  // Populate the modal with customer details
  document.getElementById('customerName').textContent = name;
  document.getElementById('customerPhone').textContent = phone;
  document.getElementById('customerRefCode').textContent = refCode;

  // Show the modal
  document.getElementById('contactModal').style.display = 'flex';
}

// Function to close the contact modal
function closeContactModal() {
  document.getElementById('contactModal').style.display = 'none';
}
// Show specific account section
function showAccountSection(sectionId) {
  document.querySelectorAll('.sub-section').forEach(section => {
    section.style.display = 'none'; // Hide all sections
  });
  document.getElementById(sectionId).style.display = 'block'; // Show selected section
}

// Toggle Funds Options
function toggleFundsOptions() {
  const fundsOptions = document.getElementById('fundsOptions');
  fundsOptions.style.display = fundsOptions.style.display === 'block' ? 'none' : 'block';
}

// Show View Balance Pop-up
function viewBalancePopup() {
  document.getElementById('balancePopup').style.display = 'block';
}

// Close Pop-up
function closePopup(popupId) {
  document.getElementById(popupId).style.display = 'none';
}

// Show Withdraw Form
function showWithdrawForm() {
  document.getElementById('withdrawForm').style.display = 'block';
}

// Submit Withdrawal Request
function submitWithdrawal() {
  const name = document.getElementById('withdrawName').value;
  const mpesaNumber = document.getElementById('mpesaNumber').value;
  const amount = document.getElementById('withdrawAmount').value;

  if (!name || !mpesaNumber || !amount) {
    alert("Please fill in all fields.");
    return;
  }

  alert("Submitting withdrawal request...");

  // Simulate email submission and wait 5 seconds
  setTimeout(() => {
    alert("Withdrawal request submitted.");
    document.getElementById('withdrawForm').style.display = 'none'; // Close form
    viewBalancePopup(); // Redirect to account balance
  }, 5000);
}

// Generate Report (Placeholder)
function generateReport() {
  alert("Report generated successfully!");
}
function navigateToSection(mainSection, subSection) {
  // Hide all main sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');

  // Show the main section
  const main = document.getElementById(mainSection);
  if (main) {
    main.style.display = 'block';
  }

  // If a sub-section is specified, show it
  if (subSection) {
    const sub = document.getElementById(subSection);
    if (sub) {
      const subSections = main.querySelectorAll('.sub-section');
      subSections.forEach(section => section.style.display = 'none');
      sub.style.display = 'block';
    }
  }
}
// Page Loader Script
window.onload = function () {
  setTimeout(() => {
    document.getElementById('pageLoader').style.display = 'none';
    document.getElementById('mainContent').style.display = 'block';
  }, 5000); // 5 seconds
};
// Display the sweet popup message after 5 seconds
window.onload = function () {
  setTimeout(() => {
    document.getElementById('sweetPopup').style.display = 'flex'; // Show popup
  }, 5000); // 5 seconds delay
};

// Function to close the popup
function closeSweetPopup() {
  document.getElementById('sweetPopup').style.display = 'none'; // Hide popup
}
