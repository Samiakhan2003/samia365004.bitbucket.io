document.addEventListener("DOMContentLoaded", function () {
    // Function to handle form submission
    const form = document.getElementById("productDetailsForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const formData = {
        productName: document.getElementById("productName").value,
        productNumber: document.getElementById("productNumber").value,
        quantity: document.getElementById("quantity").value,
        weight: document.getElementById("weight").value,
        listPrice: document.getElementById("listPrice").value,
        sellEndDate1: document.getElementById("sellEndDate1").value,
        sellEndDate2: document.getElementById("sellEndDate2").value,
        safetyStock: document.getElementById("safetyStock").value,
        finishedGoods: document.getElementById("finishedGoods").checked,
        category: document.getElementById("category").value,
        subcategory: document.getElementById("subcategory").value,
        productLine: document.getElementById("productLine").value,
        size: document.getElementById("size").value,
        emailSubscription: document.getElementById("emailSubscription").value,
      };
  
      console.log(formData); // Log data for debugging or further processing
      alert("Form submitted successfully!");
    });
  
    // Function to handle subscription button click
    const subscribeButton = document.getElementById("subscribeButton");
    subscribeButton.addEventListener("click", function () {
      const email = document.getElementById("emailSubscription").value;
      if (email) {
        alert(`Subscribed with email: ${email}`);
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });