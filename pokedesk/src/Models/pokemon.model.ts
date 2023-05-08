export class Pokemon{
    id: number;
    sprite: string;
    name: string; 

    constructor({ cId=0, cName = '', cStripe = '' }: {cId?:number, cName?: string; cStripe?: string; } = {}){
        this.id = cId;
        this.name = cName;
        this.sprite = cStripe;
    }
}