(() => {
  const plugCheckout = document.querySelector("plug-checkout");

  plugCheckout.paymentMethods = {
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

  plugCheckout.transactionConfig = {
    statementDescriptor: "#1 Demonstration Plug Checkout",
    amount: 100,
    description: "",
    orderId: "",
    customerId: "<CUSTOMER_ID>",
    currency: "BRL",
    capture: false,
  };

  plugCheckout.dialogConfig = {
    show: true,
    actionButtonLabel: "Continuar",
    errorActionButtonLabel: "Tentar novamente",
    successActionButtonLabel: "Continuar",
    successRedirectUrl: "https://www.plugpagamentos.com/",
    pixFilledProgressBarColor: "#344383",
    pixEmptyProgressBarColor: "#D8DFF0",
  };

  plugCheckout.addEventListener("paymentSuccess", ({ detail: { data } }) => {
    console.log(data);
  });

  plugCheckout.addEventListener("paymentError", ({ detail: { error } }) => {
    console.log(error);
  });
})();
