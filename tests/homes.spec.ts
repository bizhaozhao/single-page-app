import { test, expect } from '@playwright/test';

test.describe('Homes app', () => {
  test('should load default route', async ({page}) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Home page');
  });

  test('should open a home when selecting it', async ({page}) => {
    const id = 1;
    const expectedName = 'House details - Acme Fresh Start Housing'
    await page.goto('/');
    await page.getByTestId(`open-${id}`).click();
    await expect(page).toHaveTitle(expectedName);
  })
});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

  // Click the get started link.
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
