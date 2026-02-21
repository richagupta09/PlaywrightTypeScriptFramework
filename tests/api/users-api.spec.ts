import { test, expect, request } from '@playwright/test';

test.describe.skip('Users API', () => {

  test('should fetch users list', async () => {
    const api = await request.newContext({
      baseURL: 'https://reqres.in'
    });

    const response = await api.get('/api/users?page=2');
    expect(response.status()).toBe(200);
  });

  test('should create a user', async () => {
    const api = await request.newContext({
      baseURL: 'https://reqres.in'
    });

    const response = await api.post('/api/users', {
      data: { name: 'TestUser', job: 'QA' }
    });

    expect(response.status()).toBe(201);
  });

});
