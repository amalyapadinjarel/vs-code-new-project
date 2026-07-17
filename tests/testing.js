import { test, expect } from '@playwright/test';

function submitForm(overrides: Partial<BookData> = {}): BookData {
    const id = Date.now();
    return {
        title: `Teaching Book ${id}`,
        author: `Author ${id}`,
        publisher: `Publisher ${id}`,
        isbn: `978-${id}`,
        genre: 'fiction',
        publishedYear: '2020',
        price: '19.99',
        description: 'A book created by the Playwright teaching test.',
        ...overrides,
    };

    test('test', async ({ page }) => {
        await page.goto('http://127.0.0.1:8080/StudentEnrollmentForm.html');
        await page.locator('#country').click();
        await page.locator('#country').fill('india');
        await page.locator('#age').click();
        await page.locator('#age').fill('28');
        await page.getByRole('button', { name: 'SUBMIT' }).click();
        await page.locator('#country').click();
        await page.locator('#country').press('ArrowLeft');
        await page.locator('#country').press('ArrowLeft');
        await page.locator('#country').press('ArrowLeft');
        await page.locator('#country').press('ArrowLeft');
        await page.locator('#country').fill('India');
        await page.getByRole('button', { name: 'SUBMIT' }).click();
        await page.getByText('Voters List Country Age').click();
    });