var sample = {

  validateemail: function () {
    var email = document.getElementById('txtEmailAddress').value;

    console.log(email);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log('valid email');
      return (true);
    }
    else {
      throw this.invalidemailaddress();
    }
  },

  invalidemailaddress: function () {
    return 'please enter a valid email address';
  }
};