const pay = () => {
  // PAY.JPテスト公開鍵（payjp.jsライブラリの中で定義されているメソッド）
  const payjp = Payjp(process.env.PAYJP_PUBLIC_KEY)
  const elements = payjp.elements();
  const numberElement = elements.create('cardNumber');
  const expiryElement = elements.create('cardExpiry');
  const cvcElement = elements.create('cardCvc');

  numberElement.mount('#card-number');
  expiryElement.mount('#card-exp');
  cvcElement.mount('#card-cvc');

  const submit = document.getElementById("button");

    submit.addEventListener("click", (e) => {
      e.preventDefault();
      payjp.createToken(numberElement).then(function (response) {
        if (response.error) {
        } else {
          const token = response.id;
          const renderDom = document.getElementById("charge-form");
          const tokenObj = `<input value=${token} type="hidden" name='token'>`;
          renderDom.insertAdjacentHTML("beforeend", tokenObj);
        }

      numberElement.clear();
      expiryElement.clear();
      cvcElement.clear();

      // フォームの情報をサーバーサイドに送信
      document.getElementById("charge-form").submit();
    });
  });
};

// payページを読み込んだ時に実行
window.addEventListener("load", pay);