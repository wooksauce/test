module.exports = {

  // acctNum will always be 12 digits long
  displayAcctNum: (acctNum) => {
    if (!acctNum) {
      return null;
    }
    let num = acctNum.toString();
    return `${num.substring(0, 4)} ${num.substring(4, 8)} ${num.substring(8, 12)} ${num.substring(12)}`;
  },

  convertDateAcctEntry: (date) => {
    if (!date) {
      return null;
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const parts = date.split('-');
    const year = parts[0];
    const month = months[Number(parts[1]) - 1];
    const day = Number(parts[2].substring(0,2));

    return `${month} ${day} ${year}`;
  },

  convertDateEditModal: (date) => {
    if (!date) {
      return null;
    }
    const parts = date.split('-');
    const year = parts[0].substring(2);
    const month = Number(parts[1]);
    const day = Number(parts[2].substring(0,2));

    return `${month}/${day}/${year}`;
  },

}