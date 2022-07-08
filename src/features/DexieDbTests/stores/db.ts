import Dexie from "dexie";

export interface Friend {
    id: number | string;
    name: string;
    age: number;
}

export class MyDb extends Dexie {
    friends!: Dexie.Table<Friend, number | string>;
    constructor() {
        super("MyDb");
        this.version(1).stores({
            friends: "id,name,age"
        });
    }
}

export const db = new MyDb();
