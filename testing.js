await page.goto('http://127.0.0.1:5500/StudentEnrollmentForm.html');
await page.fill('#country', 'india');
await page.fill('#age', '20');
await page.click('#submit');
await expect(page.locator('h1')).toHaveText('Dashboard');
