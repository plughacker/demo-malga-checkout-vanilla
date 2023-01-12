(() => {
  const malgaCheckout = document.querySelector("malga-checkout");

  malgaCheckout.paymentMethods = {
    pix: {
      expiresIn: 3600,
    },
    credit: {
      installments: {
        quantity: 1,
        show: true,
      },
      checkedSaveCard: false,
      showCreditCard: true,
    },
    boleto: {
      expiresDate: "2022-12-31",
      instructions: "Instruções para pagamento do boleto",
      interest: {
        days: 1,
        amount: 100,
      },
      fine: {
        days: 2,
        amount: 200,
      },
    },
  };

  malgaCheckout.transactionConfig = {
    statementDescriptor: "#1 Demonstration Malga Checkout",
    amount: 100,
    description: "",
    orderId: "",
    customerId: "<CUSTOMER_ID>",
    currency: "BRL",
    capture: false,
  };

  malgaCheckout.dialogConfig = {
    show: true,
    actionButtonLabel: "Continuar",
    errorActionButtonLabel: "Tentar novamente",
    successActionButtonLabel: "Continuar",
    successRedirectUrl: "https://www.malga.io/",
  };

  malgaCheckout.addEventListener("paymentSuccess", ({ detail: { data } }) => {
    console.log(data);
  });

  malgaCheckout.addEventListener("paymentError", ({ detail: { error } }) => {
    console.log(error);
  });
})();
