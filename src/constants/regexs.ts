const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

export { passwordRegex, phoneRegex };
