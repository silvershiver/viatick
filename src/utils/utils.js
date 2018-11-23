export const checkEmail = email => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(email);
};

export const checkPass = pass => {
    let reg = /\d/;
    return reg.test(pass) && pass.length > 8
  };
