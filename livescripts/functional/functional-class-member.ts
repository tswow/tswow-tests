export class MyFunctionalClass {
    fp: (cls: MyFunctionalClass, player: TSPlayer) => void;
    value: uint32;

    constructor(fp: (cls: MyFunctionalClass, player: TSPlayer)=>void, value: uint32) {
        this.fp = (c,p) => fp(c,p);
        this.value = value;
    }

    call(player: TSPlayer) {
        if(this.fp) {
            this.fp(this, player);
        }
    }
}

let myFunctionalInstance = new MyFunctionalClass(
    (cls,player)=>player.SendBroadcastMessage(`Hello from Functioanl class ${cls.value}`),10
)

export function CallFunctionalClass(player: TSPlayer) {
    myFunctionalInstance.call(player);
}