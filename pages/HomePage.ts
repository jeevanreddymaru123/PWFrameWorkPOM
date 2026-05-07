import { Page, expect, Locator } from '@playwright/test';

export class HomePage {

    private readonly page: Page;
    //locators

    private readonly lnkMyAccount: Locator;
    private readonly lnkRegister: Locator;
    private readonly lnkLogin: Locator;
    private readonly txtSearchBox: Locator;
    private readonly btnSearch: Locator;

    //constructors
    constructor(page: Page) {
        this.page = page;
        this.lnkMyAccount = page.locator('span:has-text("My Account")');
        this.lnkRegister = page.locator('a:has-text("Register")');
        this.lnkLogin = page.locator('a:has-text("Login")');
        this.txtSearchBox = page.locator('input[placeholder="Search"]');
        this.btnSearch = page.locator('#search button[type="button"]');
    }
    //action methods

    // Check if HomePage exists
    async isHomePageExists() {

        let title: string = await this.page.title();
        if (title) {
            return true;
        }
        return false;
    }

    // Click "My Account" link
    async clickMyAccount() {
        await this.lnkMyAccount.click();

    }

    // Click "Register" link
    async clickRegister() {
        await this.lnkRegister.click();
    }

    // Click "Login" link
    async clickLogin() {
        await this.lnkLogin.click();

    }

    // Enter product name in the search box
    async enterProductName(pName: string) {
        await this.txtSearchBox.fill(pName);

    }

    // Click the search button
    async clickSearch() {
        await this.btnSearch.click();

    }

}