const phoneNumber = /^[1][3,4,5,7,8][0-9]{9}$/;
const email = /^[a-zA-Z0-9_-]+@([a-zA-Z0-9]+\.)+(com|cn|net|org)$/;
const qq = /^[0-9]{5,10}$/;
const regex = {
    phoneNumber,
    email,
    qq,
};

export default regex;