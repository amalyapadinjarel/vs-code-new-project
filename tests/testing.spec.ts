import { test, expect } from '@playwright/test';

test.describe('Student Enrollment Form', () => {

  test('Student should be eligible to vote', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/StudentEnrollmentForm.html');
    await page.fill('#country', 'India');
    await page.fill('#age', '20');
    await page.click('#submit');
    await expect(page.locator('#display')).toHaveText('Eligible to vote');
  });

  test('Student should be not eligible to vote', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/StudentEnrollmentForm.html');
    await page.fill('#country', 'America');
    await page.fill('#age', '17');
    await page.click('#submit');
    await expect(page.locator('#display')).toHaveText('Not Eligible to vote');
  });
});