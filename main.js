(() => {
  const plugCheckout = document.querySelector("plug-checkout");

  plugCheckout.customFormStyleClasses = {
    submitButton: "custom-submit-button",
  };

  plugCheckout.installmentsConfig = {
    show: true,
    quantity: 2,
  };

  plugCheckout.addEventListener("paymentSuccess", ({ detail: { data } }) => {
    console.log(data);
  });

  plugCheckout.addEventListener("paymentError", ({ detail: { error } }) => {
    console.log(error);
  });
})();
