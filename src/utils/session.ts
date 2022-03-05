import { AuthResponse } from 'api/types/Auth';
import { KeySessionJWT } from 'constants/enum';

const setSessionJWT = (
  authDetail: AuthResponse,
  isRemember: boolean = false
) => {
  if (isRemember) {
    window.localStorage.setItem(
      KeySessionJWT.AuthToken,
      authDetail.access_token
    );
    window.localStorage.setItem(
      KeySessionJWT.AuthTokenType,
      authDetail.token_type
    );
    window.localStorage.setItem(
      KeySessionJWT.AuthTokenExpire,
      `${authDetail.expires_in}`
    );
    return;
  }
  window.sessionStorage.setItem(
    KeySessionJWT.AuthToken,
    authDetail.access_token
  );
  window.sessionStorage.setItem(
    KeySessionJWT.AuthTokenType,
    authDetail.token_type
  );
  window.sessionStorage.setItem(
    KeySessionJWT.AuthTokenExpire,
    `${authDetail.expires_in}`
  );
};

const getSessionJWTAccessToken = () => {
  let token = window.localStorage.getItem(KeySessionJWT.AuthToken);
  let tokenType = window.localStorage.getItem(KeySessionJWT.AuthTokenType);
  if (!token) {
    token = window.sessionStorage.getItem(KeySessionJWT.AuthToken);
    tokenType = window.sessionStorage.getItem(KeySessionJWT.AuthTokenType);
  }

  if (!token || !tokenType) {
    return '';
  }

  return `${tokenType} ${token}`;
};

export { setSessionJWT, getSessionJWTAccessToken };
