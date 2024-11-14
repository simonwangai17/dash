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
  
