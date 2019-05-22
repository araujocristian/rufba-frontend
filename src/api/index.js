// @flow
const API_ENDPOINT = 'http://localhost:3030';

export function isAuthenticated() {
  const accessToken =
    localStorage.getItem('access-token') ||
    sessionStorage.getItem('access-token');
  return accessToken != null;
}

function getAuthenticatedHeaders(
  unauthenticatedHeaders: Headers = new Headers(),
) {
  // Get token headers from localStorage
  const accessToken =
    localStorage.getItem('access-token') ||
    sessionStorage.getItem('access-token');

  if (accessToken != null) {
    unauthenticatedHeaders.append('Authorization', `Bearer ${accessToken}`);
  }
  return unauthenticatedHeaders;
}

function defaultHandleErrors(response: Response, responseBody: JSON) {
  throw new Error(
    JSON.stringify({ ...responseBody, statusCode: response.status }),
  );
}

export const createAuthRequest = (
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
) => async (
  path: string,
  body: {} = {},
  handleErrors: Response => void = defaultHandleErrors,
  headers: Headers = new Headers(),
) => {
  const apiHeaders = getAuthenticatedHeaders(headers);
  apiHeaders.append('Content-Type', 'application/json');
  apiHeaders.append('Accept', 'application/json');

  let init = {
    method,
    headers: apiHeaders,
  };

  if (body && (init.method === 'POST' || init.method === 'PUT')) {
    init = { ...init, body: JSON.stringify(body) };
  }

  const response = await fetch(`${API_ENDPOINT}${path}`, init);
  if (!response.ok) {
    const responseBody = await response.json().catch(() => ({}));
    return handleErrors(response, responseBody);
  }

  return response;
};

export const authGet = createAuthRequest('GET');
export const authPost = createAuthRequest('POST');
export const authPut = createAuthRequest('PUT');
export const authDelete = createAuthRequest('DELETE');
