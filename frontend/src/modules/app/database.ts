export enum KEYS {
    ITEMS = 'demusify-user-items',
}

export class Database {
    async loadItems() {
        const itemsJSON = localStorage.getItem(KEYS.ITEMS) || '[]';
        return JSON.parse(itemsJSON);
    }
    async addItem(item: any) {
        const items = await this.loadItems();
        items.push(item);

        localStorage.setItem(KEYS.ITEMS, JSON.stringify(items));
    }
}

export const database = new Database();
