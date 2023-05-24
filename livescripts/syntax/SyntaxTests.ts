export class A {
    numMember: number;
    numArrMember: number[] = [0]
    nestedNumArrMember: number[][] = [[0]]
    strMember: string = ""
    strArrMember: string[] = [""]
    nestedStrArrMember: string[][] = [[""]]
    intMember: uint32 = 10
    intArrMember: uint32[] = CreateArray<uint32>([10,20,30])
    nestedIntArrMember: uint32[][] = [CreateArray<uint32>([10,20,30]),CreateArray<uint32>([40,50,60])]

    dictMember: TSDictionary<uint32,uint32> = CreateDictionary<uint32,uint32>({})
    nestedDictMember: TSDictionary<uint32,TSDictionary<string,TSDictionary<number,TSDictionary<uint32,A>>>> = CreateDictionary<uint32,TSDictionary<string,TSDictionary<number,TSDictionary<uint32,A>>>>({})

    method() {}
    constructor(value: number) {
        this.numMember = value;
        this.method();
    }
}

export class B extends A {
    bValue: number
    constructor(arg: number) {
        super(10);
        this.bValue = arg;
        this.method();
        this.childMethod();
    }
    childMethod() {}

    method() {
        super.method();
    }
}

function numFunc() {
    return 10.5
}

function intFunc(): uint32 {
    return 10.5
}

function strFunc() {
    return "hi"
}

function clsFunc() {
    return new A(100);
}

function clsFuncChild(): A {
    return new B(100);
}

function arrFunc() {
    return [10,20,30,40]
}

function dictFunc() {
    return CreateDictionary<string,string>({})
}

function argFunc(a: uint32, b: number, c: string, d: string[], e: number[], f: uint32[], g: string[][], h: TSDictionary<uint32,uint32>, i: TSDictionary<uint32,uint32[]>) {

}

export function RegisterSyntaxTestEvents(events: TSEvents) {
    // Scopes
    {
        let a = 10
    }
    {
        let a = 10
    }

    // Numbers
    {
        let num = 1.5
        let arr: number[] = [1,2,3,4]
        let arrNoDecl = [1,2,3,4]
    }

    // Ints
    {
        let intArr: uint32[] = CreateArray<uint32>([1,2,3,4.5]);
        let nestedArray: uint32[][] = [CreateArray<uint32>([1,2,3,4,5])]
        let intArrNoEntries: uint32[] = []
        intArrNoEntries.push(10)
    }

    // String stuff
    {
        let str = "mystr"
        let strArr = ["hi","world","ok"]
    }

    // Array stuff
    {
        let arr: number[][] = [[1,2,3,4],[5,6,7,8],[9,10,11,12,13,14]]
    }
}